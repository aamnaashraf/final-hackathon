import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex items-center justify-between bg-[#FBEBB5] py-20 px-6 sm:px-12 lg:px-24">
      {/* Left Side - Text */}
      <div className="w-full lg:w-1/2 ml-8 mx-5 justify-center ">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Rocket single </h1>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">seater </h1>
        <h2 className="text-xl text-gray-600 underline">Shop Now</h2>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/sofa .png" 
          alt="Hero Image"
          width={600} 
          height={600} 
          className="object-cover"
        />
      </div>
    </section>


  );
};


export default Hero
