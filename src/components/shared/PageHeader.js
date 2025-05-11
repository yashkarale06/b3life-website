import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const PageHeader = ({ title, subtitle }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      className={`bg-gradient-to-r from-purple-700 to-teal-600 text-white py-20 md:py-32 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;