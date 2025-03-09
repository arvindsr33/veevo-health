"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { processWaitlistPayment } from "@/lib/payment";
import { trackWaitlistSignup } from "@/lib/analytics";

export default function WaitlistForm({ lang = "en" }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    state: "",
    country: "United States",
    paymentMethod: "credit-card",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const translations = {
    en: {
      fullName: "Full Name",
      email: "Email Address",
      age: "Age",
      city: "City",
      state: "State/Province",
      country: "Country",
      paymentMethod: "Payment Method",
      creditCard: "Credit Card",
      paypal: "PayPal",
      cardNumber: "Card Number",
      expiryDate: "Expiry Date",
      cvv: "CVV",
      secureSpot: "Secure Your Spot – Pay $10 Now",
      processing: "Processing...",
      errorRequired: "This field is required",
      errorEmail: "Please enter a valid email address",
      errorAge: "Please enter a valid age",
      errorCardNumber: "Please enter a valid card number",
      errorExpiry: "Please enter a valid expiry date (MM/YY)",
      errorCvv: "Please enter a valid CVV",
      paymentFailed: "Payment processing failed. Please try again.",
    },
    es: {
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      age: "Edad",
      city: "Ciudad",
      state: "Estado/Provincia",
      country: "País",
      paymentMethod: "Método de Pago",
      creditCard: "Tarjeta de Crédito",
      paypal: "PayPal",
      cardNumber: "Número de Tarjeta",
      expiryDate: "Fecha de Vencimiento",
      cvv: "CVV",
      secureSpot: "Asegura Tu Lugar – Paga $10 Ahora",
      processing: "Procesando...",
      errorRequired: "Este campo es obligatorio",
      errorEmail: "Por favor ingresa un correo electrónico válido",
      errorAge: "Por favor ingresa una edad válida",
      errorCardNumber: "Por favor ingresa un número de tarjeta válido",
      errorExpiry: "Por favor ingresa una fecha de vencimiento válida (MM/AA)",
      errorCvv: "Por favor ingresa un CVV válido",
      paymentFailed:
        "El procesamiento del pago falló. Por favor intenta de nuevo.",
    },
  };

  const t = translations[lang];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    ["name", "email", "age", "city", "state"].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = t.errorRequired;
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errorEmail;
    }

    // Age validation
    if (
      formData.age &&
      (isNaN(formData.age) || formData.age < 18 || formData.age > 120)
    ) {
      newErrors.age = t.errorAge;
    }

    // Payment method validation
    if (formData.paymentMethod === "credit-card") {
      // Card number validation (basic)
      if (
        !formData.cardNumber.trim() ||
        formData.cardNumber.replace(/\s/g, "").length < 13
      ) {
        newErrors.cardNumber = t.errorCardNumber;
      }

      // Expiry validation (MM/YY format)
      if (!formData.expiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
        newErrors.expiry = t.errorExpiry;
      }

      // CVV validation
      if (!formData.cvv.trim() || !/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = t.errorCvv;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setPaymentError("");

    try {
      // Process payment
      const paymentResult = await processWaitlistPayment({
        ...formData,
        // In a real implementation, you would create a card element with Stripe
        // and pass it here instead of raw card details
      });

      if (paymentResult.success) {
        // Track successful signup
        trackWaitlistSignup({
          city: formData.city,
          state: formData.state,
          age: formData.age,
        });

        // Store user data in session/local storage for thank you page
        sessionStorage.setItem(
          "waitlistUser",
          JSON.stringify({
            name: formData.name,
            email: formData.email,
            paymentId: paymentResult.id,
          })
        );

        // Redirect to thank you page
        router.push(
          lang === "en" ? "/waitlist/thank-you" : "/es/lista-de-espera/gracias"
        );
      } else {
        setPaymentError(t.paymentFailed);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setPaymentError(t.paymentFailed);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          {t.fullName}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
          placeholder={t.fullName}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
          placeholder={t.email}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 mb-2">
            {t.age}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.age ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
            placeholder={t.age}
            min="18"
            max="120"
          />
          {errors.age && (
            <p className="mt-1 text-red-500 text-sm">{errors.age}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 mb-2">
            {t.city}
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
            placeholder={t.city}
          />
          {errors.city && (
            <p className="mt-1 text-red-500 text-sm">{errors.city}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 mb-2">
            {t.state}
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.state ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
            placeholder={t.state}
          />
          {errors.state && (
            <p className="mt-1 text-red-500 text-sm">{errors.state}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="country" className="block text-gray-700 mb-2">
          {t.country}
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Spain">Spain</option>
          <option value="Argentina">Argentina</option>
          <option value="Colombia">Colombia</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-bold mb-4">{t.paymentMethod}</h3>
        <div className="flex space-x-6 mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="credit-card"
              name="paymentMethod"
              value="credit-card"
              checked={formData.paymentMethod === "credit-card"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="credit-card">{t.creditCard}</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={formData.paymentMethod === "paypal"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="paypal">{t.paypal}</label>
          </div>
        </div>

        {formData.paymentMethod === "credit-card" && (
          <div className="mt-4">
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
                {t.cardNumber}
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && (
                <p className="mt-1 text-red-500 text-sm">{errors.cardNumber}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-gray-700 mb-2">
                  {t.expiryDate}
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.expiry ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  placeholder="MM/YY"
                />
                {errors.expiry && (
                  <p className="mt-1 text-red-500 text-sm">{errors.expiry}</p>
                )}
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 mb-2">
                  {t.cvv}
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  placeholder="123"
                />
                {errors.cvv && (
                  <p className="mt-1 text-red-500 text-sm">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {paymentError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {paymentError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 text-white px-6 py-3 rounded-md font-bold hover:bg-teal-700 transition duration-300 disabled:bg-teal-400"
      >
        {isSubmitting ? t.processing : t.secureSpot}
      </button>
    </form>
  );
}
