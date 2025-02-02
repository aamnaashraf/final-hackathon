'use client';
import { useState, useEffect, Key,  } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import { useCart } from '@/context/cartContext';  
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useWishlist } from '@/context/wishList';
import ReviewsSection from '@/components/reviews';

const ProductPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const [productData, setProductData] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart } = useCart();  
  const { wishlistItems, addToWishlist } = useWishlist();  
  useEffect(() => {
    const fetchProductData = async () => {
      const query = `*[_type == 'product' && slug.current == '${slug}']{
        name, price,category, product_id,Paragraph, image, thumbnailImages, block
      }`;
      const data = await client.fetch(query);
      setProductData(data[0] || null);
    };
    fetchProductData();
  }, [slug]);
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const addToCartHandler = () => {
    if (!productData) return;

    const product = {
      id: productData.name,  // Use product name as the id (you might want to use product id instead)
      name: productData.name,
      price: productData.price,
      quantity: productData.quantity,
      image: urlFor(productData.image).url(),
    };

    addToCart(product);  // Add the product to the global cart via context
    alert('Product added to cart!');
  };

  const addToWishlistHandler = () => {
    if (!productData) return;

    const product = {
      id: productData.name,  // Use product name as the id (you might want to use product id instead)
      name: productData.name,
      price: productData.price,
      image: urlFor(productData.image).url(),
    };

    addToWishlist(product);  // Add the product to the global wishlist via context
    alert('Product added to wishlist!');
  };

  if (!productData) return <div>Loading...</div>;

  const thumbnails = productData.thumbnailImages as string[];





  return (
    <div className="p-6 lg:p-12 bg-white">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:underline">
          Home
        </a>{' '}
        /{' '}
        <a href="/shop" className="hover:underline">
          Shop
        </a>{' '}
        / <span>{productData.name}</span>
      </nav>

      {/* Main Product Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="flex">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 mr-4">
            {Array.isArray(productData.thumbnailImages) &&
              productData.thumbnailImages.map((img: any, index: Key | null | undefined) => {
                const imageUrl = img?.asset ? urlFor(img.asset).url() : ''; // Check if 'asset' exists and get the URL
                return (
                  <Image
                    key={index}
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                    width={80}
                    height={80}
                    className="rounded-md border"
                  />
                );
              })}
          </div>

          {/* Main Image with Yellow Background */}
          <div className="p-6 bg-[#FFF9E5] rounded-md">
            <Image
              src={urlFor(productData.image).url()}
              alt={productData.name || 'Product Image'}
              width={400}
              height={400}
              className="rounded-md border"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
          <p className="text-lg text-gray-500">Rs. {productData.price || 'N/A'}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-lg">★★★★☆</span>
            <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
          </div>

          <p className="text-gray-700 mt-4">{productData.Paragraph}</p>

          {/* Size and Color Options */}
          <div className="mt-6">
            <label className="block font-medium mb-1">Size</label>
            <div className="flex gap-2">
              {['L', 'XL', 'XS'].map((size) => (
                <button key={size} className="border rounded-md px-4 py-2 hover:bg-gray-100">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <label className="block font-medium mb-1">Color</label>
            <div className="flex gap-2">
              {['blue', 'black', 'gold'].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color === 'blue' ? 'bg-blue-600' : color === 'black' ? 'bg-black' : 'bg-yellow-500'}`}
                ></button>
              ))}
            </div>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="mt-6">
            <label className="block font-medium mb-1">Quantity</label>
            <div className="flex gap-4 items-center">
              <button
                className="border rounded-md px-4 py-2"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="border rounded-md px-4 py-2"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              className="bg-white text-black border-2 border-black px-8 py-2 rounded-md hover:bg-yellow-300"
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
            <button
              className="bg-gray-100 text-black border-2 border-black px-8 py-2 rounded-md hover:bg-gray-300"
              onClick={addToWishlistHandler}
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>

      <br></br>

      <div className="flex justify-center items-center">
        <div className="flex flex-col text-wrap ml-11 mb-8 px-4 sm:px-6 md:px-8">
          {/* SKU Section */}
          <div className="mb-4">
            <p className="text-lg text-gray-500 font-semibold">SKU: 55001</p>
          </div>

          {/* Category Section */}
          <div className="mb-4">
            <p className="text-lg text-gray-500 font-semibold">Category: Sofas</p>
          </div>

          {/* Tags Section */}
          <div className="mb-4">
            <p className="text-lg text-gray-500 font-semibold">Tags: Sofa, Chair, Home, Shop</p>
          </div>


          {/* Social Media Share Section */}
          <div className="flex space-x-6 mb-4">
            <p className="text-lg text-gray-500 font-semibold">Share:</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>

          {/* Button Section */}
          <div className="text-wrap mb-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-700">
          <a
            href="#"
            onClick={() => handleTabClick("description")}
            className={`pb-2 ${activeTab === "description" ? "font-bold" : ""} text-lg sm:text-xl md:text-2xl`}
          >
            Description
          </a>
          <a
            href="#"
            onClick={() => handleTabClick("additionalInfo")}
            className={`pb-2 ${activeTab === "additionalInfo" ? "font-bold" : ""} text-lg sm:text-xl md:text-2xl`}
          >
            Additional Information
          </a>
          <a
            href="#"
            onClick={() => handleTabClick("reviews")}
            className={`pb-2 ${activeTab === "reviews" ? "font-bold" : ""} text-lg sm:text-xl md:text-2xl`}
          >
            Reviews
          </a>
        </div>

        {/* Tab Contents */}
        <div className="mt-6">
          {/* Description Tab */}
          {activeTab === "description" && (
            <div>
              <section className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                <h2>Description</h2>
                <PortableText value={productData.block} />
              </section>
            </div>
          )}

          {/* Additional Information Tab */}
          {activeTab === "additionalInfo" && (
            <div>
              <section className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                <h2 className='font-bold text-blue-600 text-3xl'>Additional Information</h2>
                <p>
                  Our product is meticulously designed to meet the highest standards of quality, offering a blend of durability, performance, and aesthetic appeal.<br></br> Crafted with precision, it is made from top-grade materials that ensure long-term reliability, making it the perfect choice for individuals who value both functionality and style. The product’s cutting-edge features include advanced technology that not only enhances user experience but also provides unmatched efficiency in its category. Whether used for personal or professional purposes, it offers seamless integration with a variety of systems, making it versatile and adaptable to your needs. Its design has been optimized for maximum ease of use, with intuitive controls and a sleek, modern look that complements any environment. In addition to its outstanding performance, the product is eco-friendly, made with sustainable materials that contribute to reducing your environmental footprint. We take pride in providing a product that not only meets but exceeds expectations. For any inquiries related to its maintenance, care instructions, or usage, our dedicated support team is always available to assist you.
                </p>


              </section>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <ReviewsSection />)}
        </div>
      </div>


      {/* Additional Images Below Description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div className="p-1 bg-[#FFF9E5] rounded-md">
          <Image
            src="/shop img 11.png"
            alt="Description Image 1"
            width={600}
            height={1200}
            className="rounded-md w-full h-auto"
          />
        </div>
        <div className="p-1 bg-[#FFF9E5] rounded-md">
          <Image
            src="/shop img 11.png"
            alt="Description Image 2"
            width={600}
            height={1200}
            className="rounded-md w-full h-auto"
          />
        </div>
      </div>

      {/* Related Products Section */}
      <section className="bg-[#FFFFFF] py-20 px-6 sm:px-12 lg:px-24">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Related Products
          </h1>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img 4.png"
              alt="Pick 1"
              width={300}
              height={300}
              className="object-cover mb-4"
            />
            <p className="text-base sm:text-lg text-gray-800 text-center">
              Trenton modular sofa_3
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-800">
              Rs.25,000.00
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img 5.png"
              alt="Pick 2"
              width={300}
              height={300}
              className="object-cover mb-4"
            />
            <p className="text-base sm:text-lg text-gray-800 text-center">
              Granite dining table with dining chair
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-800">
              Rs.25,000.00
            </p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img 6.png"
              alt="Pick 3"
              width={300}
              height={300}
              className="object-cover mb-4"
            />
            <p className="text-base sm:text-lg text-gray-800 text-center">
              Outdoor bar table and stool
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-800">
              Rs.25,000.00
            </p>
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/img 7.png"
              alt="Pick 4"
              width={300}
              height={300}
              className="object-cover mb-4"
            />
            <p className="text-base sm:text-lg text-gray-800 text-center">
              Plain console with teak mirror
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-800">
              Rs.25,000.00
            </p>
          </div>
        </div>

        {/* View More Section */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="text-sm sm:text-lg text-gray-600 underline hover:text-gray-800"
          >
            View More
          </Link>
        </div>
      </section>




    </div>


  );
};

export default ProductPage;
