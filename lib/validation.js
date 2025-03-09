/**
 * Form validation utilities for Veevo Health website
 */

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number format
export const isValidPhone = (phone) => {
  // Allow various formats with or without country code
  const phoneRegex = /^(\+\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phone);
};

// Validate credit card number format (basic check)
export const isValidCardNumber = (cardNumber) => {
  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, "");
  // Check if it's all digits and proper length (13-19 digits)
  return /^\d{13,19}$/.test(cleanNumber) && luhnCheck(cleanNumber);
};

// Validate expiry date format (MM/YY)
export const isValidExpiryDate = (expiry) => {
  if (!/^\d{2}\/\d{2}$/.test(expiry)) {
    return false;
  }

  const [month, year] = expiry.split("/");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
  const currentMonth = currentDate.getMonth() + 1; // 1-12

  // Convert to numbers
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  // Check if month is valid (1-12)
  if (monthNum < 1 || monthNum > 12) {
    return false;
  }

  // Check if date is in the future
  return (
    yearNum > currentYear ||
    (yearNum === currentYear && monthNum >= currentMonth)
  );
};

// Validate CVV format (3-4 digits)
export const isValidCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
};

// Luhn algorithm for credit card validation
const luhnCheck = (cardNumber) => {
  let sum = 0;
  let shouldDouble = false;

  // Loop through values starting from the rightmost digit
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

// Validate form data
export const validateForm = (data, lang = "en") => {
  const errors = {};
  const errorMessages = {
    en: {
      required: "This field is required",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      cardNumber: "Please enter a valid card number",
      expiry: "Please enter a valid expiry date (MM/YY)",
      cvv: "Please enter a valid CVV",
    },
    es: {
      required: "Este campo es obligatorio",
      email: "Por favor ingresa un correo electrónico válido",
      phone: "Por favor ingresa un número de teléfono válido",
      cardNumber: "Por favor ingresa un número de tarjeta válido",
      expiry: "Por favor ingresa una fecha de vencimiento válida (MM/AA)",
      cvv: "Por favor ingresa un CVV válido",
    },
  };

  const messages = errorMessages[lang];

  // Required fields
  ["name", "email"].forEach((field) => {
    if (!data[field]) {
      errors[field] = messages.required;
    }
  });

  // Email validation
  if (data.email && !isValidEmail(data.email)) {
    errors.email = messages.email;
  }

  // Phone validation (if provided)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = messages.phone;
  }

  // Payment method validation
  if (data.paymentMethod === "credit-card") {
    // Card number validation
    if (!data.cardNumber) {
      errors.cardNumber = messages.required;
    } else if (!isValidCardNumber(data.cardNumber)) {
      errors.cardNumber = messages.cardNumber;
    }

    // Expiry date validation
    if (!data.expiry) {
      errors.expiry = messages.required;
    } else if (!isValidExpiryDate(data.expiry)) {
      errors.expiry = messages.expiry;
    }

    // CVV validation
    if (!data.cvv) {
      errors.cvv = messages.required;
    } else if (!isValidCVV(data.cvv)) {
      errors.cvv = messages.cvv;
    }
  }

  return errors;
};
