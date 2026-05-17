import { supabase } from '@/lib/supabase';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';

// Next.js feature to refetch data every hour (ISR)
export const revalidate = 3600; 

export default async function Home() {
  // Fetch our products from the Supabase database we just created
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .limit(4); // Just get 4 for the homepage

  if (error) console.error("Error fetching products:", error);

  return (
    <div className="flex flex-col w-full animate-fade-in">
      
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. Shop By Department (Static Grid) */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl md:text-3xl mb-8 text-primary">Shop by Department</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['ABAYAS', 'JALABIAS', 'SHOES', 'BAGS'].map((dept) => (
            <div key={dept} className="bg-white py-10 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center justify-center">
              <span className="font-sans text-xs tracking-[0.2em] text-primary">{dept}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Selected For You (Dynamic Database Grid) */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full bg-cream">
        <div className="flex justify-between items-end mb-8">
          <div className="text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-primary">Selected for You</h2>
            <p className="font-sans text-xs text-secondary mt-2">Our most loved pieces this season</p>
          </div>
          <span className="font-sans text-xs font-semibold tracking-widest text-primary cursor-pointer hover:text-accent">
            VIEW ALL →
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}