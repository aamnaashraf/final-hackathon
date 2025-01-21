import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-[#FBEBB5] py-16 px-6 sm:px-12 lg:px-24">
      {/* Left Side - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Rocket single
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          seater
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 underline cursor-pointer">
          Shop Now
        </h2>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/sofa .png"
          alt="Hero Image"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
