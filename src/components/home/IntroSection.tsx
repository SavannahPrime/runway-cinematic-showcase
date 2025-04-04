
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-px h-full bg-gold/30" />
      <div className="absolute top-0 right-0 w-px h-full bg-gold/30" />
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="lg:w-1/2 space-y-6 opacity-0 transform translate-y-8" style={{animationFillMode: 'forwards'}}>
            <h2 className="font-playfair text-4xl md:text-5xl font-medium tracking-tight text-[#1A1F3A]">
              Crafting Elegance <br />in Every Frame
            </h2>
            <p className="text-[#1A1F3A]/80 leading-relaxed">
              With over a decade of experience in high-fashion modeling, each project is approached with professionalism, creativity, and an unwavering commitment to excellence. From editorial shoots to runway shows, the goal is to bring each designer's vision to life with authenticity and precision.
            </p>
            <p className="text-[#1A1F3A]/80 leading-relaxed">
              Featured in leading publications and collaborating with renowned brands worldwide, the portfolio reflects versatility and a unique ability to transform for each creative brief while maintaining a distinctive presence.
            </p>
            <div className="pt-4">
              <Link to="/about" className="luxury-button bg-[#1A1F3A] text-white hover:bg-gold hover:text-[#1A1F3A] group">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative h-[500px] md:h-[600px] opacity-0 transform translate-y-8" style={{animationFillMode: 'forwards', animationDelay: '200ms'}}>
            <div className="absolute top-0 left-0 right-0 bottom-0 border border-gold/20"></div>
            <img
              src="/img/intro/model-portrait.jpg"
              alt="Professional model portrait"
              className="absolute top-6 left-6 right-6 bottom-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
