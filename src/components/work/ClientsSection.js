// components/work/ClientsSection.js
import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import SectionTitle from '../shared/SectionTitle';

// Placeholder for client logos
const ClientsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Clients We've Worked With" 
          subtitle="Trusted by leading healthcare and wellness brands"
        />
        
        <div 
          ref={ref}
          className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Client logos coming soon! We've partnered with various healthcare and pharmaceutical companies to deliver impactful branding and marketing solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;