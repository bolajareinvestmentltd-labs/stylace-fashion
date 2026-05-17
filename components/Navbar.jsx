'use client';
import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // 1. IMPORT

export default function Navbar() {
  // 2. THE LOGIC (This is where const always goes!)
  const { toggleCart, cartCount } = useCart();

  // 3. THE UI
  return (
    <nav className="sticky top-0 z-50 w-full bg-cream border-b border-gray-200 hidden md:block">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-widest text-primary">STYLACE.</span>
          <span className="font-sans text-[10px] tracking-widest text-secondary uppercase mt-[-4px]">Fashions</span>
        </Link>

        {/* Center Links */}
        <div className="flex space-x-8 text-sm font-sans tracking-wide text-primary">
          <Link href="/shop" className="hover:text-accent transition-colors">ABAYAS</Link>
          <Link href="/shop" className="hover:text-accent transition-colors">JALABIAS</Link>
          <Link href="/shop" className="hover:text-accent transition-colors">ESSENTIALS</Link>
          <Link href="/shop" className="hover:text-accent transition-colors">WATCHES</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-primary">
          <Search className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          
          {/* UPDATED SHOPPING BAG WITH TOGGLE ONCLICK */}
          <div className="relative cursor-pointer hover:text-accent transition-colors" onClick={toggleCart}>
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-cream text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}