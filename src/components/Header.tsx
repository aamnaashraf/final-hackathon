'use client';

import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "@/context/cartContext";
import { useWishlist } from "@/context/wishList";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FBEBB5]  fixed w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Website Logo */}
        <div>
          <Link href="/" aria-label="Website Logo" className="hover:underline">
            <Image
              src="/logo.png"
              alt="Website Logo"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle Menu"
            className="text-black text-2xl hover:text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen
              ? "absolute top-[100%] left-0 w-full bg-[#FBEBB5] shadow-md flex flex-col items-center"
              : "hidden"
          } md:static md:flex md:items-center md:space-x-6`}
        >
          <Link
            href="/"
            className="text-black font-medium hover:underline py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-black font-medium hover:underline py-2 md:py-0"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-black font-medium hover:underline py-2 md:py-0"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black font-medium hover:underline py-2 md:py-0"
          >
            Contact
          </Link>

          {/* Icons in Mobile Menu */}
          <div className="flex flex-col items-center space-y-4 md:hidden mt-4">
            <Link href="/myaccount" aria-label="User Profile">
              <FaUser size={24} className="text-black hover:text-gray-600" />
            </Link>

            <Link href="/search" aria-label="Search">
              <FaSearch size={24} className="text-black hover:text-gray-600" />
            </Link>

            <Link href="/wishlist" aria-label="Wishlist" className="relative">
              <FaHeart size={24} className="text-black hover:text-gray-600" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link href="/cart" aria-label="Shopping Cart" className="relative">
              <FaShoppingCart
                size={24}
                className="text-black hover:text-gray-600"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Icon Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/myaccount" aria-label="User Profile">
            <FaUser size={24} className="text-black hover:text-gray-600" />
          </Link>

          <Link href="/search" aria-label="Search">
            <FaSearch size={24} className="text-black hover:text-gray-600" />
          </Link>

          <Link href="/wishlist" aria-label="Wishlist" className="relative">
            <FaHeart size={24} className="text-black hover:text-gray-600" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link href="/cart" aria-label="Shopping Cart" className="relative">
            <FaShoppingCart
              size={24}
              className="text-black hover:text-gray-600"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

