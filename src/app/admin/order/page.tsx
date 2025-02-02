"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Order {
  _id: string;
  customerName: string;
  totalPrice: number;
  status: string;
  date: string;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await client.fetch(`*[_type == 'order'] | order(_createdAt desc) {
          _id,
          customerName,
          totalPrice,
          status,
          _createdAt
        }`);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchOrders();
  }, []);

  // Update order status
  async function handleUpdateStatus(id: string, newStatus: string) {
    try {
      await client.patch(id).set({ status: newStatus }).commit();
      setOrders(orders.map((order) =>
        order._id === id ? { ...order, status: newStatus } : order
      ));
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  }

  // Delete order
  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await client.delete(id);
      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mt-8 mb-5">Manage Orders</h1>
      <table className="w-full border-collapse border border-gray-300 mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id} className="border">
                <td className="border p-2">{order.customerName}</td>
                <td className="border p-2">${order.totalPrice}</td>
                <td className="border p-2">
                  <select
                    value={order.status}
                    onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </td>
                <td className="border p-2">{new Date(order.date).toLocaleDateString()}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="p-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-3">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

  