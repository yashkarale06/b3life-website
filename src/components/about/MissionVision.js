// components/about/MissionVision.js
import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const MissionVision = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Our Mission</h3>
            <p className="text-gray-700">
              To reimagine how healthcare brands show up—<strong>louder, smarter, and realer</strong>—across digital, physical, and experiential spaces.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Our Vision</h3>
            <p className="text-gray-700">
              To become the <strong>#1 creative engine</strong> for every health brand that wants to lead the change, not chase it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;