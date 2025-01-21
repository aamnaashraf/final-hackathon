import FilterSection from "@/components/filter";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";



interface Product {
  name: string;
  image: { asset: { url: string } };
  price: number;
  slug: { current: string };
}

const Shop = async () => {
  
  const query = `*[_type == 'product'] | order(_updatedAt asc) {
    name,
    image,
    price,
    slug
  }`;

  // Fetch data from Sanity
  const data: Product[] = await client.fetch(query);

  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-white shadow-md pt-16 ">
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
          <h1 className="text-4xl font-bold text-black">Shop</h1>
          <p className="text-black text-sm">
            <a href="/" className="hover:text-black text-bold">Home</a> &gt; Shop
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <FilterSection data={[]}  />
      
      {/* Products Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product) => (
              <Link key={product.slug.current} href={`/product/${product.slug.current}`}>
                <div className="text-center border-2 border-gray-100  bg-gray-50 transition-transform 
                transform hover:scale-105 hover:shadow-lg">
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
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold text-black">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              Enjoy free delivery on all orders <br />
              without any hidden charges.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black">90 Days Return</h3>
            <p className="text-gray-600 mt-2">
              Hassle-free returns for up to 90 days <br />
              on all purchases.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              Your payment information is safe <br />
              with our secure systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

