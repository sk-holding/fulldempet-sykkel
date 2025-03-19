
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToContent = () => {
    const productsSection = document.getElementById('produkter');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax absolute inset-0">
        <div 
          ref={parallaxRef}
          className="parallax-bg w-full h-full"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1669124761702-61b5bb809f98?q=80&w=2070&auto=format&fit=crop")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Utforsk naturen med våre <span className="text-slate-200">fulldempede elsykler</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Opplev perfekt balanse mellom kraft, komfort og kontroll med våre premium elsykler designet for det norske terrenget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a href="#produkter" className="button-primary text-center">
              Utforsk modeller
            </a>
            <a href="#kontakt" className="button-secondary bg-white/20 text-white border-white/60 hover:bg-white/30 text-center">
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToContent}
          className="text-white bg-forest/80 hover:bg-forest rounded-full p-3"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
