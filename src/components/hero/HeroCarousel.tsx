
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: '/img/hero/hero-1.jpg',
    title: 'Campaign 2025',
    subtitle: 'Paris Fashion Week'
  },
  {
    id: 2,
    image: '/img/hero/hero-2.jpg',
    title: 'Vogue Italia',
    subtitle: 'Editorial Spotlight'
  },
  {
    id: 3,
    image: '/img/hero/hero-3.jpg',
    title: 'Modern Elegance',
    subtitle: 'New York'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white">
            <h1 
              className={cn(
                "text-3xl md:text-5xl lg:text-7xl font-bold mb-4 transform transition-all duration-700",
                currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p 
                className={cn(
                  "text-lg md:text-xl uppercase tracking-widest font-light transform transition-all duration-700 delay-100",
                  currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
              >
                {slide.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index ? "w-8 bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
