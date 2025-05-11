import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/shared/PageHeader';
import PortfolioGrid from '../components/work/PortfolioGrid';
import ClientsSection from '../components/work/ClientsSection';
import ContactCTA from '../components/shared/ContactCTA';

const WorkPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Work" 
        subtitle="See how we've helped healthcare brands stand out with impactful strategies and creative solutions."
      />
      <PortfolioGrid />
      <ClientsSection />
      <ContactCTA />
    </Layout>
  );
};

export default WorkPage;
