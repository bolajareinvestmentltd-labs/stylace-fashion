'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col cursor-pointer">
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        {/* 'NEW' Badge */}
        <div className="absolute top-2 left-2 z-10 bg-espresso text-cream text-[8px] font-sans px-2 py-1 uppercase tracking-wider">
          New
        </div>
        
        {/* Next.js Optimized Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      
     <div className="text-center mt-3">
        <h3 className="font-serif text-base text-primary">{product.name}</h3>
        <p className="font-sans text-xs text-secondary mt-1">₦{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}