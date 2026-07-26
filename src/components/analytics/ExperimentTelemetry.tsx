"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import {
  EXPERIMENT_VERSION,
  setExperimentTelemetryContext,
  trackExperimentEvent
} from "@/lib/experiment-telemetry";

const SESSION_INITIALIZED_KEY = `${EXPERIMENT_VERSION}:session_initialized`;
const ELIGIBLE_SESSION_KEY = `${EXPERIMENT_VERSION}:eligible_session_started`;

function deviceClass() {
  return window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
}

export function ExperimentTelemetry({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useReportWebVitals((metric) => {
    trackExperimentEvent("web_vitals", {
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating,
      metric_delta: metric.delta,
      navigation_type: metric.navigationType,
      page_path: window.location.pathname,
      device_class: deviceClass(),
      non_interaction: true
    });
    document.documentElement.dataset.telemetryWebVitals = metric.name;
  });

  useEffect(() => {
    if (!measurementId) {
      document.documentElement.dataset.telemetryStatus = "missing_measurement_id";
      return;
    }
    if (typeof window.gtag !== "function") {
      document.documentElement.dataset.telemetryStatus = "waiting_for_gtag";
      return;
    }
    document.documentElement.dataset.telemetryStatus = "active";

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    const fields = setExperimentTelemetryContext(pathname);
    document.documentElement.dataset.telemetryExperimentFields = JSON.stringify(fields);

    if (!sessionStorage.getItem(SESSION_INITIALIZED_KEY)) {
      sessionStorage.setItem(SESSION_INITIALIZED_KEY, "1");
      trackExperimentEvent("experiment_session_initialized", {
        device_class: deviceClass(),
        landing_page: pagePath
      });
    }

    if (fields.eligible_session && !sessionStorage.getItem(ELIGIBLE_SESSION_KEY)) {
      sessionStorage.setItem(ELIGIBLE_SESSION_KEY, "1");
      trackExperimentEvent("eligible_session_started", {
        device_class: deviceClass(),
        first_eligible_page: pagePath
      });
    }

    if (window.__adExperimentLastPageView === pagePath) return;
    window.__adExperimentLastPageView = pagePath;

    trackExperimentEvent("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
      send_to: measurementId
    });
    document.documentElement.dataset.telemetryPagePath = pagePath;
  }, [measurementId, pathname, searchParams]);

  return null;
}
