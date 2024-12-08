import Image from 'next/image';

const TopPicksPage = () => {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6 sm:px-12 lg:px-24">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Top Picks For You</h1>
      </div>

      {/* Paragraph */}
      <div className="text-center mb-12">
        <p className="text-xl text-gray-600">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img 4.png" // Replace with your image path
            alt="Pick 1"
            width={300}
            height={300}
            className="object-cover mb-4"
          />
          <p className="text-lg text-gray-800 text-center">Trenton modular sofa_3</p>
          <p className="text-xl font-bold text-gray-800">Rs.25,000.00</p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img 5.png" // Replace with your image path
            alt="Pick 2"
            width={300}
            height={300}
            className="object-cover mb-4"
          />
          <p className="text-lg text-gray-800 text-center">Granite dining table with dining chair</p>
          <p className="text-xl font-bold text-gray-800">Rs.25,000.00</p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img 6.png" // Replace with your image path
            alt="Pick 3"
            width={300}
            height={300}
            className="object-cover mb-4"
          />
          <p className="text-lg text-gray-800 text-center">Outdoor bar table and stool</p>
          <p className="text-xl font-bold text-gray-800">Rs.25,000.00</p>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img 7.png" // Replace with your image path
            alt="Pick 4"
            width={300}
            height={300}
            className="object-cover mb-4"
          />
          <p className="text-lg text-gray-800 text-center">Plain console with teak mirror</p>
          <p className="text-xl font-bold text-gray-800">Rs.25,000.00</p>
        </div>
      </div>

       {/* View More Section */}
       <div className="text-center mt-12">
        <a href="#view-more" className="text-lg text-gray-600 underline hover:text-gray-800">
          View More
        </a>
      </div>
    </section>
  );
};

export default TopPicksPage;
