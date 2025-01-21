'use client';

import { useWishlist } from "@/context/wishList";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <p className="text-center text-gray-700 text-lg">
          Your wishlist is empty. Go back to{" "}
          <Link href="/shop" className="text-blue-500 hover:underline font-bold">
            shop
          </Link>{" "}
          to add items.
        </p>
      </div>
    );
  }

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
     
    });
    toast.success(`${item.name} added to cart!`, { position: "top-right" });
  };

  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-white shadow-md pt-16">
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
          <h1 className="text-4xl font-bold text-black">Wishlist</h1>
          <p className="text-black text-sm">
            <Link href="/" className="hover:text-black text-bold">
              Home
            </Link>{" "}
            &gt; Wishlist
          </p>
        </div>
      </header>

      {/* Wishlist Items */}
      <div className="min-h-screen bg-gray-100 p-8">
        <ToastContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <div className="w-48 h-48 mb-4 bg-yellow-100 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={192}
                  width={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2 text-center">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                Rs. {item.price.toLocaleString()}
              </p>
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-green-500 text-white font-medium py-2 px-6 rounded-md hover:bg-green-600 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white font-medium py-2 px-6 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/shop">
            <button className="bg-[#FBEBB5] text-black font-medium py-2 px-10 rounded-md hover:bg-yellow-400 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
