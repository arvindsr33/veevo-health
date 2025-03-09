import { siteUrls } from "@/lib/config";

export default async function sitemap() {
  const baseUrl = siteUrls.baseUrl;

  // Define all static routes
  const routes = [
    // English routes
    "",
    "/services",
    "/contact",
    "/waitlist",
    "/waitlist/thank-you",

    // Spanish routes
    "/es",
    "/es/servicios",
    "/es/contacto",
    "/es/lista-de-espera",
    "/es/lista-de-espera/gracias",
  ];

  // Map the routes to full URLs with metadata
  const routesWithMetadata = routes.map((route) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" || route === "/es" ? 1.0 : 0.8,
    };
  });

  return routesWithMetadata;
}
