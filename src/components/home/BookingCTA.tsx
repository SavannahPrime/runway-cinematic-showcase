
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const BookingCTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.2 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative py-20 overflow-hidden bg-cream">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-[url('/img/textures/geometric-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container-custom relative">
        <div 
          ref={ctaRef}
          className="max-w-4xl mx-auto text-center opacity-0"
        >
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">Ready to Collaborate?</h2>
          <p className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Isabella is currently accepting bookings for editorial, commercial, and runway projects.
            Get in touch today to discuss your creative vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="luxury-button bg-gold text-black hover:bg-black hover:text-white group">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Book a Consultation</span>
            </Link>
            
            <Link to="/projects" className="luxury-button bg-transparent border border-charcoal/20 hover:border-gold group">
              <span>View Portfolio</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
