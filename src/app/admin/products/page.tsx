"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

// 🛒 Product ka Type Define Karen
interface Product {
  _id: string;
  name: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
  price: number;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await client.fetch(`*[_type == 'product'] | order(_updatedAt asc) {
          _id,
          name,
          image,
          price
        }`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await client.delete(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mt-8 mb-5">Manage Products</h1>
      <Link href="/admin/products/new" className="p-2 bg-green-500 text-white rounded mb-4 inline-block">
        + Add New Product
      </Link>

      <table className="w-full border-collapse border border-gray-300 mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Image</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id} className="border">
                <td className="border p-2">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image)}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-35 h-35 object-cover rounded"
                    ></Image>
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">${product.price}</td>
                <td className="border p-2">
                  <Link href={`/admin/products/${product._id}`} className="p-2 bg-blue-500 text-white rounded mr-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="p-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-3">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

