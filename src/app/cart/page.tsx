'use client';
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import Image from "next/image";

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
      <div className="min-h-screen bg-white flex justify-center items-center">
        <p className="text-center text-gray-700">
          Your cart is empty. Go back to{' '}
          <Link href="/" className="text-blue-500 hover:underline">
            shop
          </Link>{' '}
          to add items.
        </p>
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
          <h1 className="text-4xl font-bold text-black">Cart</h1>
          <p className="text-black text-sm">
            <Link href="/" className="hover:text-black text-bold">
              Home
            </Link>{' '}
            &gt; Cart
          </p>
        </div>
      </header>


      {/*left section */}
      <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
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
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md mb-2 bg-[#FBEBB5]">
                              </Image>
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

            <div className="w-full md:w-1/3 bg-[#FBEBB5] p-6 rounded-lg mt-6 md:mt-0">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                Cart Totals
              </h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-700">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              <br></br>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Total</span>
                <span className="font-bold text-yellow-600">
                  Rs. {subtotal.toLocaleString()}
                </span>
                </div>
  <Link href="/checkout">
    <button className="w-60 ml-20 bg-[#FBEBB5] text-black border-2 border-black font-medium py-1.5 rounded-md hover:bg-yellow-400 transition mt-24">
      Check Out
    </button>
  </Link>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
