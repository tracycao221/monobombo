export type AdAttemptTerminalOutcome =
  | "creative_rendered"
  | "empty_after_timeout"
  | "script_error";

type AdAttemptMetadata = {
  format: string;
  slotId: string;
};

type AdAttemptTracker = (
  eventName: string,
  payload: Record<string, unknown>
) => void;

type TimerHandle = ReturnType<typeof setTimeout>;

type RenderDeadlineOptions = {
  graceMs?: number;
  hasCreative: () => boolean;
  initialDelayMs?: number;
  onCreative: () => void;
  onInitialEmpty?: () => void;
  onEmpty: () => void;
  setTimer?: (callback: () => void, delayMs: number) => TimerHandle;
  clearTimer?: (handle: TimerHandle) => void;
};

export const AD_RENDER_INITIAL_CHECK_MS = 5000;
export const AD_RENDER_GRACE_MS = 5000;

let attemptSequence = 0;

function createAttemptId() {
  attemptSequence += 1;
  const randomPart =
    globalThis.crypto?.randomUUID?.() ||
    `${Date.now().toString(36)}-${attemptSequence.toString(36)}`;
  return `ad-${randomPart}`;
}

export function createAdAttempt(
  metadata: AdAttemptMetadata,
  track: AdAttemptTracker,
  attemptId = createAttemptId()
) {
  let terminalOutcome: AdAttemptTerminalOutcome | null = null;

  const basePayload = {
    ad_format: metadata.format,
    ad_slot: metadata.slotId,
    attempt_id: attemptId,
    format: metadata.format,
    placement: metadata.slotId,
    slot_id: metadata.slotId
  };

  const emit = (eventName: string, payload: Record<string, unknown> = {}) => {
    track(eventName, {
      ...basePayload,
      ...payload
    });
  };

  const finish = (outcome: AdAttemptTerminalOutcome) => {
    if (terminalOutcome) return false;
    terminalOutcome = outcome;

    const eventName =
      outcome === "creative_rendered"
        ? "ad_creative_rendered"
        : outcome === "script_error"
          ? "ad_script_error"
          : "ad_empty_after_timeout";

    emit(eventName, { terminal_outcome: outcome });
    return true;
  };

  return {
    attemptId,
    finish,
    getTerminalOutcome: () => terminalOutcome,
    mounted: () => emit("ad_slot_mounted"),
    scriptLoaded: () => {
      if (!terminalOutcome) emit("ad_script_loaded");
    }
  };
}

export function startAdRenderDeadline({
  clearTimer = clearTimeout,
  graceMs = AD_RENDER_GRACE_MS,
  hasCreative,
  initialDelayMs = AD_RENDER_INITIAL_CHECK_MS,
  onCreative,
  onInitialEmpty,
  onEmpty,
  setTimer = setTimeout
}: RenderDeadlineOptions) {
  let completed = false;
  let graceTimer: TimerHandle | undefined;

  const finish = (callback: () => void) => {
    if (completed) return;
    completed = true;
    if (graceTimer) clearTimer(graceTimer);
    callback();
  };

  const initialTimer = setTimer(() => {
    if (hasCreative()) {
      finish(onCreative);
      return;
    }

    onInitialEmpty?.();
    graceTimer = setTimer(() => {
      finish(hasCreative() ? onCreative : onEmpty);
    }, graceMs);
  }, initialDelayMs);

  return {
    cancel() {
      if (completed) return;
      completed = true;
      clearTimer(initialTimer);
      if (graceTimer) clearTimer(graceTimer);
    },
    markCreative() {
      finish(onCreative);
    }
  };
}
