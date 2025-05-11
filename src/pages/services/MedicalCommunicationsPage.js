// pages/services/MedicalCommunicationsPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const MedicalCommunicationsPage = () => {
  const serviceData = {
    title: "Medical Communications",
    intro: "Healthcare Communication Excellence at B3Life. We bridge the gap between pharmaceuticals, physicians, and patients.",
    highlights: [
      "With our team of doctors, pharmacists, and medical writers, we deliver top-tier medical information tools.",
      "We excel in creating comprehensive educational content for internal and external audiences globally.",
      "Our expertise in advisory board panels and the introduction of new therapies ensures impactful and informed healthcare communication."
    ],
    cta: "Let's create clear, effective medical communications for your brand.",
    subservices: [
      {
        id: "medical-writing",
        title: "Medical Writing Services -- Medical Publications & Communications",
        description: "Simplifying Medical Communication at B3Life. We transform complex medical information into clear, engaging content. Combining our deep medical knowledge with creative strategies, we help your brand resonate with both doctors and patients through authentic medical messaging. Our team of experts ensures every piece of content conveys the right message effectively.",
        cta: "Let's transform complex medical information into clear, engaging content."
      },
      {
        id: "physician-certification",
        title: "Physician Certification & Accreditation Services for Practicing Doctors",
        description: "Advanced Medical Education at B3Life. We empower healthcare professionals by providing credible certifications and educational programs. Through partnerships with leading international institutes and medical associations, we offer specialized courses and training in clinical medicine, reaching doctors and healthcare professionals across Europe and the U.S.",
        cta: "Partner with us to deliver advanced medical education."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="We bridge the gap between pharmaceuticals, physicians, and patients with expert medical communication."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default MedicalCommunicationsPage;