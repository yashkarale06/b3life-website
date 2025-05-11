// components/home/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      className={`bg-gradient-to-r from-purple-700 to-teal-600 text-white min-h-screen flex items-center transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Doing now, What you need next
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100">
            We're not just an agency—we're the full-stack force behind brands that dare to be different.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-md font-medium transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;