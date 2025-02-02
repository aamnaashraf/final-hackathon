import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Blog } from '../../../type';

// Fetch blog data from Sanity
const blog = async () => {
  const query = `*[_type == 'blog'] | order(_updatedAt asc){
    blog,
    Paragraph,
    image,
    "slug": slug.current
  }`;

  const data: Blog[] = await client.fetch(query); // Fetch data using Sanity client

 

  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-white pt-16">
        <div className="absolute inset-0">
          <Image
            src="/bg image 2.png"
            alt="Shop Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-8 text-center">
          <div className="flex justify-center mb-2">
            <Image
              src="/logo.png"
              alt="Shop Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-black">Blog</h1>
          <p className="text-black text-sm">
            <a href="/" className="hover:text-black font-bold">
              Home
            </a>{' '}
            &gt; Blog
          </p>
        </div>
      </header>

      {/* Blog Section with Sidebar */}
      <div className="bg-white min-h-screen p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts Section */}
          <div className="lg:col-span-2 space-y-6">
            {data.map((data: Blog) => (
              <div
                key={data.slug}
                className="rounded-md overflow-hidden bg-white shadow-md"
              >
                {/* Blog Image */}
                <Image
                  src={urlFor(data.image).url()}
                  alt={data.blog}
                  width={1000}
                  height={600}
                  className="object-cover"
                />
                {/* Blog Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{data.blog}</h2>
                  <p className="text-gray-700 mb-4">{data.Paragraph}</p>
                  <Link
                    href={`/blogDetails/${data.slug}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="rounded-md p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>Select a category</option>
                <option>Crafts</option>
                <option>Design</option>
                <option>Handmade</option>
                <option>Interior</option>
                <option>Wood</option>
              </select>
            </div>

            {/* Recent Posts */}
            <div className="rounded-md p-6 bg-white">
              <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>


            <ul className="space-y-12">
  {/* Add each post manually with unique data */}
  <li>
    <Link
      href="/post-details"
      className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0"
    >
      {/* Image Section */}
      <div className="h-30 w-full sm:w-48 bg-gray-200 rounded-md overflow-hidden">
        <Image
          src="/blog-2.jpg"
          alt="Going all-in with millennial design"
          width={320}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between sm:justify-start">
        <h4 className="text-lg font-bold text-black hover:text-blue-500">
          Going all-in with millennial design
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          18 Oct 2022
        </p>
      </div>
    </Link>
  </li>

  <li>
    <Link
      href="/post-details"
      className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0"
    >
      {/* Image Section */}
      <div className="h-30 w-full sm:w-48 bg-gray-200 rounded-md overflow-hidden">
        <Image
          src="/blog-3.jpg"
          alt="How to embrace minimalism in 2023"
          width={320}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between sm:justify-start">
        <h4 className="text-lg font-bold text-black hover:text-blue-500">
          How to embrace minimalism in 2023
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          22 Oct 2022
        </p>
      </div>
    </Link>
  </li>

  <li>
    <Link
      href="/post-details"
      className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0"
    >
      {/* Image Section */}
      <div className="h-30 w-full sm:w-48 bg-gray-200 rounded-md overflow-hidden">
        <Image
          src="/blog-1.jpg"
          alt="The rise of sustainable architecture"
          width={320}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between sm:justify-start">
        <h4 className="text-lg font-bold text-black hover:text-blue-500">
          The rise of sustainable architecture
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          25 Oct 2022
        </p>
      </div>
    </Link>
  </li>

  <li>
    <Link
      href="/post-details"
      className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0"
    >
      {/* Image Section */}
      <div className="h-30 w-full sm:w-48 bg-gray-200 rounded-md overflow-hidden">
        <Image
          src="/blog-2.jpg"
          alt="Technology trends shaping the future"
          width={320}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between sm:justify-start">
        <h4 className="text-lg font-bold text-black hover:text-blue-500">
          Technology trends shaping the future
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          28 Oct 2022
        </p>
      </div>
    </Link>
  </li>

  <li>
    <Link
      href="/post-details"
      className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0"
    >
      {/* Image Section */}
      <div className="h-30 w-full sm:w-48 bg-gray-200 rounded-md overflow-hidden">
        <Image
          src="/blog-3.jpg"
          alt="Exploring new dimensions in design"
          width={320}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between sm:justify-start">
        <h4 className="text-lg font-bold text-black hover:text-blue-500">
          Exploring new dimensions in design
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          1 Nov 2022
        </p>
      </div>
    </Link>
  </li>
</ul>




            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <button className="py-2 px-4 bg-yellow-200 rounded-md">1</button>
          <button className="py-2 px-4 bg-yellow-200 rounded-md">2</button>
          <button className="py-2 px-4 bg-yellow-200 rounded-md">3</button>
          <button className="py-2 px-4 bg-yellow-200 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default blog;

