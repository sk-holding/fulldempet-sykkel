
import React, { useEffect, useRef } from 'react';
import { Battery, Zap, Mountain, Compass, Shield, Wrench } from 'lucide-react';

const featuresList = [
  {
    id: 1,
    title: 'Kraftfull Ytelse',
    description: 'Våre elsykler er utstyrt med markedsledende motorer som gir jevn og pålitelig kraft når du trenger det mest.',
    icon: <Zap className="w-6 h-6 text-forest" />
  },
  {
    id: 2,
    title: 'Lang Rekkevidde',
    description: 'Opptil 100km rekkevidde på én lading, så du kan nyte lengre turer uten å bekymre deg for batteriet.',
    icon: <Battery className="w-6 h-6 text-forest" />
  },
  {
    id: 3,
    title: 'Full Demping',
    description: 'Avanserte dempingssystemer både foran og bak for maksimal komfort og kontroll i røft terreng.',
    icon: <Mountain className="w-6 h-6 text-forest" />
  },
  {
    id: 4,
    title: 'Norsk Terreng Optimalisert',
    description: 'Spesielt utviklet for norske forhold, fra bratte skogsstier til våte byveier.',
    icon: <Compass className="w-6 h-6 text-forest" />
  },
  {
    id: 5,
    title: '5 Års Garanti',
    description: 'Alle våre modeller kommer med omfattende garanti og støtte fra vårt dedikerte serviceteam.',
    icon: <Shield className="w-6 h-6 text-forest" />
  },
  {
    id: 6,
    title: 'Enkelt Vedlikehold',
    description: 'Designet for enkel tilgang til kritiske komponenter, med regelmessige serviceoppdateringer.',
    icon: <Wrench className="w-6 h-6 text-forest" />
  }
];

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    featureRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observerRef.current?.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="egenskaper" className="section-container bg-white">
      <div className="text-center mb-14">
        <h2 className="section-title">Førsteklasses Egenskaper</h2>
        <p className="section-subtitle mx-auto">
          Våre elsykler kombinerer innovativ teknologi, premium materialer og ergonomisk design for den ultimate sykkelopplevelsen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feature, index) => (
          <div
            key={feature.id}
            ref={(el) => (featureRefs.current[index] = el)}
            className="feature-card opacity-0"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-forest/10 rounded-full mr-4">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-lg">{feature.title}</h3>
            </div>
            <p className="text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
