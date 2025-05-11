// pages/services/TechnologyPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const TechnologyPage = () => {
  const serviceData = {
    title: "Technology",
    intro: "Revolutionize Your Brand with Cutting-Edge Tech. At B3Life, we fuse customer-first thinking with the latest tech to make your brand a leader.",
    highlights: [
      "Whether it's facial recognition or holographic displays, we're your go-to for all tech needs.",
      "With a team of experts, we'll help you lead the charge in interactive, high-tech marketing strategies.",
      "We create engaging, innovative technology solutions that elevate your marketing and events."
    ],
    cta: "Ready to elevate your next campaign with innovative tech? We've got you covered.",
    subservices: [
      {
        id: "event-tech",
        title: "Event Technology - Concept-Based Tech Services for Participants",
        description: "Event Tech Services for Seamless Experiences. At B3Life, we create interactive, concept-driven tech solutions for events. From touch-enabled flipbooks and kiosks to apps for attendee testimonials, we design tech that enhances conferences, exhibitions, award shows, and meetings.",
        cta: "Elevate your event experience with our innovative tech services."
      },
      {
        id: "gamification",
        title: "Gamification to Make You a Frontrunner in The World of Technology",
        description: "Gamification for Enhanced Engagement. At B3Life, we integrate game mechanics into your marketing campaigns and events to boost brand awareness, drive participation, and increase product recall. From interactive surveys and MCQ quizzes to concept-based games, we enhance customer engagement and provide detailed analytics for all gamification projects.",
        cta: "Ready to gamify your brand experience?"
      },
      {
        id: "ar-vr",
        title: "Augmented Reality & Virtual Reality Services in India",
        description: "Immersive Reality Experiences. At B3Life, we craft innovative virtual and augmented reality experiences that transport your customers beyond their reality. From branded VR content and games to AR videos for events, we help you engage audiences with immersive, cutting-edge technology.",
        cta: "Let's create an immersive reality experience for your brand."
      },
      {
        id: "sensor-tech",
        title: "Sensor-Based Technology & Activities for Marketing",
        description: "Sensor-Based Interactive Experiences. At B3Life, we create engaging sensor-based activities, from pick-to-play options to projection touchscreen walls and body movement games. We bring your brand to life with interactive, technology-driven experiences for events and marketing.",
        cta: "Ready to engage your audience with interactive experiences?"
      },
      {
        id: "holographic-tech",
        title: "Holographic Technology to Engage Your Target Audience",
        description: "Holographic Experiences for Maximum Impact. At B3Life, we use cutting-edge holographic technology to deliver ultra-realistic holograms and holographic displays. From life-size stage projections to interactive hypeboxes for product demos, we create unforgettable experiences that captivate your audience.",
        cta: "Let's create a holographic experience that wows your audience."
      },
      {
        id: "photobooths",
        title: "Photobooths to Take Event Engagement to the Next Level",
        description: "Interactive Photobooths for Unforgettable Moments. At B3Life, we create engaging photobooths that elevate your event. From traditional booths to chroma shoots with live or Photoshop options, AR-based photobooths, and 360-degree setups, we ensure your guests capture unique, memorable moments.",
        cta: "Add a memorable photo experience to your next event."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="Cutting-edge technology solutions that elevate your brand and create memorable experiences."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default TechnologyPage;