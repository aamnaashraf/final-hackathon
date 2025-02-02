import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-black">About</h1>
          {/* Breadcrumb */}
          <p className="text-black text-sm">
            <a href="/" className="hover:text-black text-bold">Home</a> &gt; About
          </p>
        </div>
      </header>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Crafting timeless furniture for modern living.
          </p>
          <div className="relative h-64 sm:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              src="/about image 2.jpg"
              alt="Aesthetic Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Additional Content */}
          <div className="mt-8 text-left max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Our journey started with a simple vision  to create beautiful, functional furniture
              that enhances the lives of our customers. Over the years, we have grown from a small
              local workshop to a globally recognized brand, known for quality, innovation, and
              sustainability.
            </p>
            <p className="text-lg text-gray-600">
              We take pride in our commitment to excellence, and every piece of furniture is
              meticulously crafted by artisans who bring passion and skill into every detail.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Image
                src="/mission image.jpg"
                alt="Our Mission"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in creating furniture that blends functionality with aesthetics. Our mission is to provide you with pieces that elevate your space and reflect your unique style.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every piece is crafted with care, ensuring durability and timeless design. From minimalist designs to bold statements, our collection reflects a balance between form and function that will transform any living space.
              </p>
              {/* Additional Content */}
              <p className="text-lg text-gray-600">
                Our mission is not just to create furniture, but to create an experience. We are committed to sustainability and ensuring that our materials are ethically sourced. As we move forward, we remain dedicated to providing exceptional customer service and innovative designs.
              </p>
            </div>
          </div>
        </div>

{/* Team Section */}
<div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
    Meet Our Team
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Team Member 1 */}
    <div className="text-center">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          src="/person 4.jpg"
          alt="Team Member 1"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Alice Smith</h3>
      <p className="text-sm sm:text-base text-gray-600">Co-Founder & CEO</p>
    </div>

    {/* Team Member 2 */}
    <div className="text-center">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          src="/person2.avif"
          alt="Team Member 2"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Bob Johnson</h3>
      <p className="text-sm sm:text-base text-gray-600">Lead Designer</p>
    </div>

    {/* Team Member 3 */}
    <div className="text-center">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          src="/person1.jpg"
          alt="Team Member 3"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Charlie Brown</h3>
      <p className="text-sm sm:text-base text-gray-600">Chief Engineer</p>
    </div>

    {/* Team Member 4 */}
    <div className="text-center">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          src="/person 3.jpg"
          alt="Team Member 4"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Diana Green</h3>
      <p className="text-sm sm:text-base text-gray-600">Marketing Director</p>
    </div>
  </div>
</div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/icon 1.png" 
                  alt="Quality Icon"
                  width={64}
                  height={64}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials to ensure long-lasting durability.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/icon 2.jpg" 
                  alt="Design Icon"
                  width={64}
                  height={64}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Our designs are inspired by modern trends and timeless elegance.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/icon3.jpg"
                  alt="Sustainability Icon"
                  width={64}
                  height={64}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to using eco-friendly materials and practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
