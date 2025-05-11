// components/home/TargetAudienceSection.js
import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const AudienceCard = ({ title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <h3 className="text-xl font-bold text-purple-700 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Continuing from TargetAudienceSection.js
const TargetAudienceSection = () => {
  const audiences = [
    {
      title: "Pharma Marketers",
      description: "Big launch coming up? Campaigns piling up? We jump in, sync fast, and bring the fire, without slowing you down."
    },
    {
      title: "Pharma Startups & Scaleups",
      description: "No PMT? No problem. Whether you're a one-person army or starting from scratch, we become your full-stack marketing team—strategy, execution, and results, delivered."
    },
    {
      title: "Vocal Brands & Bold Founders",
      description: "You've got the passion—we package it into campaigns that speak loud and sell proud."
    },
    {
      title: "Disruptive Thinkers",
      description: "You hate boring. So do we. Let's build brands that turn heads, challenge norms, and trend for the right reasons."
    },
    {
      title: "Business Thrivers",
      description: "You want growth? We bring the roadmap, the team, and the firepower to fuel your next big leap."
    }
  ];

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Who We Work With</h2>
          <p className="text-lg text-gray-700">
            B3Life partners with brands that are ready to lead, not follow. Our clients range from pharma giants to bold startups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <AudienceCard
              key={index}
              title={audience.title}
              description={audience.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;