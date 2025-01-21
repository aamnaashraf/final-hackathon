
import Comment from "@/components/Comment";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";



const BlogDetailPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  // Query to fetch blog data by slug
  const query = `*[_type == 'blog' && slug.current == '${slug}']{
    blog, Paragraph, image, block
  }[0]`;

  // Fetch data from Sanity
  const data: Blog = await client.fetch(query);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog Title */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6 mt-10">
        {data.blog} {/* Dynamically render blog name */}
      </h1>

      {/* Blog Image */}
      <div className="flex justify-center my-6">
        <Image
          src={urlFor(data.image).url()}
          alt={data.blog}
          width={800}
          height={400}
          className="w-full max-w-3xl h-auto rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-gray-300"
        />
      </div>

      {/* Blog Introduction Paragraph */}
      <p className="text-center text-lg md:text-xl text-gray-600 px-4 md:px-8 mb-8">
        {data.Paragraph} {/* Dynamically render introductory paragraph */}
      </p>

      {/* Blog Description (Using PortableText for rich content rendering) */}
      <div className="blog-description space-y-6 text-gray-700 text-base md:text-lg">
        <h2 className="text-6xl flex justify-center font-bold underline text-gray-800 mb-4">Description</h2>
        <PortableText value={data.block} />
        <Comment/>
      </div>
    </div>
  );
};

export default BlogDetailPage;
