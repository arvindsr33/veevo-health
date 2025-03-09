import { siteUrls } from "@/lib/config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*", "/admin/*"],
    },
    sitemap: `${siteUrls.baseUrl}/sitemap.xml`,
  };
}
