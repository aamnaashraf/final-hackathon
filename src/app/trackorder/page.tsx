"use client";
import React, { useState } from "react";
import Link from "next/link";

// Define the type for an order
interface Order {
  orderId: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  status: string;
  total: number;
  date: string;
}

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState<string>("");
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string>("");

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch orders from local storage
    const orders: Order[] = JSON.parse(localStorage.getItem("orders") || "[]");

    // Find the order by ID
    const foundOrder = orders.find((o) => o.orderId === orderId);

    if (foundOrder) {
      setOrder(foundOrder);
      setError("");
    } else {
      setError("Order not found. Please check your order ID.");
      setOrder(null);
    }
  };

  // Function to get status color based on order status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white w-full max-w-none px-4 py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-11 mb-6">Track Your Order</h1>
        <form onSubmit={handleTrackOrder} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Track Order
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {order && (
          <div className="mt-8 w-full max-w-4xl bg-yellow-100 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <div className="space-y-4">
              {/* Order Information */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
                <div className="space-y-2">
                  <p>
                    <strong>Order ID:</strong> {order.orderId}
                  </p>
                  <p>
                    <strong>Date:</strong> {new Date(order.date).toLocaleString()}
                  </p>
                  <p>
                    <strong>Total:</strong> Rs. {order.total}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`px-2 py-1 rounded-md text-sm ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>

              {/* Products List */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Products</h3>
                <ul className="space-y-4">
                  {order.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span>
                        {item.quantity} x Rs. {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-6 flex justify-end">
              <Link
                href="/"
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;