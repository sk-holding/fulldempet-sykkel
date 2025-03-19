
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-forest">
          fulldempet-elsykkel.no
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#produkter" className="hover-link font-medium text-slate-800">Produkter</a>
          <a href="#egenskaper" className="hover-link font-medium text-slate-800">Egenskaper</a>
          <a href="#om-oss" className="hover-link font-medium text-slate-800">Om oss</a>
          <a href="#kontakt" className="button-primary">Kontakt oss</a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          <a 
            href="#produkter" 
            className="w-full text-center text-lg font-medium text-slate-800 py-3 border-b border-slate-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Produkter
          </a>
          <a 
            href="#egenskaper" 
            className="w-full text-center text-lg font-medium text-slate-800 py-3 border-b border-slate-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Egenskaper
          </a>
          <a 
            href="#om-oss" 
            className="w-full text-center text-lg font-medium text-slate-800 py-3 border-b border-slate-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Om oss
          </a>
          <a 
            href="#kontakt" 
            className="button-primary w-full text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontakt oss
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
