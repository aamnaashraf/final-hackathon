import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start md:items-center gap-6">
          {/* Address Section */}
          <div className="flex-1 min-w-[200px]">
            <p className="text-gray-400 text-sm">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* Links Group 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-gray-300">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Group 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/payment-options" className="hover:text-gray-300">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-gray-300">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-300">
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">Newsletter</h3>
              <form className="flex flex-wrap md:flex-nowrap gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border border-gray-700 rounded-l px-4 py-2 text-gray-900 flex-1"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* "All Rights Reserved" Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-left">
          <p className="text-sm text-gray-400">
            © 2022 Meubel House. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
