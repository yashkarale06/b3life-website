// pages/services/PrintingPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const PrintingPage = () => {
  const serviceData = {
    title: "Printing Services",
    intro: "Printing That Brings Your Brand to Life. All your printing needs, from event backdrops to marketing collaterals, in one place.",
    highlights: [
      "With 20+ years of expertise, we deliver high-quality prints fast—LED boards, banners, brochures, and more!",
      "From design to production, we handle everything to ensure your brand looks its best in print.",
      "Our high-quality printing services bring your visual communications to life."
    ],
    cta: "Let us handle your printing needs with quality and speed.",
    subservices: [
      {
        id: "print-media",
        title: "Print Media Solutions - Quality Printing, Timely Delivery",
        description: "Print It Right, Every Time. Need it printed? We've got you! From banners to LED displays, we're here to bring your brand to life with fast, high-quality prints. Let's make it pop! ✨",
        cta: "Let's make your print materials pop with quality and impact."
      },
      {
        id: "digital-printing",
        title: "Digital Printing in Delhi -- Design & Print",
        description: "Big Prints, Big Impact. Need large-scale prints? We've got you covered! From indoor to outdoor, we bring your ideas to life with vibrant, high-quality prints. We handle everything from design to setup. Your vision, our execution.",
        cta: "Let's create impactful large-format prints for your brand."
      },
      {
        id: "large-scale",
        title: "Large Scale Printing for All Industries & Brands",
        description: "Experiential Marketing Done Right. We take brand experiences to the next level with trade shows, exhibitions, and more. From creative ideas to flawless execution, we bring your brand to life in public spaces, engaging customers like never before.",
        cta: "Ready to make a big impression with large-scale printing?"
      },
      {
        id: "wide-format",
        title: "Wide Format Printing Services for Marketing & Events",
        description: "Make a Big Impression with Large Format Printing. From canvas prints to billboards, we deliver distortion-free, high-quality prints that grab attention. With sharp details and durable materials, your brand stands out in every setting.",
        cta: "Let's create wide-format prints that make an impact."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="High-quality printing services that bring your brand to life across all media."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default PrintingPage;