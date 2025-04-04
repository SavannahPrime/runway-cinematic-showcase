
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 animate-fade-in">Contact</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl animate-fade-in animation-delay-200">
            Interested in working together? Get in touch to discuss potential collaborations.
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-cream rounded-full">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-charcoal/70">contact@modelportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-cream rounded-full">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-charcoal/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-cream rounded-full">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-charcoal/70">New York, NY (Available for travel worldwide)</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cream rounded-full hover:bg-gold/10 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cream rounded-full hover:bg-gold/10 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cream rounded-full hover:bg-gold/10 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Location</h3>
                <div className="bg-cream h-[300px] flex items-center justify-center">
                  <p className="text-charcoal/50">Interactive Map Placeholder</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
