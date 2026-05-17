import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DockMobile from "@/components/DockMobile";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Stylace Fashions | Modesty Meets Elegance",
  description: "Premium modest wear designed for the modern woman in Lagos, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-primary font-sans antialiased pb-16 md:pb-0 flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
          <DockMobile />
        </CartProvider>
      </body>
    </html>
  );
}