import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-6 sm:px-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">Order Placed Successfully</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your order. We are processing it, and you will receive an update soon.
        </p>
        
        {/* Button to Generate Tracking Number */}
        <Link href="/generate-tracking-number">
        
            <button
              type="button"
              className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Generate Tracking Number
            </button>
          
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
