import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const ServiceCard = ({ title, description, link, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-700 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
        >
          Learn more <ChevronRight size={18} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

