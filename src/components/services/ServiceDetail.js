import React from 'react';
import { Check } from 'lucide-react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import SectionTitle from '../shared/SectionTitle';

const SubserviceSection = ({ subservice, index }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      id={subservice.id}
      ref={ref}
      className={`py-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-2xl font-bold text-purple-700 mb-4">{subservice.title}</h3>
      <p className="text-gray-700 mb-6">{subservice.description}</p>
      {subservice.cta && (
        <p className="text-lg font-bold text-teal-600">{subservice.cta}</p>
      )}
    </div>
  );
};

const ServiceDetail = ({ serviceData }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={ref}
            className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-lg text-gray-700 mb-8">
              {serviceData.intro}
            </p>
            
            <ul className="space-y-4 mb-8">
              {serviceData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
                  <span className="text-gray-800">{highlight}</span>
                </li>
              ))}
            </ul>
            
            {serviceData.cta && (
              <p className="text-xl font-bold text-purple-700">
                {serviceData.cta}
              </p>
            )}
          </div>
          
          <div className="border-t border-gray-200 pt-12">
            <SectionTitle 
              title="Our Offerings" 
              subtitle="Explore our comprehensive branding and design services"
            />
            
            {serviceData.subservices.map((subservice, index) => (
              <SubserviceSection 
                key={subservice.id} 
                subservice={subservice} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;