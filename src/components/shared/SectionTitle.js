import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const SectionTitle = ({ title, subtitle, light = false }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-purple-700'}`}>{title}</h2>
      {subtitle && <p className={`text-lg ${light ? 'text-gray-100' : 'text-gray-700'}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;