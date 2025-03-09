/**
 * Internationalization utilities for Veevo Health website
 */

// Common translations
export const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    contact: "Contact",
    joinWaitlist: "Join Waitlist",

    // Footer
    allRightsReserved: "All rights reserved",

    // Common buttons
    learnMore: "Learn More",
    readMore: "Read More",
    submitForm: "Submit",
    sendMessage: "Send Message",

    // Form labels
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Message",

    // Error messages
    errorRequired: "This field is required",
    errorEmail: "Please enter a valid email address",
    errorPhone: "Please enter a valid phone number",

    // Success messages
    messageSent: "Your message has been sent successfully!",

    // SEO
    siteTitle: "Veevo Health | Love Your Heart, Live Longer",
    siteDescription:
      "Predictive, personalized, and precise heart health assessments to help you live longer.",
  },
  es: {
    // Navigation
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    joinWaitlist: "Unirse a la Lista",

    // Footer
    allRightsReserved: "Todos los derechos reservados",

    // Common buttons
    learnMore: "Conocer Más",
    readMore: "Leer Más",
    submitForm: "Enviar",
    sendMessage: "Enviar Mensaje",

    // Form labels
    fullName: "Nombre Completo",
    email: "Correo Electrónico",
    phone: "Número de Teléfono",
    message: "Mensaje",

    // Error messages
    errorRequired: "Este campo es obligatorio",
    errorEmail: "Por favor ingresa un correo electrónico válido",
    errorPhone: "Por favor ingresa un número de teléfono válido",

    // Success messages
    messageSent: "¡Tu mensaje ha sido enviado exitosamente!",

    // SEO
    siteTitle: "Veevo Health | Ama Tu Corazón, Vive Más",
    siteDescription:
      "Evaluaciones de salud cardíaca predictivas, personalizadas y precisas para ayudarte a vivir más tiempo.",
  },
};

// Get translation for a specific key
export const getTranslation = (lang, key) => {
  if (!translations[lang]) {
    console.warn(`Translation for language "${lang}" not found`);
    return key;
  }

  if (!translations[lang][key]) {
    console.warn(
      `Translation for key "${key}" in language "${lang}" not found`
    );
    return key;
  }

  return translations[lang][key];
};

// Format date according to locale
export const formatDate = (date, lang) => {
  const locale = lang === "es" ? "es-ES" : "en-US";
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Format currency according to locale
export const formatCurrency = (amount, lang) => {
  const locale = lang === "es" ? "es-ES" : "en-US";
  const currency = "USD";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

// Get the alternate language for the current language
export const getAlternateLanguage = (lang) => {
  return lang === "es" ? "en" : "es";
};

// Get the path for the current page in the alternate language
export const getAlternatePath = (currentPath, lang) => {
  const pathMap = {
    // English to Spanish
    "/": "/es",
    "/services": "/es/servicios",
    "/contact": "/es/contacto",
    "/waitlist": "/es/lista-de-espera",
    "/waitlist/thank-you": "/es/lista-de-espera/gracias",

    // Spanish to English
    "/es": "/",
    "/es/servicios": "/services",
    "/es/contacto": "/contact",
    "/es/lista-de-espera": "/waitlist",
    "/es/lista-de-espera/gracias": "/waitlist/thank-you",
  };

  return (
    pathMap[currentPath] ||
    (lang === "es" ? currentPath.replace(/^\/es/, "") : `/es${currentPath}`)
  );
};
