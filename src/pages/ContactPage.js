// pages/ContactPage.js
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';


const ContactPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's create something iconic together. Reach out to start the conversation."
      />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;