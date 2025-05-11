// components/about/TeamSection.js
import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import SectionTitle from '../shared/SectionTitle';

// This is a placeholder component - you'll need to add actual team member data
const TeamSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Meet Our Team" 
          subtitle="The creative minds and strategic thinkers behind B3Life"
        />
        
        <div 
          ref={ref}
          className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team information is coming soon! Contact us to learn more about the talented professionals behind B3Life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;