 import React from 'react'
 
 const AdditionalSection = () => {
   return (
     <div>
       {/* Additional Section */}
 <div className="bg-pink-50 py-16">
 <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
   {/* Free Delivery */}
   <div>
     <h3 className="text-lg font-bold text-black">Free Delivery</h3>
     <p className="text-gray-600 mt-2">
       Enjoy free delivery on all orders <br />
       without any hidden charges.
     </p>
   </div>

   {/* 90 Days Return */}
   <div>
     <h3 className="text-lg font-bold text-black">90 Days Return</h3>
     <p className="text-gray-600 mt-2">
       Hassle-free returns for up to 90 days <br />
       on all purchases.
     </p>
   </div>

   {/* Secure Payment */}
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
   )
 }
 
 export default AdditionalSection
 
 