"use client";
import React, { useState } from "react";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import getStripePromise from "@/sanity/lib/stripe";
import Image from "next/image";

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

  const handleCheckOut = async () => {
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
  };

  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-white shadow-md">
        <div className="absolute inset-0">
          <Image
            src="/bg image 2.png"
            alt="Shop Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-8 text-center">
          <div className="flex justify-center mb-2">
            <Image
              src="/logo.png"
              alt="Shop Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-black">CheckOut</h1>
          <p className="text-black text-sm">
            <Link href="/">Home</Link> &gt; CheckOut
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-white px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Billing Details */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-gray-700">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Country"
                />
              </div>
              <div>
                <label htmlFor="streetAddress" className="block text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Street Address"
                />
              </div>
              <div>
                <label htmlFor="town" className="block text-gray-700">
                  Town/City
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  value={formData.town}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Town or City"
                />
              </div>
              <div>
                <label htmlFor="province" className="block text-gray-700">
                  Province/State
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Province or State"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Zip Code"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="additionalInfo" className="block text-gray-700">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Additional Information"
                  rows={4}
                />
              </div>
            </form>
          </div>



        {/* Right Section: Order Summary */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
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

            {/* Subtotal */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-bold">Subtotal</span>
              <span className="text-gray-600">Rs. {calculateSubtotal()}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-bold">Total</span>
              <span className="text-yellow-600 font-bold">
                Rs. {calculateSubtotal()}
              </span>
            </div>





            {/* Payment Methods */}
            <div className="mb-6">
              <div className="mb-2">
                <input type="radio" id="bank-transfer" name="payment" />
                <label htmlFor="bank-transfer" className="ml-2">
                  Direct Bank Transfer
                </label>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Make your payment directly into our bank account.
              </p>
              <div className="mb-2">
                <input type="radio" id="cash" name="payment" />
                <label htmlFor="cash" className="ml-2">
                  Cash on Delivery
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Your personal data will be used to support your experience throughout this website to manage access to your account and for other purposes described in our privacy policy.
              </p>
            </div>


            
              <button
                type="submit"
                className="mt-6 block mx-auto bg-white text-black border-2 border-black font-medium py-2 px-10 rounded-md hover:bg-gray-300 transition"
              onClick={handleCheckOut}>
                Place Order
              </button>
            
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      {/* Additional Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold text-black">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              Enjoy free delivery on all orders <br />
              without any hidden charges.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black">90 Days Return</h3>
            <p className="text-gray-600 mt-2">
              Hassle-free returns for up to 90 days <br />
              on all purchases.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              Your payment information is safe <br />
              with our secure systems.
            </p>
          </div>
        </div>
      </div>

</div>

    </div>
  );
};
export default StripeCheckOutButton;