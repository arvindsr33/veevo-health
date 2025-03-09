/**
 * Analytics utilities for Veevo Health website
 */

import { featureFlags } from "./config";

// Initialize analytics based on environment
export const initAnalytics = () => {
  if (typeof window === "undefined" || !featureFlags.enableAnalytics) {
    return;
  }

  // Google Analytics setup
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX"); // Replace with actual GA measurement ID
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window === "undefined" || !featureFlags.enableAnalytics) {
    return;
  }

  window.gtag?.("config", "G-XXXXXXXXXX", {
    page_path: url,
  });
};

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window === "undefined" || !featureFlags.enableAnalytics) {
    return;
  }

  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track waitlist signups
export const trackWaitlistSignup = (data) => {
  if (typeof window === "undefined" || !featureFlags.enableAnalytics) {
    return;
  }

  window.gtag?.("event", "waitlist_signup", {
    event_category: "conversion",
    event_label: "Waitlist Signup",
    user_location: `${data.city}, ${data.state}`,
    user_age: data.age,
  });
};
