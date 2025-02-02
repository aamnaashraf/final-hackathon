import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/cartContext";
import { WishlistProvider } from "@/context/wishList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            <WishlistProvider>
              <Header />
              {children}
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


