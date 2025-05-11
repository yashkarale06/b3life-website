import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const WebcastingPage = () => {
  const serviceData = {
    title: "Live Webcasting",
    intro: "Live Streaming, No Limits. Got an event? We got you covered.",
    highlights: [
      "From seminars to town halls, we stream it all with zero lag.",
      "Top-tier tech, smooth experience, and real-time engagement.",
      "We provide professional webcasting services that connect you with your audience, wherever they are."
    ],
    cta: "Let's take your event global with professional webcasting!",
    subservices: [
      {
        id: "webcast",
        title: "Best Live Webcasting & Streaming Services in India",
        description: "One-Way, All the Way. Webcasts = one-way info drops. Perfect for product demos, tutorials, or any time your brand needs to speak, and your audience just needs to watch and absorb. We make it crisp, clean, and click-worthy.",
        cta: "Let's broadcast your event to a global audience."
      },
      {
        id: "webinar",
        title: "Webinars - Two-Way Conferences - Over the Web",
        description: "Talk Back Time. This one's not just a webcast—it's a full-on convo (aka webinar). We make two-way interactions smooth so your audience can ask, react, and engage in real-time. Perfect for Q&A sessions, workshops, or when connection > broadcast.",
        cta: "Let's create interactive webinars that engage your audience."
      },
      {
        id: "social-streaming",
        title: "Facebook Live Streaming for - Maximum Social Interactions",
        description: "Go Live, Go Viral. Streaming webinars on Facebook Live is the move! No fancy software needed—just real-time reach, comments, and instant interaction. It's the fastest way to hit your audience where they already hang out.",
        cta: "Let's connect with your audience through social media livestreaming."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="Professional webcasting services that connect you with your audience, wherever they are."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default WebcastingPage;