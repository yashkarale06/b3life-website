import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import SectionTitle from '../shared/SectionTitle';

const ServiceCategory = ({ title, services, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 pb-2 border-b-2 border-gray-200">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link 
            key={index} 
            to={service.path}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-3">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <div className="flex items-center text-teal-600 font-medium">
              Learn more <ChevronRight size={18} className="ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ServicesList = () => {
  const serviceCategories = [
    {
      title: "Branding & Design",
      services: [
        {
          title: "Brand Identity",
          description: "Crafting a brand identity that actually slaps. We create full-on brand personas with major main character energy.",
          path: "/services/branding#brand-identity"
        },
        {
          title: "Brand Strategy",
          description: "Lost in the crowd? Let's make your brand unmissable with clear messaging, laser-sharp positioning, and campaigns that convert.",
          path: "/services/branding#brand-strategy"
        }
      ]
    },
    {
      title: "Digital Marketing",
      services: [
        {
          title: "Search Engine Optimization",
          description: "SEO That Gets You Found. Our SEO team's mission is to get your site ranking high, driving traffic, and pulling in leads.",
          path: "/services/digital-marketing#seo"
        },
        {
          title: "App & Website Development",
          description: "We build custom apps with a focus on smooth UX, cost-efficiency, and top-tier performance.",
          path: "/services/digital-marketing#app-development"
        },
        {
          title: "Social Media Optimization",
          description: "Your Brand, Trending Everywhere. We turn scrolls into sales with smart social media strategies.",
          path: "/services/digital-marketing#social-media"
        },
        {
          title: "Digital & Content Strategy",
          description: "We craft digital solutions that align with your brand goals and amplify your online presence.",
          path: "/services/digital-marketing#content-strategy"
        },
        {
          title: "Social Listening",
          description: "We track, analyse, and respond to what people are saying about your brand online.",
          path: "/services/digital-marketing#social-listening"
        },
        {
          title: "Online Reputation Management",
          description: "We protect your brand's online rep, making sure the internet sees the best version of you.",
          path: "/services/digital-marketing#orm"
        }
      ]
    },
    {
      title: "Events & Exhibitions",
      services: [
        {
          title: "Corporate Event Management",
          description: "We're your one-stop crew for next-level corporate events — from killer concepts to smooth execution.",
          path: "/services/events#corporate-events"
        },
        {
          title: "Exhibitions & Trade Shows",
          description: "We create custom-built exhibition experiences that turn heads and spark real connections.",
          path: "/services/events#exhibitions"
        },
        {
          title: "Conferences & Symposiums",
          description: "We partner with global leaders to create impactful medical conferences and symposia.",
          path: "/services/events#conferences"
        },
        {
          title: "Product Launches",
          description: "We give your product the spotlight it deserves with visually stunning and perfectly on point launches.",
          path: "/services/events#product-launches"
        },
        {
          title: "Award Shows & Special Events",
          description: "We create award shows, lifestyle events, and special occasions that leave your guests speechless.",
          path: "/services/events#award-shows"
        }
      ]
    },
    {
      title: "Films & Jingles",
      services: [
        {
          title: "Corporate Video Production",
          description: "We make corporate videos that work. From concept to script, production, and editing.",
          path: "/services/films#corporate-videos"
        },
        {
          title: "Motivational Videos",
          description: "We create motivational videos that not only engage but inspire your audience to take action.",
          path: "/services/films#motivational-videos"
        },
        {
          title: "Explainer Videos",
          description: "We create animated explainer videos that boost your brand's credibility and set you apart from the competition.",
          path: "/services/films#explainer-videos"
        },
        {
          title: "Testimonial Videos",
          description: "We turn customer testimonials into powerful stories that boost brand credibility and trust.",
          path: "/services/films#testimonial-videos"
        },
        {
          title: "Jingle & Anthem Writing",
          description: "We create original songs and jingles that elevate your brand. From motivational anthems to catchy ad jingles.",
          path: "/services/films#jingles"
        }
      ]
    },
    {
      title: "Technology",
      services: [
        {
          title: "Event Technology",
          description: "We create interactive, concept-driven tech solutions for events that enhance the experience.",
          path: "/services/technology#event-tech"
        },
        {
          title: "Gamification",
          description: "We integrate game mechanics into your marketing campaigns and events to boost brand awareness.",
          path: "/services/technology#gamification"
        },
        {
          title: "Augmented & Virtual Reality",
          description: "We craft innovative virtual and augmented reality experiences that transport your customers beyond their reality.",
          path: "/services/technology#ar-vr"
        },
        {
          title: "Sensor-Based Technology",
          description: "We create engaging sensor-based activities, from pick-to-play options to projection touchscreen walls.",
          path: "/services/technology#sensor-tech"
        },
        {
          title: "Holographic Technology",
          description: "We use cutting-edge holographic technology to deliver ultra-realistic holograms and displays.",
          path: "/services/technology#holographic-tech"
        }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Comprehensive Services for Healthcare Brands" 
          subtitle="From strategic branding to cutting-edge technology, we deliver end-to-end solutions that make healthcare brands shine."
        />
        
        {serviceCategories.map((category, index) => (
          <ServiceCategory 
            key={index}
            title={category.title}
            services={category.services}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;