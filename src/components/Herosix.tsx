import Image from 'next/image';

const InstagramPage = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-black py-20 px-6 sm:px-12 lg:px-24"
      style={{ backgroundImage: "url('/bg-image 1.png')" }} 
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#FAF4F4] bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Instagram</h1>
        <p className="text-lg mb-8">Follow our store on Instagram</p>
        <button className="py-3 px-8 bg-transparent text-black border border-purple-500 rounded-[50px] hover:bg-purple-500 hover:text-white transition duration-300">
  Follow Us
</button>
      </div>
    </section>
  );
};

export default InstagramPage;