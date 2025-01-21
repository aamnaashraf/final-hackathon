import Image from 'next/image';

const SideTableSection = () => {
  return (
    <section className="bg-[#FFFAFA] py-20 px-6 sm:px-12 lg:px-24">
      {/* Images and Text Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Image 1 */}
        <div className="w-full sm:w-[300px] lg:w-[400px] flex flex-col items-center text-center">
          <Image
            src="/img 2.png"
            alt="Side Table 1"
            width={400}
            height={400}
            className="object-cover w-full h-auto"
          />
          {/* Text Below Image */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800">Side Table</h2>
            <a
              href="#view-more"
              className="text-lg text-gray-600 underline hover:text-gray-800 block mt-2"
            >
              View More
            </a>
          </div>
        </div>

        {/* Image 2 */}
        <div className="w-full sm:w-[300px] lg:w-[400px] flex flex-col items-center text-center">
          <Image
            src="/img 3.png"
            alt="Side Table 2"
            width={400}
            height={400}
            className="object-cover w-full h-auto"
          />
          {/* Text Below Image */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800">Side Table</h2>
            <a
              href="#view-more"
              className="text-lg text-gray-600 underline hover:text-gray-800 block mt-2"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideTableSection;


