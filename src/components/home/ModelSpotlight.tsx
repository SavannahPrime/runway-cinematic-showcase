
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModelSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for entrance
    const spotlight = spotlightRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    
    if (spotlight && image && text) {
      setTimeout(() => {
        image.classList.remove('translate-x-full', 'opacity-0');
        image.classList.add('translate-x-0', 'opacity-100');
      }, 300);
      
      setTimeout(() => {
        text.classList.remove('translate-x-[-100%]', 'opacity-0');
        text.classList.add('translate-x-0', 'opacity-100');
      }, 600);
    }
    
    return () => {};
  }, []);
  
  return (
    <section 
      ref={spotlightRef} 
      className="relative bg-cream py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gold/30" />
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gold/30" />
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Model Information */}
          <div 
            ref={textRef}
            className="lg:w-1/2 p-6 space-y-6 transform translate-x-[-100%] opacity-0 transition-all duration-1000 ease-out"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="h-0.5 w-12 bg-gold"></div>
              <span className="text-sm uppercase tracking-widest text-gold">Professional Model</span>
            </div>
            
            <h2 className="font-playfair text-5xl md:text-6xl font-medium tracking-tight">
              Isabella Moreau
            </h2>
            <p className="text-xl font-light">International Fashion Model</p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-sm text-charcoal/60 uppercase tracking-wider">Height</p>
                <p className="text-lg">5'11" / 180cm</p>
              </div>
              <div className="transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-sm text-charcoal/60 uppercase tracking-wider">Hair</p>
                <p className="text-lg">Blonde</p>
              </div>
              <div className="transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-sm text-charcoal/60 uppercase tracking-wider">Eyes</p>
                <p className="text-lg">Blue</p>
              </div>
              <div className="transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-sm text-charcoal/60 uppercase tracking-wider">Based in</p>
                <p className="text-lg">Paris, Milan</p>
              </div>
            </div>
            
            <p className="text-charcoal/80 leading-relaxed">
              Isabella brings a timeless elegance and captivating presence to every shoot, 
              runway, and campaign. With over a decade of experience, she has graced the 
              covers of Vogue, Elle, and Harper's Bazaar, and has been the face of 
              campaigns for luxury brands worldwide.
            </p>
            
            <div className="flex items-center space-x-6 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-4">
              <Link to="/about" className="luxury-button group">
                <span>View Portfolio</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Model Image */}
          <div 
            ref={imageRef}
            className="lg:w-1/2 h-[600px] md:h-[700px] relative transform translate-x-full opacity-0 transition-all duration-1000 ease-out"
          >
            <div className="absolute inset-0 border border-gold/20 m-12"></div>
            <img
              src="/img/intro/model-portrait.jpg"
              alt="Isabella Moreau - Fashion Model"
              className="absolute inset-0 m-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover shadow-xl hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300">
              <p className="font-playfair text-xl italic">"Elegance is the only beauty that never fades"</p>
              <p className="text-right text-sm mt-2">— Audrey Hepburn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSpotlight;
