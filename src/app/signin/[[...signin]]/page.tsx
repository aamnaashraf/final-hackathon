import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
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
          <h1 className="text-4xl font-bold text-black">Sign In</h1>
          <p className="text-black text-sm">
            <Link href="/" className="hover:text-black text-bold">
              Home
            </Link>{' '}
            &gt; Sign In
          </p>
        </div>
      </header>




      {/* Signin Form Section */}
      <section className="max-w-[1320px] mx-auto py-[50px] px-[20px] lg:px-[60px] relative bg-gray-100">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h3>
          
          {/* Embed Clerk's SignIn Component */}
          <SignIn />
        </div>
      </section>
    </div>
   
  );
}




