import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';

export const revalidate = 3600;

export default async function Shop() {
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) console.error("Error fetching products:", error);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 w-full">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-primary">Shop All</h1>
        <p className="font-sans text-sm text-secondary mt-2">Discover our latest collection of modest wear.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Filters (Hidden on Mobile for now) */}
        <aside className="w-full md:w-1/4 hidden md:block">
          <h3 className="font-serif text-lg border-b border-gray-200 pb-2 mb-4">Categories</h3>
          <ul className="space-y-3 font-sans text-sm text-secondary">
            <li className="text-primary font-semibold cursor-pointer">All</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Abayas</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Jalabias</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Sets</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Shoes</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Bags</li>
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6 text-xs font-sans text-secondary uppercase tracking-widest">
            <span>{products?.length || 0} Products</span>
            <span className="cursor-pointer flex items-center">Sort By <span className="ml-1 text-[8px]">▼</span></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}