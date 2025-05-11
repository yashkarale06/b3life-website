import React from 'react';
import { Check } from 'lucide-react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const AboutContent = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-6">What Makes Us Unmissable</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            We reimagine how healthcare brands show up—louder, smarter, and realer—across digital, physical, and experiential spaces. From logo to launch, app to anthem, and booth to broadcast—B3Life brings strategy, soul, and swagger to everything healthcare, wellness, and beyond.
          </p>
          
          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
              <div>
                <span className="text-gray-800 font-bold">Omni-channel = Our playground</span>
                <p className="text-gray-700 mt-1">We seamlessly blend digital, physical, and experiential touchpoints to create cohesive brand experiences.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
              <div>
                <span className="text-gray-800 font-bold">Built by strategists, hyped by creatives, powered by techies</span>
                <p className="text-gray-700 mt-1">Our diverse team brings complementary skills to every project, ensuring well-rounded solutions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
              <div>
                <span className="text-gray-800 font-bold">We speak fluent 'doctor', 'digital', 'design' & 'data'</span>
                <p className="text-gray-700 mt-1">Our deep understanding of healthcare paired with creative and technical expertise creates uniquely effective solutions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
              <div>
                <span className="text-gray-800 font-bold">Regulatory compliant, but never creatively compromised</span>
                <p className="text-gray-700 mt-1">We navigate healthcare regulations while still delivering bold, innovative work that stands out.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 mt-1"><Check size={20} /></span>
              <div>
                <span className="text-gray-800 font-bold">Execution? Impeccable. Energy? Unmatched.</span>
                <p className="text-gray-700 mt-1">We bring enthusiasm and attention to detail to every project, ensuring flawless delivery.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;