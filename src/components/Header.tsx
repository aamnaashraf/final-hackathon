'use client';

import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/context/cartContext";
import { useWishlist } from "@/context/wishList";
import Image from "next/image";
import { useState } from "react";
import { useUser, UserButton, SignInButton } from '@clerk/nextjs'; // Added UserButton and SignInButton

const Header = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { isSignedIn, user } = useUser(); // Get the user and signedIn status

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FBEBB5] fixed w-full z-50">
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

        {/* Hamburger Menu and Icons (Mobile) */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Icons (Search, Wishlist, Cart, User) */}
          <div className="flex items-center space-x-4">
            
            
            <Link href="/wishlist" aria-label="Wishlist" className="relative">
              <FaHeart size={24} className="text-black hover:text-gray-600" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link href="/cart" aria-label="Shopping Cart" className="relative">
              <FaShoppingCart size={24} className="text-black hover:text-gray-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Conditionally render Sign In button or UserButton for mobile */}
            {isSignedIn ? (
              <div className="flex items-center">
                {/* Clerk's UserButton for profile dropdown */}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: '30px',
                        height: '30px',
                      },
                    },
                  }}
                />
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="text-black hover:text-gray-600">
                  <FaUser size={24} />
                </button>
              </SignInButton>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            aria-label="Toggle Menu"
            className="text-black text-2xl hover:text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black font-medium hover:underline">
            Home
          </Link>
          <Link href="/shop" className="text-black font-medium hover:underline">
            Shop
          </Link>
          <Link href="/blog" className="text-black font-medium hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-black font-medium hover:underline">
            Contact
          </Link>
          
          <Link href="/about" className="text-black font-medium hover:underline">
            About
          </Link>
        </nav>

        {/* Icon Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
         

          {/* Wishlist and Cart Icons */}
          <Link href="/wishlist" aria-label="Wishlist" className="relative">
            <FaHeart size={24} className="text-black hover:text-gray-600" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link href="/cart" aria-label="Shopping Cart" className="relative">
            <FaShoppingCart size={24} className="text-black hover:text-gray-600" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Conditionally render Sign In button or UserButton for desktop */}
          {isSignedIn ? (
            <div className="flex items-center">
              {/* Clerk's UserButton for profile dropdown */}
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: '30px',
                      height: '30px',
                    },
                  },
                }}
              />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="text-black hover:text-gray-600">
                <FaUser size={24} />
              </button>
            </SignInButton>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col items-start space-y-4 p-6">
          <Link href="/" className="text-black font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/shop" className="text-black font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/blog" className="text-black font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="text-black font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;

