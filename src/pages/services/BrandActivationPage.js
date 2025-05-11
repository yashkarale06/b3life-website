// pages/services/BrandActivationPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const BrandActivationPage = () => {
  const serviceData = {
    title: "Brand Activation",
    intro: "Brand Activation at B3Life. We bring your brand to life through innovative brand activation strategies.",
    highlights: [
      "Using immersive experiences, bespoke kiosks, and eye-catching displays, we engage customers and create lasting connections.",
      "Our experiential marketing techniques, coupled with advanced technology, ensure your brand stands out and thrives.",
      "We create memorable brand experiences that drive engagement and conversions."
    ],
    cta: "Let's bring your brand to life with impactful activation strategies.",
    subservices: [
      {
        id: "in-store",
        title: "Creating Brand Experiences -- In Store Activations",
        description: "A brand logo is your brand's visual ID -- a text, symbol, or combo of both. It's the thing that makes your brand instantly recognizable and unforgettable. With B3Life, your logo is the vibe that sticks and makes a lasting impression.",
        cta: "Ready to create unforgettable in-store brand experiences?"
      },
      {
        id: "pos",
        title: "Promoting Your Best Products Via Point of Sale Merchandise",
        description: "Innovating POS Marketing for Your Brand. As your single point of contact from design to printing, B3Life is the best agency for your Point-Of-Sale marketing needs. Whether it's simple displays or interactive digital fixtures, we create the perfect POS merchandise to meet your sales and branding goals. Trusted by major brands across India, B3Life develops scalable, portable, and versatile point-of-purchase solutions tailored to your needs.",
        cta: "Let's create POS materials that drive sales and build your brand."
      },
      {
        id: "experiential",
        title: "Attracting the Attention of Your TG Through Experiential Marketing",
        description: "Experiential Marketing That Hits Different. We bring the brand to life with epic experiences at trade shows, stores, and events. From ideas to execution, B3Life's got your brand activation covered.",
        cta: "Ready to create memorable brand experiences?"
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="We bring your brand to life through innovative activation strategies and experiences."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default BrandActivationPage;