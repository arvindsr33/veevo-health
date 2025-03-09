/**
 * Payment processing utilities for Veevo Health website
 */

import { featureFlags } from "./config";

// Initialize payment processor (Stripe in this case)
export const initPaymentProcessor = async () => {
  if (typeof window === "undefined" || !featureFlags.enablePaymentProcessing) {
    return null;
  }

  // Load Stripe.js dynamically
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  return stripe;
};

// Process waitlist payment
export const processWaitlistPayment = async (userData) => {
  if (!featureFlags.enablePaymentProcessing) {
    // Return mock successful payment for development
    return {
      success: true,
      id: `mock_payment_${Date.now()}`,
      amount: 1000, // $10.00
    };
  }

  try {
    // Create payment intent on the server
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1000, // $10.00 in cents
        currency: "usd",
        metadata: {
          name: userData.name,
          email: userData.email,
          age: userData.age,
          location: `${userData.city}, ${userData.state}`,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Payment server error");
    }

    const data = await response.json();

    // Load Stripe.js if not already loaded
    const stripe = await initPaymentProcessor();

    if (!stripe) {
      throw new Error("Failed to load payment processor");
    }

    // Confirm the payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      data.clientSecret,
      {
        payment_method: {
          card: userData.cardElement,
          billing_details: {
            name: userData.name,
            email: userData.email,
          },
        },
      }
    );

    if (error) {
      throw new Error(error.message);
    }

    return {
      success: true,
      id: paymentIntent.id,
      amount: paymentIntent.amount,
    };
  } catch (error) {
    console.error("Payment processing error:", error);
    return {
      success: false,
      error: error.message || "Payment processing failed",
    };
  }
};

// Helper function to load Stripe.js
const loadStripe = async (publishableKey) => {
  if (!publishableKey) {
    console.error("Stripe publishable key is missing");
    return null;
  }

  if (window.Stripe) {
    return window.Stripe(publishableKey);
  }

  // Load Stripe.js script
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.onload = () => {
      resolve(window.Stripe(publishableKey));
    };
    document.head.appendChild(script);
  });
};
