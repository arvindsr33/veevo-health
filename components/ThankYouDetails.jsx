"use client";

import { useState, useEffect } from "react";

export default function ThankYouDetails({ lang = "en" }) {
  const [userData, setUserData] = useState(null);

  const translations = {
    en: {
      greeting: "Thank you",
      confirmation:
        "We've received your payment of $10 for the waitlist and secured your spot.",
      noData:
        "No user data found. Please return to the waitlist page to sign up.",
      position: "Your position on the waitlist",
      paymentId: "Payment ID",
      date: "Date",
      email: "Email",
    },
    es: {
      greeting: "Gracias",
      confirmation:
        "Hemos recibido tu pago de $10 para la lista de espera y asegurado tu lugar.",
      noData:
        "No se encontraron datos de usuario. Por favor regresa a la página de lista de espera para registrarte.",
      position: "Tu posición en la lista de espera",
      paymentId: "ID de Pago",
      date: "Fecha",
      email: "Correo Electrónico",
    },
  };

  const t = translations[lang];

  useEffect(() => {
    // Retrieve user data from session storage
    const storedData = sessionStorage.getItem("waitlistUser");
    if (storedData) {
      try {
        setUserData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  if (!userData) {
    return (
      <div className="text-center text-gray-700">
        <p>{t.noData}</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        {t.greeting}, {userData.name}!
      </h2>
      <p className="text-lg text-gray-700 mb-6">{t.confirmation}</p>
      <div className="border-t border-b border-gray-200 py-6 mb-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left">
          <div className="text-gray-600">{t.position}:</div>
          <div className="font-semibold">#{userData.position || "---"}</div>

          <div className="text-gray-600">{t.paymentId}:</div>
          <div className="font-semibold">{userData.paymentId || "---"}</div>

          <div className="text-gray-600">{t.date}:</div>
          <div className="font-semibold">
            {userData.date || new Date().toLocaleDateString()}
          </div>

          <div className="text-gray-600">{t.email}:</div>
          <div className="font-semibold">{userData.email || "---"}</div>
        </div>
      </div>
    </div>
  );
}
