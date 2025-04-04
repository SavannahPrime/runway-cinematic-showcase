
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  overlayOpacity?: number;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: '/img/hero/hero-1.jpg',
    title: 'Campaign 2025',
    subtitle: 'Paris Fashion Week',
    overlayOpacity: 0.5
  },
  {
    id: 2,
    image: '/img/hero/hero-2.jpg',
    title: 'Vogue Italia',
    subtitle: 'Editorial Spotlight',
    overlayOpacity: 0.5
  },
  {
    id: 3,
    image: '/img/hero/hero-3.jpg',
    title: 'Modern Elegance',
    subtitle: 'New York',
    overlayOpacity: 0.5
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'right' | 'left'>('right');

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setAnimationDirection('right');
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setAnimationDirection('left');
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1A1F3A]">
      {slides.map((slide, index) => {
        // Preload images for smooth transitions
        const imgPreload = new Image();
        imgPreload.src = slide.image;
        
        return (
          <div 
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-1500 ease-in-out",
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
              isTransitioning && currentSlide === index && animationDirection === 'right' ? "animate-slide-in-right" : "",
              isTransitioning && currentSlide === index && animationDirection === 'left' ? "animate-slide-in-left" : ""
            )}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out transform scale-[1.03] hover:scale-100"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div 
              className="absolute inset-0 bg-[#1A1F3A]" 
              style={{ opacity: slide.overlayOpacity || 0.5 }} 
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white">
              <div className="max-w-3xl px-6 py-8 bg-[#1A1F3A]/70 backdrop-blur-md rounded-lg border border-white/10">
                <h1 
                  className={cn(
                    "text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 transform transition-all duration-1000",
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                  style={{ transitionDelay: '300ms' }}
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p 
                    className={cn(
                      "text-lg md:text-xl uppercase tracking-widest font-light transform transition-all duration-1000",
                      currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    )}
                    style={{ transitionDelay: '600ms' }}
                  >
                    {slide.subtitle}
                  </p>
                )}
                
                <div 
                  className={cn(
                    "mt-12 transform transition-all duration-1000",
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                  style={{ transitionDelay: '900ms' }}
                >
                  <Link to="/projects" className="luxury-button bg-white/10 backdrop-blur-sm hover:bg-white border border-white/30 hover:text-[#1A1F3A]">
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows with improved styles */}
      <div className="absolute inset-x-0 bottom-1/2 flex items-center justify-between px-4 md:px-12">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#1A1F3A]/40 text-white hover:bg-[#1A1F3A]/70 transition-all transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#1A1F3A]/40 text-white hover:bg-[#1A1F3A]/70 transition-all transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator with improved styles */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > currentSlide) setAnimationDirection('right');
              if (index < currentSlide) setAnimationDirection('left');
              setCurrentSlide(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "w-10 bg-white" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
