import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;

export function initAnalytics() {
  if (!import.meta.env.PROD || !measurementId) {
    return;
  }

  ReactGA.initialize(measurementId);
}

export function trackPageView(path: string) {
  if (!import.meta.env.PROD || !measurementId) {
    return;
  }

  ReactGA.send({ hitType: "pageview", page: path });
}
