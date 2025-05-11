// pages/AboutPage.js
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/shared/PageHeader';
import AboutContent from '../components/about/AboutContent';
import MissionVision from '../components/about/MissionVision';
import TeamSection from '../components/about/TeamSection';
import ContactCTA from '../components/shared/ContactCTA';

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="About B3Life" 
        subtitle="We're not just an agency—we're the full-stack force behind brands that dare to be different."
      />
      <AboutContent />
      <MissionVision />
      <TeamSection />
      <ContactCTA />
    </Layout>
  );
};

export default AboutPage;