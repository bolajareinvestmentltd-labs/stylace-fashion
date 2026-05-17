import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import AddToCart from '@/components/AddToCart';

export const revalidate = 3600;

export default async function ProductPage({ params }) {
  // NEXT.JS 15 FIX: We must await the params to get the ID
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Fetch the specific product by ID
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif text-2xl text-primary">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 w-full animate-fade-in">
      
      <Link href="/shop" className="text-xs font-sans text-secondary uppercase tracking-widest hover:text-primary mb-8 inline-block transition-colors">
        ← Back to Shop
      </Link>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* Left: Huge Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[3/4] bg-gray-100">
            <div className="absolute top-4 left-4 z-10 bg-espresso text-cream text-[10px] font-sans px-3 py-1 uppercase tracking-widest">
              New In
            </div>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right: Product Details & Controls */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">{product.name}</h1>
          <p className="font-sans text-xl text-secondary mb-8">₦{product.price.toLocaleString()}</p>
          
          <div className="w-full h-px bg-gray-200 mb-8" />
          
          <div className="font-sans text-sm text-secondary leading-relaxed mb-8">
            <p>{product.description || "Experience the perfect blend of modesty and luxury. Carefully crafted with premium materials for the modern woman. This timeless piece elevates your wardrobe effortlessly."}</p>
          </div>

          {/* Our Client Component for Interactivity */}
          <AddToCart product={product} />
          
        </div>
      </div>
    </div>
  );
}