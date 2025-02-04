'use client';
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import Image from "next/image";
import AdditionalSection from "@/components/AdditionalSection";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  const handleRemoveItem = (productId: number) => {
    removeItem(productId);
  };

  if (cartItems.length === 0) {
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

        {/* My Cart Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Cart</h1>

        {/* Descriptive Paragraph */}
        <p className="text-gray-600 text-center max-w-2xl mb-8">
          Your cart is where you can review the items you have added and proceed to checkout.
          Start adding items to your cart to complete your purchase!
        </p>

        {/* Empty Cart Box */}
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="text-gray-700 text-lg mb-6">
            Your cart is empty. Start adding items to complete your purchase!
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

  return (
    <div>
      <header className="relative bg-white shadow-md pt-16">
        <div className="absolute inset-0">
          <Image
            src="/bg image 2.png"
            alt="Shop Background"
            fill
            className="object-cover"
            quality={100}
            priority
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
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-black">Cart</h1>
          <p className="text-black text-sm">
            <Link href="/" className="hover:text-black text-bold">
              Home
            </Link>{' '}
            &gt; Cart
          </p>
        </div>
      </header>

      {/* Left Section */}
      <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden">
            <div className="w-full md:w-2/3 p-4">
              {cartItems.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                      <tr className="bg-[#FBEBB5] text-gray-800">
                        <th className="p-2 sm:p-4 text-sm">Product</th>
                        <th className="p-2 sm:p-4 text-sm">Price</th>
                        <th className="p-2 sm:p-4 text-sm">Quantity</th>
                        <th className="p-2 sm:p-4 text-sm">Subtotal</th>
                        <th className="p-2 sm:p-4 text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr className="border-b" key={item.id}>
                          <td className="flex items-center p-2 sm:p-4">
                            <div className="flex flex-col">
                              <div className="w-20 h-20 sm:w-24 sm:h-24">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={80}
                                  height={80}
                                  className="rounded-md mb-2 bg-[#FBEBB5]"
                                  priority
                                  quality={100}
                                />
                              </div>
                              <span className="font-medium text-gray-700 text-sm">{item.name}</span>
                            </div>
                          </td>
                          <td className="p-2 sm:p-4 text-gray-600 text-sm">
                            Rs. {item.price.toLocaleString()}
                          </td>
                          <td className="p-2 sm:p-4">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value))
                              }
                              className="w-12 border border-gray-300 rounded-md text-center text-sm"
                            />
                          </td>
                          <td className="p-2 sm:p-4 text-gray-600 text-sm">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </td>
                          <td className="p-2 sm:p-4">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                            >
                              <span className="text-xs">Remove</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

                 
{/* rigjt section*/}
            <div className="w-full md:w-1/3 bg-[#FBEBB5] p-6 rounded-lg">
  <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
    Cart Totals
  </h2>
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-600">Subtotal</span>
    <span className="font-medium text-gray-700">
      Rs. {subtotal.toLocaleString()}
    </span>
  </div>
  <br />
  <div className="flex justify-between items-center mb-6">
    <span className="text-gray-600">Total</span>
    <span className="font-bold text-yellow-600">
      Rs. {subtotal.toLocaleString()}
    </span>
  </div>
  <div className="flex justify-center">
    <Link href="/checkout">
      <button className="bg-[#FBEBB5] text-black border-2 border-black font-medium py-1.5 px-6 rounded-md hover:bg-yellow-400 transition mt-6">
        Check Out
      </button>
    </Link>
  </div>
</div>
</div>
        </div>
      </div>
      <AdditionalSection />
    </div>
  );
};

export default Cart;
