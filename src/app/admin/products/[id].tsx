"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter, useParams } from "next/navigation";

export default function EditProduct() {
  const params = useParams();
  const id = params?.id as string; // Ensure id is a string
  const router = useRouter();
  const [product, setProduct] = useState({ title: "", price: 0 });

  useEffect(() => {
    if (!id) return; // Prevent fetching if ID is undefined

    async function fetchProduct() {
      try {
        const data = await client.fetch(`*[_type == "product" && _id == $id][0]`, { id });
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  async function handleUpdate() {
    if (!id) return;

    try {
      await client.patch(id).set(product).commit();
      router.push("/admin/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  async function handleDelete() {
    if (!id) return;

    try {
      await client.delete(id);
      router.push("/admin/products");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Product</h1>
      <input
        type="text"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        className="p-2 border w-full"
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
        className="p-2 border w-full"
      />
      <button onClick={handleUpdate} className="p-2 bg-blue-500 text-white rounded mt-2">
        Update
      </button>
      <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded mt-2">
        Delete
      </button>
    </div>
  );
}
