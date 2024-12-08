import Image from 'next/image';

const NewArrivalsPage = () => {
  return (
    <section  className="bg-[#FFF9E5] py-10 px-2 sm:px-12 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-8">
        {/* Left Side - Image */}
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <div className="relative">
            <Image
              src="/img 8 .png"  // Make sure the file path doesn't have spaces
              alt="Asgaard Sofa"
              width={1000}
              height={1200}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Text and Button */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl text-gray-700 mb-4">New Arrivals</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Asgaard Sofa</h2>
          <button className="py-2 px-6 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition duration-300">
            Order Now </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsPage;
