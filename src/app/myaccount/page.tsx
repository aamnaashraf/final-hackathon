import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const MyAccount = () => {
  return (
    <div>
      <header className="relative bg-white shadow-md pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg image 2.png"
            alt="Shop Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <Image
              src="/logo.png"
              alt="Shop Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          {/* Shop Title */}
          <h1 className="text-4xl font-bold text-black">My Account</h1>
          {/* Breadcrumb */}
          <p className="text-black text-sm">
            <a href="/" className="hover:text-black text-bold">Home</a> &gt; My Account
          </p>
        </div>
      </header>  {/* Hero Section */}




      <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-6xl bg-white p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Login Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-black border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="py-2 px-6 border border-gray-400 bg-white text-black rounded-md font-medium hover:bg-gray-100"
              >
                Log In
              </button>
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-black underline">
                privacy policy
              </a>
              .
            </p>
            <div>
              <button
                type="submit"
                className=" py-2 px-6 border border-gray-400 bg-white text-black rounded-md font-medium hover:bg-gray-100"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

      {/* Additional Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free Delivery */}
          <div>
            <h3 className="text-lg font-bold text-black">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              Enjoy free delivery on all orders <br />
              without any hidden charges.
            </p>
          </div>

          {/* 90 Days Return */}
          <div>
            <h3 className="text-lg font-bold text-black">90 Days Return</h3>
            <p className="text-gray-600 mt-2">
              Hassle-free returns for up to 90 days <br />
              on all purchases.
            </p>
          </div>

          {/* Secure Payment */}
          <div>
            <h3 className="text-lg font-bold text-black">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              Your payment information is safe <br />
              with our secure systems.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyAccount
