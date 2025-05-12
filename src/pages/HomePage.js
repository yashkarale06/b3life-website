// Enhanced HomePage.js using the new UI components
import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import AnimatedElement from '../components/ui/AnimatedElement';
import AnimatedCard from '../components/ui/AnimatedCard';
import AnimatedGrid from '../components/ui/AnimatedGrid';
import { Check, ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <TargetAudienceSection />
      <ContactCTA />
    </Layout>
  );
};

const HeroSection = () => {
  return (
    <Section bg="gradient" className="min-h-screen flex items-center">
      <AnimatedElement animation="fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={1} color="white" className="mb-6 leading-tight">
            Doing now, What you need next
          </Heading>
          <p className="text-xl md:text-2xl mb-10 text-gray-100">
            We're not just an agency—we're the full-stack force behind brands that dare to be different.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button as="link" to="/services" variant="primary" size="lg" className="transform hover:scale-105">
              Our Services
            </Button>
            <Button as="link" to="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </AnimatedElement>
    </Section>
  );
};

const AboutPreview = () => {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedElement animation="slide-in-left">
          <div>
            <Heading level={2} color="purple" className="mb-6">
              What Makes Us Unmissable
            </Heading>
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
            
            <Button as="link" to="/about" variant="text" className="inline-flex items-center mt-8">
              Learn more about us <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-in-right" delay={0.2}>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <Heading level={3} color="purple" className="mb-6">
              Our Mission & Vision
            </Heading>
            
            <div className="mb-8">
              <Heading level={4} color="dark" className="mb-3">
                Mission
              </Heading>
              <p className="text-gray-700">
                To reimagine how healthcare brands show up—<strong>louder, smarter, and realer</strong>—across digital, physical, and experiential spaces.
              </p>
            </div>
            
            <div>
              <Heading level={4} color="dark" className="mb-3">
                Vision
              </Heading>
              <p className="text-gray-700">
                To become the <strong>#1 creative engine</strong> for every health brand that wants to lead the change, not chase it.
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
};

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

  return (
    <Section>
      <AnimatedElement animation="slide-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading level={2} color="purple" className="mb-4">
            Our Services
          </Heading>
          <p className="text-lg text-gray-700">
            From logo to launch, app to anthem, and booth to broadcast—B3Life brings strategy, soul, and swagger to everything healthcare, wellness, and beyond.
          </p>
        </div>
      </AnimatedElement>
      
      <AnimatedGrid columns={{ default: 1, md: 2, lg: 3 }} gap={8}>
        {services.map((service, index) => (
          <AnimatedCard
            key={index}
            title={service.title}
            content={<p>{service.description}</p>}
            footer={
              <Button as="link" to={service.link} variant="text" className="inline-flex items-center text-teal-600">
                Learn more <ChevronRight size={18} className="ml-1" />
              </Button>
            }
          />
        ))}
      </AnimatedGrid>
      
      <div className="text-center mt-12">
        <AnimatedElement animation="slide-up" delay={0.6}>
          <Button as="link" to="/services" variant="primary" size="lg" className="transform hover:scale-105 inline-flex items-center">
            View All Services <ChevronRight size={18} className="ml-2" />
          </Button>
        </AnimatedElement>
      </div>
    </Section>
  );
};

const TargetAudienceSection = () => {
  const audiences = [
    {
      title: "Pharma Marketers",
      description: "Big launch coming up? Campaigns piling up? We jump in, sync fast, and bring the fire, without slowing you down."
    },
    {
      title: "Pharma Startups & Scaleups",
      description: "No PMT? No problem. Whether you're a one-person army or starting from scratch, we become your full-stack marketing team—strategy, execution, and results, delivered."
    },
    {
      title: "Vocal Brands & Bold Founders",
      description: "You've got the passion—we package it into campaigns that speak loud and sell proud."
    },
    {
      title: "Disruptive Thinkers",
      description: "You hate boring. So do we. Let's build brands that turn heads, challenge norms, and trend for the right reasons."
    },
    {
      title: "Business Thrivers",
      description: "You want growth? We bring the roadmap, the team, and the firepower to fuel your next big leap."
    }
  ];

  return (
    <Section bg="light">
      <AnimatedElement animation="slide-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading level={2} color="purple" className="mb-4">
            Who We Work With
          </Heading>
          <p className="text-lg text-gray-700">
            B3Life partners with brands that are ready to lead, not follow. Our clients range from pharma giants to bold startups.
          </p>
        </div>
      </AnimatedElement>
      
      <AnimatedGrid columns={{ default: 1, md: 2, lg: 3 }} gap={6}>
        {audiences.map((audience, index) => (
          <AnimatedCard
            key={index}
            title={audience.title}
            content={<p>{audience.description}</p>}
          />
        ))}
      </AnimatedGrid>
    </Section>
  );
};

const ContactCTA = () => {
  return (
    <Section bg="gradient">
      <AnimatedElement animation="slide-up">
        <div className="text-center">
          <Heading level={2} color="white" className="mb-6">
            Ready to Make Your Brand Unmissable?
          </Heading>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something iconic together. We're ready to bring strategy, creativity, and execution to your next project.
          </p>
          <Button as="link" to="/contact" variant="primary" size="lg" className="bg-white text-purple-700 hover:bg-gray-100 transform hover:scale-105">
            Get in Touch
          </Button>
        </div>
      </AnimatedElement>
    </Section>
  );
};

export default HomePage;