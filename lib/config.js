/**
 * Configuration settings for the Veevo Health website
 */

// ISR (Incremental Static Regeneration) configuration
export const isrConfig = {
  // Time in seconds after which a page regeneration can occur
  revalidate: 3600, // 1 hour
};

// Image optimization configuration
export const imageConfig = {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60 * 60 * 24, // 24 hours
};

// Site URLs configuration
export const siteUrls = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://veevo.health",
  defaultLocale: "en",
  locales: ["en", "es"],
};

// Feature flags
export const featureFlags = {
  enableAnalytics: process.env.NODE_ENV === "production",
  enablePaymentProcessing: true,
};
