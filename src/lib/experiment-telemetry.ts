"use client";

export const EXPERIMENT_VERSION = "adsterra-baseline-v2";
export const EXPERIMENT_PHASE = "baseline";
export const BASELINE_ARM = "production_baseline";

const EXPERIMENT_ELIGIBLE_DOMAINS = new Set([
  "guildmasteronline.com",
  "monobombo.com"
]);

const TRUST_ROUTES = new Set([
  "/",
  "/about",
  "/contact",
  "/disclosure",
  "/privacy",
  "/sources",
  "/terms"
]);

export type ExperimentTelemetryFields = {
  assigned_arm: string;
  effective_arm: string;
  eligible_session: number;
  experiment_phase: string;
  experiment_version: string;
  fallback_reason: string;
  site_domain: string;
};

declare global {
  interface Window {
    __adExperimentContext?: ExperimentTelemetryFields;
    __adExperimentEventCounts?: Record<string, number>;
    __adExperimentLastPageView?: string;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function normalizeHostname(hostname: string) {
  return hostname.toLowerCase().replace(/^www\./, "");
}

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export function isEligibleExperimentPage(hostname: string, pathname: string) {
  return (
    EXPERIMENT_ELIGIBLE_DOMAINS.has(normalizeHostname(hostname)) &&
    !TRUST_ROUTES.has(normalizePathname(pathname))
  );
}

export function getExperimentTelemetryFields(pathname = window.location.pathname) {
  return {
    experiment_version: EXPERIMENT_VERSION,
    experiment_phase: EXPERIMENT_PHASE,
    assigned_arm: BASELINE_ARM,
    effective_arm: BASELINE_ARM,
    fallback_reason: "none",
    eligible_session: isEligibleExperimentPage(window.location.hostname, pathname) ? 1 : 0,
    site_domain: normalizeHostname(window.location.hostname)
  } satisfies ExperimentTelemetryFields;
}

export function setExperimentTelemetryContext(pathname = window.location.pathname) {
  const fields = getExperimentTelemetryFields(pathname);
  window.__adExperimentContext = fields;
  window.gtag?.("set", fields);
  return fields;
}

export function trackExperimentEvent(
  eventName: string,
  payload: Record<string, unknown> = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const fields =
    window.__adExperimentContext || setExperimentTelemetryContext(window.location.pathname);
  const counts = window.__adExperimentEventCounts || {};
  counts[eventName] = (counts[eventName] || 0) + 1;
  window.__adExperimentEventCounts = counts;
  document.documentElement.dataset.telemetryEventCounts = JSON.stringify(counts);

  window.gtag("event", eventName, {
    ...fields,
    ...payload
  });
}
