import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';

const BlogsPage = () => {
  return (
    <section className="bg-[#FFFFFF] py-16 px-6 sm:px-12 lg:px-24">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blogs</h1>
        <p className="text-gray-600">Find a bright ideal to suit your taste with our great selection</p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="text-center">
          <Image
            src="/laptop 1.png" 
            alt="Blog Image 1"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
          <p className="text-lg text-gray-700 mt-4 mb-2">Going all-in with millennial design</p>
          <p className="font-semibold text-gray-800 underline">Read More</p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <FaRegClock className="text-gray-600" />
            <p className="text-gray-500 text-sm">5 min 12th Oct 2022</p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="text-center">
          <Image
            src="/laptop 2.png" 
            alt="Blog Image 2"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
          <p className="text-lg text-gray-700 mt-4 mb-2">Going all-in with millennial design</p>
          <p className="font-semibold text-gray-800 underline">Read More</p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <FaRegClock className="text-gray-600" />
            <p className="text-gray-500 text-sm">5 min 12th Oct 2022</p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="text-center">
          <Image
            src="/laptop 3.png" 
            alt="Blog Image 3"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
          <p className="text-lg text-gray-700 mt-4 mb-2">Going all-in with millennial design</p>
          <p className="font-semibold text-gray-800 underline">Read More</p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <FaRegClock className="text-gray-600" />
            <p className="text-gray-500 text-sm">5 min 12th Oct 2022</p>
          </div>
        </div>
      </div>

      {/* View All Posts Section */}
      <div className="text-center mt-16">
        <a
          href="#view-all"
          className="text-lg text-gray-800 underline hover:text-gray-600 transition duration-300"
        >
          View All Posts
        </a>
      </div>
    </section>
  );
};

export default BlogsPage;
