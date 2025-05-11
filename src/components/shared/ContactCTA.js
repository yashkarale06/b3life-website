import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const ContactCTA = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gradient-to-r from-purple-700 to-teal-600 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Your Brand Unmissable?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's collaborate to create something iconic together. We're ready to bring strategy, creativity, and execution to your next project.
        </p>
        <Link 
          to="/contact" 
          className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105 inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;