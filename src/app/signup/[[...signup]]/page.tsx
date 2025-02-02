import Image from "next/image";
import { SignUp } from '@clerk/nextjs';
import Link from "next/link";

export default function SignUpPage() {
  return (
  
      <div>
       <header className="relative bg-white shadow-md pt-16">
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
         <h1 className="text-4xl font-bold text-black">Sign Up</h1>
         <p className="text-black text-sm">
           <Link href="/" className="hover:text-black text-bold">
             Home
           </Link>{' '}
           &gt; Sign Up
         </p>
       </div>
     </header>

      {/* Signup Form Section */}
      <section className="max-w-[1320px] mx-auto py-[50px] px-[20px] lg:px-[60px] relative bg-white">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h3>
          
          {/* Embed Clerk's SignUp Component */}
          <SignUp />
        </div>
      </section>
    </div>
  );
}


