
// pages/ServicesPage.js
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/shared/PageHeader';
import ServicesList from '../components/services/ServicesList';
import ContactCTA from '../components/shared/ContactCTA';

const ServicesPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Services" 
        subtitle="From branding to technology, B3Life delivers end-to-end solutions for healthcare brands that want to stand out."
      />
      <ServicesList />
      <ContactCTA />
    </Layout>
  );
};

export default ServicesPage;