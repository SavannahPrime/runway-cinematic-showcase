
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { ArrowDownToLine, Award, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 animate-fade-in">About</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl animate-fade-in animation-delay-200">
            Professional high-fashion model with a decade of experience working with premier brands and publications worldwide.
          </p>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair mb-8">Biography</h2>
              <div className="space-y-6 text-charcoal/80">
                <p>
                  Beginning a modeling career at the age of 18, I quickly established myself within the industry, signing with Elite Model Management and booking my first major campaign within six months. Over the years, I&apos;ve had the privilege of working with some of the world&apos;s most prestigious fashion houses and publications.
                </p>
                <p>
                  My work spans editorial, runway, commercial campaigns, and brand ambassadorships. With a natural adaptability and strong work ethic, I bring professionalism and versatility to every project, allowing me to interpret and embody diverse creative visions.
                </p>
                <p>
                  Based in New York but constantly traveling for work between Milan, Paris, London, and Tokyo, I&apos;ve developed a global perspective and appreciation for different cultures and aesthetics. This international experience informs my approach to modeling and enables me to connect with diverse creative teams.
                </p>
                <p>
                  Beyond modeling, I&apos;m passionate about sustainable fashion and supporting emerging designers who prioritize ethical practices. I believe the fashion industry has tremendous power to influence positive change, and I&apos;m committed to using my platform to advocate for more inclusive, sustainable approaches.
                </p>
              </div>
              
              <div className="mt-12">
                <Button className="luxury-button flex items-center">
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Download Portfolio (PDF)
                </Button>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="relative">
                <img
                  src="/img/about/profile-1.jpg"
                  alt="Professional headshot"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 border border-gold/20 transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
              
              {/* Stats */}
              <div className="bg-cream p-8 space-y-6">
                <h3 className="text-2xl font-playfair mb-6">Stats & Measurements</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Height</h4>
                    <p className="text-lg">5'11" / 180 cm</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Weight</h4>
                    <p className="text-lg">128 lbs / 58 kg</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Hair Color</h4>
                    <p className="text-lg">Brown</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Eye Color</h4>
                    <p className="text-lg">Green</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Bust</h4>
                    <p className="text-lg">34" / 86 cm</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Waist</h4>
                    <p className="text-lg">24" / 61 cm</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Hips</h4>
                    <p className="text-lg">35" / 89 cm</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-charcoal/60 uppercase tracking-wider mb-1">Shoes</h4>
                    <p className="text-lg">US 9 / EU 40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-24 bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-center">Experience Timeline</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 transform md:translate-x-px"></div>
            
            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <div key={index} className="relative mb-16">
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gold transform -translate-x-1.5 md:-translate-x-2 mt-1.5"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                    <div className={index % 2 === 0 ? 'md:pl-12 md:pr-0 md:text-left' : ''}>
                      <span className="inline-flex items-center text-sm font-medium text-gold mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.year}
                      </span>
                      <h3 className="text-xl font-playfair mb-2">{item.title}</h3>
                      <p className="text-charcoal/80">{item.description}</p>
                      
                      {item.location && (
                        <div className="flex items-center mt-4 text-sm text-charcoal/60 md:justify-end">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      )}
                      
                      {item.achievement && (
                        <div className="flex items-center mt-2 text-sm font-medium md:justify-end">
                          <Award className="w-4 h-4 mr-1 text-gold" />
                          {item.achievement}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Timeline data
const timelineItems = [
  {
    year: '2024',
    title: 'Global Ambassador for Luxury Brand',
    description: 'Appointed as the worldwide face of a leading luxury fashion house\'s annual campaigns.',
    location: 'Worldwide',
    achievement: 'Featured on 12 international magazine covers'
  },
  {
    year: '2022-2023',
    title: 'Exclusive Contract with Major Fashion Label',
    description: 'Secured an exclusive modeling contract for runway and editorial campaigns.',
    location: 'Paris, France'
  },
  {
    year: '2020-2021',
    title: 'International Runway Circuit',
    description: 'Featured in over 40 runway shows for top designers across the major fashion weeks.',
    location: 'New York, Milan, Paris, London',
    achievement: 'Opened 5 major shows'
  },
  {
    year: '2018-2019',
    title: 'First Major Magazine Cover',
    description: 'Breakthrough career moment with cover and 12-page editorial in leading fashion publication.',
    location: 'Milan, Italy',
    achievement: 'Best Newcomer Award'
  },
  {
    year: '2016-2017',
    title: 'Agency Signing & First Campaign',
    description: 'Signed with elite modeling agency and landed first major advertising campaign.',
    location: 'New York, USA'
  }
];

export default About;
