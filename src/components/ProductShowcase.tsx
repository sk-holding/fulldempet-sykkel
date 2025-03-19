
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { fetchProducts } from '../lib/sanity';
import { SanityProduct } from '../types/sanity';
import { useQuery } from '@tanstack/react-query';

// Import the local images
import bikeImage1 from '../assets/bike1.jpg';
import bikeImage2 from '../assets/bike2.jpg';
import bikeImage3 from '../assets/bike3.jpg';

// Fallback products with local images
const fallbackProducts = [
  {
    _id: '1',
    name: 'Terreng Pro X1',
    description: 'Vår toppmodell med karbonramme og 150mm vandring for krevende terreng og lange turer.',
    price: 'NOK 49.990',
    specs: ['500Wh batteri', 'FOX dempere', 'Shimano EP8 motor', 'Carbon ramme'],
    imageUrl: bikeImage1
  },
  {
    _id: '2',
    name: 'Sti Eventyrer S3',
    description: 'Allsidig mellomdistanse elsykkel med perfekt balanse mellom ytelse og verdi.',
    price: 'NOK 39.990',
    specs: ['400Wh batteri', 'RockShox dempere', 'Bosch CX motor', 'Aluminium ramme'],
    imageUrl: bikeImage2
  },
  {
    _id: '3',
    name: 'Urban Explorer E2',
    description: 'Stilig bysykkel med full demping som håndterer byterrenget like bra som skogsstiene.',
    price: 'NOK 34.990',
    specs: ['300Wh batteri', 'SR Suntour dempere', 'Shimano Steps motor', 'Aluminium ramme'],
    imageUrl: bikeImage3
  }
];

const ProductShowcase = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Fetch products using React Query
  const { data: products = fallbackProducts, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    productRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });
    
    return () => {
      productRefs.current.forEach((ref) => {
        if (ref) observerRef.current?.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="produkter" className="section-container bg-slate-50">
      <div className="mb-14 text-center">
        <h2 className="section-title">Våre Premium Modeller</h2>
        <p className="section-subtitle mx-auto">
          Hver sykkel er nøye designet for å levere den ultimate sykkelturen, uansett terreng eller forhold.
        </p>
      </div>
      
      {isLoading ? (
        <div className="text-center py-10">Laster produkter...</div>
      ) : isError ? (
        <div className="text-center py-10 text-red-500">
          Kunne ikke laste produkter. Viser standard modeller.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product._id}
              ref={(el) => (productRefs.current[index] = el)}
              className="feature-card staggered-animate"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="h-60 overflow-hidden rounded-lg mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{product.name}</h3>
              <p className="text-slate-600 mb-4">{product.description}</p>
              <div className="mb-5">
                <span className="text-xl font-medium text-forest">{product.price}</span>
              </div>
              <div className="space-y-2 mb-6">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-forest rounded-full mr-2"></div>
                    <span className="text-sm text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>
              <a href="#kontakt" className="flex items-center font-medium text-forest hover:text-forest-light transition-colors">
                <span>Se detaljer</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-16 text-center">
        <a href="#kontakt" className="button-primary">
          Kontakt for full produktkatalog
        </a>
      </div>
    </section>
  );
};

export default ProductShowcase;
