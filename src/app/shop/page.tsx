import Image from "next/image";

const Shop = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-white shadow-md">
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
          <h1 className="text-4xl font-bold text-black">Shop</h1>
          {/* Breadcrumb */}
          <p className="text-black text-sm">
            <a href="/" className="hover:text-black text-bold">Home</a> &gt; Shop
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <div className="bg-[#FAF5EF] py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Filters */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M3 14h18m-2 6H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
              Filter
            </button>
            <p className="text-gray-600 text-sm">
              Showing 1–16 of 32 results
            </p>
          </div>

          {/* Right Filters */}
          <div className="flex items-center space-x-4">
            <label className="text-sm text-gray-600">Show</label>
            <select className="border-gray-300 rounded-md px-2 py-1 text-sm">
              <option>16</option>
            </select>
            <label className="text-sm text-gray-600">Sort by</label>
            <select className="border-gray-300 rounded-md px-2 py-1 text-sm">
              <option>Default</option>
            </select>
          </div>
        </div>
      </div>



      {/* New Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            {/* Individual Items */}
            <div className="text-center">
              <Image
                src="/img 4.png"
                alt="Furniture 1"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Comfortable Sofa</p>
              <p className="font-bold text-gray-800">$250.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/img 5.png"
                alt="Furniture 2"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Modern Chair</p>
              <p className="font-bold text-gray-800">$120.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/img 6.png"
                alt="Furniture 3"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Stylish Table</p>
              <p className="font-bold text-gray-800">$350.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/img 7.png"
                alt="Furniture 4"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Wooden Desk</p>
              <p className="font-bold text-gray-800">$180.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 1.png"
                alt="Furniture 5"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Dining Chair</p>
              <p className="font-bold text-gray-800">$100.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 2.png"
                alt="Furniture 6"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Luxury Sofa</p>
              <p className="font-bold text-gray-800">$500.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 3.png"
                alt="Furniture 7"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Outdoor Chair</p>
              <p className="font-bold text-gray-800">$150.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 4.png"
                alt="Furniture 8"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Compact Desk</p>
              <p className="font-bold text-gray-800">$200.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 5.png"
                alt="Furniture 9"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Corner Couch</p>
              <p className="font-bold text-gray-800">$400.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 6.png"
                alt="Furniture 10"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Elegant Armchair</p>
              <p className="font-bold text-gray-800">$300.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 7.png"
                alt="Furniture 11"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Modern Bookshelf</p>
              <p className="font-bold text-gray-800">$350.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 8.png"
                alt="Furniture 12"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Classic Coffee Table</p>
              <p className="font-bold text-gray-800">$220.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 9.png"
                alt="Furniture 13"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Leather Recliner</p>
              <p className="font-bold text-gray-800">$450.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 10.png"
                alt="Furniture 14"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Patio Set</p>
              <p className="font-bold text-gray-800">$600.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 11.png"
                alt="Furniture 15"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Bed Frame</p>
              <p className="font-bold text-gray-800">$500.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/shop img 12.png"
                alt="Furniture 16"
                width={300}
                height={300}
                className="object-contain mx-auto rounded-md shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2">Office Chair</p>
              <p className="font-bold text-gray-800">$150.00</p>

              
            </div>
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
    
  );
};

export default Shop;
