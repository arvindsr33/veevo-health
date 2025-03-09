/**
 * SEO Utility Functions for Veevo Health Website
 *
 * This file contains utility functions for SEO optimization,
 * including structured data generation and URL slug handling.
 */

/**
 * Generates structured data for a page in JSON-LD format
 *
 * @param {Object} options - Configuration options
 * @param {string} options.type - The schema.org type (e.g., 'WebPage', 'Organization')
 * @param {string} options.name - The name of the entity
 * @param {string} options.description - Description of the entity
 * @param {string} options.url - URL of the page
 * @param {string} options.image - URL of the image representing the entity
 * @param {Object} options.additionalData - Any additional structured data properties
 * @returns {Object} - JSON-LD structured data object
 */
export function generateStructuredData({
  type,
  name,
  description,
  url,
  image,
  additionalData = {},
}) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
  };

  if (image) {
    baseData.image = image;
  }

  return {
    ...baseData,
    ...additionalData,
  };
}

/**
 * Generates organization structured data for Veevo Health
 *
 * @param {string} lang - Language code ('en' or 'es')
 * @returns {Object} - JSON-LD structured data for the organization
 */
export function generateOrganizationData(lang = "en") {
  const name = "Veevo Health";
  const description =
    lang === "en"
      ? "Predictive, personalized, and precise heart health assessments to help you live longer."
      : "Evaluaciones de salud cardíaca predictivas, personalizadas y precisas para ayudarte a vivir más tiempo.";

  const url =
    lang === "en" ? "https://veevo.health" : "https://veevo.health/es";

  return generateStructuredData({
    type: "Organization",
    name,
    description,
    url,
    image: "https://veevo.health/images/veevo-logo.svg",
    additionalData: {
      address: {
        "@type": "PostalAddress",
        streetAddress: "601 Van Ness Ave",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "arvind@veevo.health",
        contactType: "customer service",
      },
      sameAs: ["https://linkedin.com/in/arvind-srivastav"],
    },
  });
}

/**
 * Generates service structured data for Veevo Health's heart assessment service
 *
 * @param {string} lang - Language code ('en' or 'es')
 * @returns {Object} - JSON-LD structured data for the service
 */
export function generateServiceData(lang = "en") {
  const name =
    lang === "en"
      ? "AI-driven Heart Health Assessment"
      : "Evaluación de Salud Cardíaca Impulsada por IA";

  const description =
    lang === "en"
      ? "Our comprehensive AI-driven heart health assessment provides predictive, personalized, and precise insights to optimize your longevity."
      : "Nuestra evaluación integral de salud cardíaca impulsada por IA proporciona información predictiva, personalizada y precisa para optimizar tu longevidad.";

  const url =
    lang === "en"
      ? "https://veevo.health/services"
      : "https://veevo.health/es/servicios";

  return generateStructuredData({
    type: "Service",
    name,
    description,
    url,
    image: "https://veevo.health/images/ai-assessment.jpg",
    additionalData: {
      provider: {
        "@type": "Organization",
        name: "Veevo Health",
        url: lang === "en" ? "https://veevo.health" : "https://veevo.health/es",
      },
      serviceType: "Heart Health Assessment",
      category: "Health & Medical",
    },
  });
}

/**
 * Generates URL slugs for different page types
 *
 * @param {string} pageType - Type of page ('home', 'services', 'contact', 'waitlist', 'thankyou')
 * @param {string} lang - Language code ('en' or 'es')
 * @returns {string} - URL slug for the specified page type and language
 */
export function generateUrlSlug(pageType, lang = "en") {
  const slugs = {
    en: {
      home: "",
      services: "services",
      contact: "contact",
      waitlist: "waitlist",
      thankyou: "waitlist/thank-you",
    },
    es: {
      home: "es",
      services: "es/servicios",
      contact: "es/contacto",
      waitlist: "es/lista-de-espera",
      thankyou: "es/lista-de-espera/gracias",
    },
  };

  return slugs[lang][pageType] || "";
}

/**
 * Generates meta tags for a page
 *
 * @param {Object} options - Configuration options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.url - Page URL
 * @param {string} options.image - Image URL for social sharing
 * @param {string} options.lang - Language code ('en' or 'es')
 * @returns {Object} - Meta tags object
 */
export function generateMetaTags({
  title,
  description,
  url,
  image = "https://veevo.health/images/veevo-social-share.jpg",
  lang = "en",
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
      siteName: "Veevo Health",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        "en-US": lang === "en" ? url : url.replace("/es", ""),
        "es-ES": lang === "es" ? url : `${url}/es`,
      },
    },
  };
}
