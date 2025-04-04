
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Laurent Dubois",
    role: "Creative Director",
    company: "Dior",
    text: "Isabella brings an incomparable elegance to every shoot. Her professionalism and ability to embody our brand vision has made her our top choice for three consecutive seasonal campaigns.",
    rating: 5,
    image: "/img/testimonials/person1.jpg"
  },
  {
    id: 2,
    name: "Sofia Ventura",
    role: "Editor-in-Chief",
    company: "Vogue Italia",
    text: "Working with this talent has consistently elevated our editorial pieces. Her versatility and intuitive understanding of light and composition is truly remarkable.",
    rating: 5,
    image: "/img/testimonials/person2.jpg"
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Photographer",
    company: "Fashion Week NYC",
    text: "In my twenty years of fashion photography, I've rarely encountered a model with such presence. She transforms concepts into art effortlessly.",
    rating: 5,
    image: "/img/testimonials/person3.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [current]);
  
  // Intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={testimonialsRef} className="py-24 bg-white opacity-0 scroll-animate">
      <div className="container-custom">
        <h2 className="font-playfair text-4xl text-center mb-16">Client Testimonials</h2>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full px-4 flex flex-col items-center"
                  >
                    <div className="bg-cream p-8 rounded-lg shadow-md w-full">
                      <div className="flex items-center mb-6">
                        {testimonial.image && (
                          <div className="mr-4 h-16 w-16 rounded-full overflow-hidden border-2 border-gold/30">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="font-playfair text-xl">{testimonial.name}</h4>
                          <p className="text-sm text-charcoal/70">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <blockquote className="italic text-lg mb-6">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gold/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gold/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "w-8 bg-gold" : "bg-charcoal/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
