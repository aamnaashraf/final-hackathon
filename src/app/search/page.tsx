'use client'
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  name: string;
  image: { asset: { url: string } };
  price: number;
  slug: { current: string };
}
const Search = async () => {
  const query = `*[_type == 'product'] | order(_updatedAt asc) {
    name,
    image,
    price,
    slug
  }`;
  const data: Product[] = await client.fetch(query);
  return <SearchComponent data={data} />;
};
// Separate functional component to handle client-side search
const SearchComponent = ({ data }: { data: Product[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    {/* Search Input */}

<header
  className="py-8 bg-yellow-50 shadow-sm text-center pt-20"
>
  <h1 className="text-3xl font-bold">Search Products</h1>
  <input
    type="text"
    placeholder="Search by product name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="mt-4 px-4 py-2 border rounded-md w-1/2"
  />
</header>



      {/* Products Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug.current}
                  href={`/product/${product.slug.current}`}
                >
                  <div className="text-center">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain mx-auto rounded-md shadow-sm"
                    />
                    <p className="text-sm text-gray-600 mt-2">{product.name}</p>
                    <p className="font-bold text-gray-800">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
