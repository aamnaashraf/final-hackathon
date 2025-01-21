'use client';
import React from 'react';
import ShippingForm from '@/components/ShippingForm';
import { createShipment } from '@/services/shipEngine';
import getStripePromise from '@/sanity/lib/stripe';
import { useCart } from '@/context/cartContext';

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();

  
  const handleCheckOut = async () => {
    const stripe = await getStripePromise();

    const response = await fetch('/api/stripe-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
      body: JSON.stringify({
        items: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      }),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    } else {
      console.error('Error creating Stripe session:', data.error);
    }
  };

  return (
    <div>
      
      <ShippingForm />
      
    </div>
  );
};

export default CheckoutPage;

