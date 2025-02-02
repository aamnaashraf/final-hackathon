'use client';

import { useWishlist } from "@/context/wishList";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import AdditionalSection from "@/components/AdditionalSection";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
        {/* Go Back to Shop Link with Arrow */}
        <div className="w-full max-w-2xl mb-6 mt-6">
          <Link
            href="/shop"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center space-x-2 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Go Back to Shop</span>
          </Link>
        </div>
  
        {/* My Wishlist Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Wishlist</h1>
  
        {/* Descriptive Paragraph */}
        <p className="text-gray-600 text-center max-w-2xl mb-8">
          Your wishlist is where you can save your favorite items and keep track of
          what you love. Start adding items to your wishlist to make shopping
          easier!
        </p>
  
        {/* Empty Wishlist Box */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center w-full max-w-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <p className="text-gray-700 text-lg mb-6">
            Your wishlist is empty. Start adding items to save them for later!
          </p>
        </div>
  
        {/* Continue Shopping Button */}
        <div className="mt-8">
          <Link
            href="/shop"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </div>
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
      <AdditionalSection />
    </div>
  );
};

export default Wishlist;
