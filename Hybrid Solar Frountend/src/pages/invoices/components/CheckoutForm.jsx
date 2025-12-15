import { useCallback, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useAuth } from "@clerk/clerk-react";

// Initialize Stripe ONCE, outside component
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutForm({ invoiceId, onSessionCreated }) {
  const { getToken } = useAuth();
  const [sessionError, setSessionError] = useState(null);

  // Stripe calls this to get the client secret
  const fetchClientSecret = useCallback(async () => {
    try {
      const token = await getToken();

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/payments/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ invoiceId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();
      
      // Pass session data back to parent component if callback provided
      if (onSessionCreated && data) {
        onSessionCreated({
          unitAmount: data.unitAmount,      // Rate per kWh in cents
          totalAmount: data.totalAmount,    // Total amount in cents
          currency: data.currency || "usd",
          productName: data.productName,
        });
      }
      
      return data.clientSecret;
    } catch (err) {
      setSessionError(err.message);
      throw err;
    }
  }, [invoiceId, getToken, onSessionCreated]);

  if (sessionError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <p className="font-medium">Payment Error</p>
        <p className="text-sm mt-1">{sessionError}</p>
      </div>
    );
  }

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}
