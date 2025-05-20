// Enhanced HomePage.js using the new UI components
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import AnimatedCard from '../components/ui/AnimatedCard';
import AnimatedGrid from '../components/ui/AnimatedGrid';
import Section from '../components/ui/Section';
import AnimatedElement from '../components/ui/AnimatedElement';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <TargetAudienceSection />
      <ContactCTA />
    </Layout>
  );
};

// Keep the rest of your components (TargetAudienceSection, ContactCTA, etc.)
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