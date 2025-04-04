
import React from 'react';
import { cn } from '@/lib/utils';

const brands = [
  { name: 'Gucci', logo: '/img/brands/gucci.svg' },
  { name: 'Dior', logo: '/img/brands/dior.svg' },
  { name: 'Vogue', logo: '/img/brands/vogue.svg' },
  { name: 'Prada', logo: '/img/brands/prada.svg' },
  { name: 'Chanel', logo: '/img/brands/chanel.svg' },
];

interface BrandsSectionProps {
  className?: string;
}

const BrandsSection: React.FC<BrandsSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-16 bg-cream", className)}>
      <div className="container-custom">
        <h3 className="text-center text-lg uppercase tracking-widest text-charcoal/70 mb-12 font-montserrat">
          Featured Collaborations
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={brand.name} 
              className={cn(
                "opacity-60 hover:opacity-100 transition-opacity duration-300 fade-in",
                `animate-delay-${index * 100}`
              )}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
