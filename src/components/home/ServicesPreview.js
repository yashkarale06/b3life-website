// components/home/ServicesPreview.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const ServicesPreview = () => {
  const services = [
    {
      title: "Branding & Design",
      description: "We don't just build brands — we bring them to life. Like your bold best friend who knows how to dress, talk, and steal the spotlight.",
      link: "/services/branding"
    },
    {
      title: "Digital Marketing",
      description: "We blend creativity, strategy, and smart data to make your brand pop in the digital space. From content to videos to emails and apps.",
      link: "/services/digital-marketing"
    },
    {
      title: "Events & Exhibitions",
      description: "From med conferences to epic product launches — B3Life does it all. We plan, design, and run high-impact events.",
      link: "/services/events"
    },
    {
      title: "Films & Jingles",
      description: "At B3Life, we turn your brand into a visual storyteller. From award-winning films to engaging animations and catchy jingles.",
      link: "/services/films"
    },
    {
      title: "Technology",
      description: "We fuse customer-first thinking with the latest tech to make your brand a leader. From facial recognition to holographic displays.",
      link: "/services/technology"
    },
    {
      title: "Medical Communications",
      description: "We bridge the gap between pharmaceuticals, physicians, and patients. With our team of doctors, pharmacists, and medical writers.",
      link: "/services/medical-communications"
    }
  ];

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            From logo to launch, app to anthem, and booth to broadcast—B3Life brings strategy, soul, and swagger to everything healthcare, wellness, and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105"
          >
            View All Services <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;