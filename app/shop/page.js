import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export const revalidate = 3600;

export default async function Shop({ searchParams }) {
  // NEXT.JS 15 FIX: We must await the searchParams
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || 'All';

  // 1. Build the database query dynamically
  let query = supabase.from('products').select('*');

  // 2. If the user clicked a specific category, filter the database!
  if (currentCategory !== 'All') {
    query = query.eq('category', currentCategory);
  }

  const { data: products, error } = await query;

  if (error) console.error("Error fetching products:", error);

  // Our master list of categories
  const categories = ['All', 'Abayas', 'Jalabias', 'Watches', 'Essentials', 'Sets', 'Shoes', 'Bags'];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 w-full">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-primary">Shop All</h1>
        <p className="font-sans text-sm text-secondary mt-2">Discover our latest collection of modest wear.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 hidden md:block">
          <h3 className="font-serif text-lg border-b border-gray-200 pb-2 mb-4">Categories</h3>
          <ul className="space-y-3 font-sans text-sm text-secondary">
            {categories.map((cat) => (
              <li key={cat}>
                <Link 
                  href={cat === 'All' ? '/shop' : `/shop?category=${cat}`}
                  className={`cursor-pointer transition-colors ${
                    currentCategory === cat 
                      ? 'text-primary font-bold tracking-wide' 
                      : 'hover:text-primary'
                  }`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6 text-xs font-sans text-secondary uppercase tracking-widest">
            <span>{products?.length || 0} Products</span>
            <span className="cursor-pointer flex items-center">Sort By <span className="ml-1 text-[8px]">▼</span></span>
          </div>

          {/* Show a message if a category is empty */}
          {products?.length === 0 ? (
            <div className="text-center py-20 font-sans text-secondary">
              No products found in this category yet. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}