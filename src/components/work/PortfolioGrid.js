// components/work/PortfolioGrid.js
import React, { useState } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import SectionTitle from '../shared/SectionTitle';

// Placeholder portfolio items - replace with actual case studies
const portfolioItems = [
  {
    id: 1,
    title: "Pharma Brand Launch Campaign",
    category: "Branding",
    image: "https://via.placeholder.com/600x400",
    description: "Complete brand identity and launch strategy for a new pharmaceutical product."
  },
  {
    id: 2,
    title: "Medical Conference Experience",
    category: "Events",
    image: "https://via.placeholder.com/600x400",
    description: "End-to-end planning and execution of an international medical symposium."
  },
  {
    id: 3,
    title: "Healthcare App Development",
    category: "Technology",
    image: "https://via.placeholder.com/600x400",
    description: "User-friendly mobile application for patient education and medication adherence."
  },
  {
    id: 4,
    title: "Medical Product Explainer Video",
    category: "Films",
    image: "https://via.placeholder.com/600x400",
    description: "Engaging animated video explaining complex medical device functionality."
  },
  {
    id: 5,
    title: "Digital Marketing Campaign",
    category: "Digital",
    image: "https://via.placeholder.com/600x400",
    description: "Multi-channel digital strategy that increased brand awareness by 45%."
  },
  {
    id: 6,
    title: "VR Medical Training Module",
    category: "Technology",
    image: "https://via.placeholder.com/600x400",
    description: "Immersive virtual reality experience for physician education."
  }
];

const categories = ["All", "Branding", "Digital", "Events", "Films", "Technology"];

const PortfolioItem = ({ item, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <span className="text-sm font-medium text-teal-600 mb-2 block">{item.category}</span>
          <h3 className="text-xl font-bold text-purple-700 mb-3">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore our work across various healthcare and wellness brands"
        />
        
        <div 
          ref={ref}
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;