'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function AddToCart({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, qty);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center space-x-4 mb-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300">
          <button 
            onClick={() => setQty(Math.max(1, qty - 1))} 
            className="px-4 py-3 text-primary hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-6 py-3 font-sans text-sm">{qty}</span>
          <button 
            onClick={() => setQty(qty + 1)} 
            className="px-4 py-3 text-primary hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>
      
      {/* Add To Bag Button */}
      <button 
        onClick={handleAdd} 
        className="w-full bg-primary text-cream py-4 font-sans text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300"
      >
        Add to Bag
      </button>
    </div>
  );
}