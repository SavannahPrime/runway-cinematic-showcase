
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroCarousel from '@/components/hero/HeroCarousel';
import BrandsSection from '@/components/home/BrandsSection';
import IntroSection from '@/components/home/IntroSection';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample projects data
const featuredProjects = [
  {
    id: '1',
    title: 'Summer Collection',
    brand: 'Gucci',
    location: 'Milan',
    date: 'June 2023',
    thumbnail: '/img/projects/project1.jpg',
    images: ['/img/projects/project1.jpg', '/img/projects/project1-2.jpg'],
    description: 'A stunning summer campaign showcasing Gucci's latest collection with a focus on lightweight fabrics and vibrant colors.',
    credits: 'Photography: Alex Johnson, Styling: Maria Rodriguez',
    video: '/videos/behind-scenes-1.mp4',
  },
  {
    id: '2',
    title: 'Winter Editorial',
    brand: 'Vogue',
    location: 'Paris',
    date: 'December 2023',
    thumbnail: '/img/projects/project2.jpg',
    images: ['/img/projects/project2.jpg', '/img/projects/project2-2.jpg'],
    description: 'A bold winter editorial for Vogue featuring avant-garde styling and dramatic settings.',
    credits: 'Photography: Sophie Turner, Styling: Jean Claude',
  },
  {
    id: '3',
    title: 'Resort Campaign',
    brand: 'Prada',
    location: 'Maldives',
    date: 'April 2024',
    thumbnail: '/img/projects/project3.jpg',
    images: ['/img/projects/project3.jpg', '/img/projects/project3-2.jpg'],
    description: 'An exclusive resort campaign shot in the Maldives, highlighting Prada's new beachwear collection.',
    credits: 'Photography: Michael Brown, Styling: Lisa Wong',
    video: '/videos/behind-scenes-2.mp4',
  },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroCarousel />
      
      <BrandsSection className="animate-fade-up" />
      
      <IntroSection />
      
      <section className="py-24 bg-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="font-playfair text-4xl text-white mb-6 md:mb-0">Featured Projects</h2>
            <Link to="/projects" className="luxury-button bg-transparent border border-white/20 hover:bg-white hover:text-black group">
              <span>View all projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
