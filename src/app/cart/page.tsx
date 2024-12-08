import Image from "next/image"

const Cart = () => {
    return (
      <div>
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/bg image 2.png" 
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
  
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black bg-gray-300 bg-opacity-50">
            <div className="mb-4">
              <Image
                src="/logo.png" 
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            
            <h1 className="text-4xl font-bold mt-2">Cart</h1>
            <p className="text-sm text-black">
              <a href="/" className="font-bold text-black hover:underline">Home</a> &gt; Cart
            </p>
          </div>
        </div>
        </div>
        
  );
  };

  export default Cart;