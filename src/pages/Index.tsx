
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Fulldempet Elsykkel | Premium elektriske terrengsykler";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Intersection Observer for staggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.staggered-animate').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <BrandStory />
      <Footer />
    </main>
  );
};

export default Index;
