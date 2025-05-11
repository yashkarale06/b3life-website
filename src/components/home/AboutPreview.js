// components/home/AboutPreview.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const AboutPreview = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref} 
      className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">What Makes Us Unmissable</h2>
            <p className="text-lg text-gray-700 mb-8">
              We reimagine how healthcare brands show up—louder, smarter, and realer—across digital, physical, and experiential spaces.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
                <span className="text-gray-800"><strong>Omni-channel = Our playground</strong> 🧠🎥💻🛍️</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
                <span className="text-gray-800"><strong>Built by strategists, hyped by creatives, powered by techies</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
                <span className="text-gray-800"><strong>We speak fluent 'doctor', 'digital', 'design' & 'data'</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
                <span className="text-gray-800"><strong>Regulatory compliant, but never creatively compromised</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
                <span className="text-gray-800"><strong>Execution? Impeccable. Energy? Unmatched.</strong></span>
              </li>
            </ul>
            
            <Link 
              to="/about" 
              className="inline-flex items-center mt-8 text-purple-700 font-medium hover:text-purple-800 transition-colors"
            >
              Learn more about us <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Our Mission & Vision</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Mission</h4>
              <p className="text-gray-700">
                To reimagine how healthcare brands show up—<strong>louder, smarter, and realer</strong>—across digital, physical, and experiential spaces.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Vision</h4>
              <p className="text-gray-700">
                To become the <strong>#1 creative engine</strong> for every health brand that wants to lead the change, not chase it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;