// pages/services/EventsPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const EventsPage = () => {
  const serviceData = {
    title: "Events & Exhibitions",
    intro: "Events That Wow. From med conferences to epic product launches — B3Life does it all.",
    highlights: [
      "We plan, design, and run high-impact events that blend strategy, creativity, and tech.",
      "Whether it's CMEs, workshops, team meets, or brand activations — we handle everything from lights to logistics.",
      "Fast, flawless, and unforgettable experiences that elevate your brand."
    ],
    cta: "Ready to create an event experience that makes an impact?",
    subservices: [
      {
        id: "corporate-events",
        title: "End to End Corporate Event Management",
        description: "Corporate Events? We've Got You. At B3Life, we're your one-stop crew for next-level corporate events — from killer concepts to smooth execution. Themes, invites, reg—done. We set the vibe, so your ideas flow and your brand shines.",
        cta: "Let's create a corporate event that exceeds expectations."
      },
      {
        id: "exhibitions",
        title: "Exhibitions & Trade Shows That Wow Your Audience",
        description: "Exhibits That Speak Loud. At B3Life, our vibe is simple — \"Show that Matters.\" We create custom-built exhibition experiences that turn heads and spark real connections. From standout stall design to tech-powered engagement, we blend creativity + strategy to make your brand unmissable.",
        cta: "Ready to stand out at your next exhibition?"
      },
      {
        id: "conferences",
        title: "Conferences & Symposiums for The Pharma Domain",
        description: "Conferences That Connect. At B3Life, we partner with global leaders to create impactful medical conferences and symposia. We work closely with you to engage, educate, and deliver — all on time and within budget.",
        cta: "Let's create a medical conference that drives real engagement."
      },
      {
        id: "product-launches",
        title: "Product Launches to Springboard Your New Offerings",
        description: "Product Launches That Pop. At B3Life, we give your product the spotlight it deserves. Our team of creative pros designs and executes product launches that are visually stunning and perfectly on point. From event support to AV solutions — we've got it all covered.",
        cta: "Ready to launch your product with maximum impact?"
      },
      {
        id: "award-shows",
        title: "Award Shows & Special Events Planning & Production",
        description: "Events That Wow. At B3Life, we create award shows, lifestyle events, and special occasions that leave your guests speechless. With stunning design, tech, and live performances, we bring your vision to life and ensure every moment is unforgettable.",
        cta: "Let's create a memorable event experience together."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="High-impact events that blend strategy, creativity, and technology for unforgettable experiences."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default EventsPage;