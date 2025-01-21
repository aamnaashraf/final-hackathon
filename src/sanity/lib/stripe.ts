import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

const getStripePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

  // Check if stripePromise is not already defined and if the key is available
  if (!stripePromise && !!key) {
    stripePromise = loadStripe(key);  // Corrected syntax here
  }

  return stripePromise;
};
export default getStripePromise;