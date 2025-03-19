
import React, { useEffect, useRef } from 'react';

const BrandStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add('animate-fade-in-up');
            }
            if (imageRef.current) {
              imageRef.current.classList.add('animate-fade-in');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="om-oss" ref={sectionRef} className="section-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-forest-light/5 -skew-x-12 transform -translate-x-16 z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={contentRef} className="opacity-0">
          <h2 className="section-title">Vår Historie</h2>
          <p className="text-slate-700 mb-6">
            Født ut av lidenskap for sykling og norsk natur, begynte fulldempet-elsykkel.no i 2018 med en enkel idé: å designe den perfekte elsykkelen for Norges unike terreng.
          </p>
          <p className="text-slate-700 mb-6">
            Vi er stolte av å være et heleid norsk selskap med over 20 års erfaring innen sykkeldesign og ingeniørarbeid. Vår visjon er å kombinere bærekraftig transport med utendørs eventyr gjennom førsteklasses elektriske sykler.
          </p>
          <p className="text-slate-700 mb-6">
            Alle våre modeller er strengt testet i norske forhold - fra Nordmarka til Jotunheimen - for å sikre at de møter de høyeste standardene for pålitelighet og ytelse.
          </p>
          <blockquote className="border-l-4 border-forest pl-4 italic text-slate-600 my-8">
            "Vi tror på sykling som både en livsstil og en vei til et sunnere, mer bærekraftig samfunn. Våre elsykler er designet for å bringe denne visjonen til liv."
            <cite className="block mt-2 font-medium text-forest">— Morten Hansen, Grunnlegger</cite>
          </blockquote>
        </div>
        
        <div ref={imageRef} className="opacity-0 relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1603652387813-701ab449e6ed?q=80&w=1000&auto=format&fit=crop" 
              alt="Mountain biker on trail" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-8 -right-8 w-2/3 h-full bg-forest/10 rounded-lg -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
