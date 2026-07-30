import assert from "node:assert/strict";
import test from "node:test";
import {
  createAdAttempt,
  startAdRenderDeadline
} from "../src/lib/ad-attempt.ts";

test("an advertisement attempt accepts only one terminal outcome", () => {
  const events = [];
  const attempt = createAdAttempt(
    { format: "native", slotId: "native_test" },
    (eventName, payload) => events.push({ eventName, payload }),
    "attempt-test-1"
  );

  attempt.mounted();
  attempt.scriptLoaded();

  assert.equal(attempt.finish("script_error"), true);
  assert.equal(attempt.finish("empty_after_timeout"), false);
  assert.equal(attempt.finish("creative_rendered"), false);
  assert.equal(attempt.getTerminalOutcome(), "script_error");

  const terminalEvents = events.filter(({ payload }) => payload.terminal_outcome);
  assert.equal(terminalEvents.length, 1);
  assert.equal(terminalEvents[0].eventName, "ad_script_error");
  assert.equal(terminalEvents[0].payload.attempt_id, "attempt-test-1");
});

test("a creative rendered during the grace period is not marked empty", () => {
  const timers = [];
  const setTimer = (callback) => {
    const timer = { callback, cancelled: false };
    timers.push(timer);
    return timer;
  };
  const clearTimer = (timer) => {
    timer.cancelled = true;
  };
  const runNextTimer = () => {
    const timer = timers.shift();
    assert.ok(timer);
    if (!timer.cancelled) timer.callback();
  };

  let creativePresent = false;
  let creativeCount = 0;
  let emptyCount = 0;

  startAdRenderDeadline({
    clearTimer,
    graceMs: 1,
    hasCreative: () => creativePresent,
    initialDelayMs: 1,
    onCreative: () => {
      creativeCount += 1;
    },
    onEmpty: () => {
      emptyCount += 1;
    },
    setTimer
  });

  runNextTimer();
  creativePresent = true;
  runNextTimer();

  assert.equal(creativeCount, 1);
  assert.equal(emptyCount, 0);
});

test("a placement still empty after the grace period has one empty result", () => {
  const timers = [];
  const setTimer = (callback) => {
    const timer = { callback, cancelled: false };
    timers.push(timer);
    return timer;
  };
  const clearTimer = (timer) => {
    timer.cancelled = true;
  };
  const runNextTimer = () => {
    const timer = timers.shift();
    assert.ok(timer);
    if (!timer.cancelled) timer.callback();
  };

  let emptyCount = 0;
  startAdRenderDeadline({
    clearTimer,
    graceMs: 1,
    hasCreative: () => false,
    initialDelayMs: 1,
    onCreative: () => assert.fail("unexpected creative"),
    onEmpty: () => {
      emptyCount += 1;
    },
    setTimer
  });

  runNextTimer();
  runNextTimer();

  assert.equal(emptyCount, 1);
});
