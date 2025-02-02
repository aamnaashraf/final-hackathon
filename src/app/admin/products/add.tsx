"use client";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await client.create({ _type: "product", title, price: parseFloat(price) });
    router.push("/admin/products");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h1 className="text-2xl font-bold">Add New Product</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border w-full" required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="p-2 border w-full" required />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">Save</button>
    </form>
  );
}
