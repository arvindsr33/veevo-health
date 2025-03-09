"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initAnalytics, trackPageView } from "@/lib/analytics";

export default function AnalyticsWrapper({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize analytics
    initAnalytics();
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    if (pathname) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
