'use client';
import Link from 'next/link';
import { Home, Grid, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function DockMobile() {
  const { toggleCart, cartCount } = useCart();

  return (
    /* THE PILL MAGIC:
      - bottom-6: pushes it slightly up from the very bottom
      - left-1/2 & -translate-x-1/2: perfectly centers it horizontally
      - rounded-full: makes it a pill shape
      - backdrop-blur-md & bg-white/90: gives it that premium frosted-glass look
    */
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[350px] bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl z-50 md:hidden">
      <div className="flex justify-between items-center h-16 px-8">
        
        <Link href="/" className="flex flex-col items-center text-secondary hover:text-primary transition-colors">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-sans font-medium uppercase tracking-widest">Home</span>
        </Link>

        <Link href="/shop" className="flex flex-col items-center text-secondary hover:text-primary transition-colors">
          <Grid className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-sans font-medium uppercase tracking-widest">Shop</span>
        </Link>

        {/* The Cart Toggle */}
        <div onClick={toggleCart} className="flex flex-col items-center text-secondary hover:text-primary transition-colors relative cursor-pointer">
          <ShoppingBag className="w-5 h-5 mb-1" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-primary text-cream text-[9px] w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
              {cartCount}
            </span>
          )}
          <span className="text-[9px] font-sans font-medium uppercase tracking-widest">Bag</span>
        </div>

        <Link href="/about" className="flex flex-col items-center text-secondary hover:text-primary transition-colors">
          <User className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-sans font-medium uppercase tracking-widest">Profile</span>
        </Link>

      </div>
    </div>
  );
}