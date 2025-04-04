
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ProjectGrid from '@/components/projects/ProjectGrid';

// Categories for filtering
const categories = ['All', 'Editorial', 'Campaign', 'Runway', 'Commercial'];

// Sample projects data
const allProjects = [
  {
    id: '1',
    title: 'Summer Collection',
    brand: 'Gucci',
    location: 'Milan',
    date: 'June 2023',
    thumbnail: '/img/projects/project1.jpg',
    images: ['/img/projects/project1.jpg', '/img/projects/project1-2.jpg'],
    description: 'A stunning summer campaign showcasing Gucci\'s latest collection with a focus on lightweight fabrics and vibrant colors.',
    credits: 'Photography: Alex Johnson, Styling: Maria Rodriguez',
    video: '/videos/behind-scenes-1.mp4',
    category: 'Campaign'
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
    category: 'Editorial'
  },
  {
    id: '3',
    title: 'Resort Campaign',
    brand: 'Prada',
    location: 'Maldives',
    date: 'April 2024',
    thumbnail: '/img/projects/project3.jpg',
    images: ['/img/projects/project3.jpg', '/img/projects/project3-2.jpg'],
    description: 'An exclusive resort campaign shot in the Maldives, highlighting Prada\'s new beachwear collection.',
    credits: 'Photography: Michael Brown, Styling: Lisa Wong',
    video: '/videos/behind-scenes-2.mp4',
    category: 'Campaign'
  },
  {
    id: '4',
    title: 'Fall/Winter Show',
    brand: 'Dior',
    location: 'Paris',
    date: 'March 2024',
    thumbnail: '/img/projects/project4.jpg',
    images: ['/img/projects/project4.jpg', '/img/projects/project4-2.jpg'],
    description: 'Opening look for Dior\'s Fall/Winter runway show at Paris Fashion Week.',
    credits: 'Photography: Jean Martin',
    category: 'Runway'
  },
  {
    id: '5',
    title: 'Fragrance Launch',
    brand: 'Chanel',
    location: 'New York',
    date: 'May 2023',
    thumbnail: '/img/projects/project5.jpg',
    images: ['/img/projects/project5.jpg', '/img/projects/project5-2.jpg'],
    description: 'The launch campaign for Chanel\'s newest signature fragrance.',
    credits: 'Photography: Emily Watson, Creative Direction: Karl Thomson',
    category: 'Commercial'
  },
  {
    id: '6',
    title: 'Spring Collection',
    brand: 'Versace',
    location: 'Milan',
    date: 'September 2023',
    thumbnail: '/img/projects/project6.jpg',
    images: ['/img/projects/project6.jpg', '/img/projects/project6-2.jpg'],
    description: 'Showcasing Versace\'s vibrant spring collection on the runway in Milan.',
    credits: 'Photography: Marco Rossi',
    category: 'Runway'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 animate-fade-in">Projects</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl animate-fade-in animation-delay-200">
            A curated selection of campaigns, editorials, and runway shows from around the world.
          </p>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="py-12 border-b border-gray-100">
        <div className="container-custom">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-8">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`px-4 py-2 text-sm md:text-base transition-colors ${
                    activeCategory === category 
                      ? 'text-gold font-medium border-b-2 border-gold' 
                      : 'text-charcoal/70 hover:text-black'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
