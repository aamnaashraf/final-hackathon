import Link from "next/link";
import {FaSearch,FaUser,FaShoppingCart,FaHeart} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#FBEBB5]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 flex-grow justify-center gap-5">
          <Link href="/" className="text-black font-medium hover:underline">
            Home
          </Link>
          <Link href="/shop" className="text-black font-medium hover:underline">
            Shop
          </Link>
          <Link href="/about" className="text-black font-medium hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-black font-medium hover:underline">
            Contact
          </Link>
        </nav>

      <div className="flex items-center space-x-4 ml-auto gap-6">
<FaUser size={24}/>
<FaSearch size={24}/>
<FaHeart size={24}/>
<FaShoppingCart size={24} />
      </div>
      </div>
    </header>
  );
};

export default Header;
