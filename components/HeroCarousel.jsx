'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/15136848/pexels-photo-15136848.jpeg",
    title: "Modesty Meets Elegance",
    subtitle: "Premium modest wear designed for the modern woman.",
    cta: "SHOP ABAYAS",
    link: "/shop?category=abayas"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
    title: "Timeless Accessories",
    subtitle: "Elevate your look with our golden hour collection.",
    cta: "SHOP WATCHES",
    link: "/shop?category=watches"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slides every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-espresso">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" /> 
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-cream">
            <span className="text-[10px] tracking-[0.3em] uppercase mb-4">New Collection 2026</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-md">
              {slides[current].title}
            </h1>
            <p className="font-sans text-sm md:text-base text-gray-200 mb-8 max-w-md drop-shadow-md">
              {slides[current].subtitle}
            </p>
            <Link 
              href={slides[current].link}
              className="bg-espresso text-cream px-8 py-3 text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300"
            >
              {slides[current].cta}
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}