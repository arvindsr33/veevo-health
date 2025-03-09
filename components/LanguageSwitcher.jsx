"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    // Determine current language based on URL
    if (pathname.startsWith("/es")) {
      setCurrentLang("es");
    } else {
      setCurrentLang("en");
    }
  }, [pathname]);

  const switchLanguage = () => {
    // Map of page paths between languages
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

    // Find the corresponding path in the other language
    let newPath = pathMap[pathname];

    // If no direct mapping exists, use a fallback approach
    if (!newPath) {
      if (currentLang === "en") {
        // Switch to Spanish
        newPath = "/es" + pathname;
      } else {
        // Switch to English
        newPath = pathname.replace(/^\/es/, "");
        if (newPath === "") newPath = "/";
      }
    }

    router.push(newPath);
  };

  return (
    <button
      onClick={switchLanguage}
      className="text-gray-700 hover:text-teal-600 flex items-center"
    >
      {currentLang === "en" ? "Español" : "English"}
    </button>
  );
}
