import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About Us | Stylace Fashions",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full animate-fade-in">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left: Brand Image */}
        <div className="w-full md:w-1/2 relative aspect-[4/5] bg-gray-100">
          <Image 
            src="https://images.pexels.com/photos/7249298/pexels-photo-7249298.jpeg" 
            alt="Modest Elegance" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: The Story */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">Our Story</h1>
          <h2 className="font-sans text-sm text-secondary uppercase tracking-[0.2em] mb-8">Modesty Meets Elegance</h2>
          
          <div className="font-sans text-sm text-secondary leading-relaxed space-y-6 mb-10">
            <p>
              Founded by Lola Salman, Stylace Fashions was born out of a desire to bridge the gap between premium luxury and modest wear. We believe that a woman should never have to compromise her elegance for her modesty.
            </p>
            <p>
              Every Abaya, Jalabia, and accessory in our collection is carefully curated to reflect the sophistication of the modern woman in Lagos and beyond. We focus on high-quality fabrics, timeless silhouettes, and exquisite craftsmanship.
            </p>
            <p className="font-serif text-lg text-primary italic">
              "True luxury is found in the subtle details. It is the quiet confidence of modesty." <br/>— Lola
            </p>
          </div>

          <Link 
            href="/shop" 
            className="inline-block border border-primary text-primary px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-primary hover:text-cream transition-colors duration-300 text-center w-max"
          >
            Explore Collection
          </Link>
        </div>

      </div>
    </div>
  );
}