"use client";
import React, { useState } from "react";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import getStripePromise from "@/sanity/lib/stripe";
import Image from "next/image";
import AdditionalSection from "./AdditionalSection";
import FormField from "@/components/FormFields";
import { v4 as uuidv4 } from "uuid";

const StripeCheckOutButton = () => {
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    town: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    payment: "bank-transfer",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(""); // State to store the order ID

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleCheckOut = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a unique order ID
    const generatedOrderId = uuidv4();
    setOrderId(generatedOrderId); // Store the order ID in state
    console.log("Generated Order ID:", generatedOrderId);

    // Create order object
    const orderDetails = {
      orderId: generatedOrderId,
      customer: formData,
      items: cartItems,
      status: "Processing", // Initial status
      total: calculateSubtotal(),
      date: new Date().toISOString(),
    };

    // Save order to local storage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Log saved orders for verification
    console.log("Saved Orders:", JSON.parse(localStorage.getItem("orders") || "[]"));

    // Set order placed state to true
    setOrderPlaced(true);

    // Handle payment methods
    if (formData.payment === "cash-on-delivery") {
      setOrderPlaced(true);
    } else if (formData.payment === "bank-transfer") {
      const stripe = await getStripePromise();
      const response = await fetch("api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white w-full max-w-none px-0 py-10">
      {/* Header Section */}
      <header className="relative bg-white shadow-md pt-16 w-full">
        <div className="absolute inset-0">
          <Image
            src="/bg image 2.png"
            alt="Shop Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto px-4 py-8 text-center w-full">
          <div className="flex justify-center mb-2">
            <Image
              src="/logo.png"
              alt="Shop Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-black">Checkout</h1>
          <p className="text-black text-sm">
            <a href="/" className="hover:text-black text-bold">
              Home
            </a>{" "}
            &gt; Checkout
          </p>
        </div>
      </header>

      <br />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full px-4 md:px-8">
        {/* Billing Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-6 flex justify-center">Billing details</h2>
          <FormField
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckOut={handleCheckOut}
          />
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-6 flex justify-center">Order Summary</h2>
          <div className="bg-white p-6 rounded-md">
            {/* Cart Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Products</h3>
              <div className="space-y-4 mt-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-gray-600">
                      Rs. {item.quantity * item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtotal and Total */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-bold">Subtotal</span>
              <span className="text-gray-600">Rs. {calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-bold">Total</span>
              <span className="text-yellow-600 font-bold">
                Rs. {calculateSubtotal()}
              </span>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <div className="mb-2">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment"
                  value="bank-transfer"
                  checked={formData.payment === "bank-transfer"}
                  onChange={handleInputChange}
                />
                <label htmlFor="bank-transfer" className="ml-2">
                  Direct Bank Transfer
                </label>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Make your payment directly into our bank account.
              </p>
              <div className="mb-2">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="cash-on-delivery"
                  checked={formData.payment === "cash-on-delivery"}
                  onChange={handleInputChange}
                />
                <label htmlFor="cash" className="ml-2">
                  Cash on Delivery
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Your personal data will be used to support your experience
                throughout this website to manage access to your account and for
                other purposes described in our privacy policy.
              </p>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="mt-6 block mx-auto bg-white text-black border-2 border-black font-medium py-2 px-10 rounded-md hover:bg-gray-300 transition"
              onClick={handleCheckOut}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {orderPlaced && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg max-w-md w-full">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Your order has been placed successfully!
              </h2>
              <p className="text-gray-600 mb-4">
                Your Order ID is: <strong>{orderId}</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Thank you for shopping with us. Your order is being processed.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/trackorder"
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Track Order
                </Link>
                <button
                  onClick={() => setOrderPlaced(false)}
                  className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <br />

      {/* Additional Section */}
      <AdditionalSection />
    </div>
  );
};

export default StripeCheckOutButton;