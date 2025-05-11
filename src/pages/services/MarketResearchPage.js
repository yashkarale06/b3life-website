import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const MarketResearchPage = () => {
  const serviceData = {
    title: "Market Research",
    intro: "Insight-First, Always. At B3Life, every project kicks off with deep insight.",
    highlights: [
      "We dive into your brand, decode your challenges, and centre everything around your consumer.",
      "From brand discovery to research-driven strategy, we've got the tools (and brains) to help you win smartly and affordably.",
      "Our research provides the foundation for successful marketing strategies."
    ],
    cta: "Let's uncover insights that drive your business forward.",
    subservices: [
      {
        id: "market-access",
        title: "B3life -- Market Access Research Company in India",
        description: "Market Intel, The Smart Way. At B3Life, we break down complex market structures—India and beyond. From competitor deep dives to sizing, feasibility, and entry barriers, our research gives you the clarity to move fast and smart.",
        cta: "Let's uncover the market insights you need to succeed."
      },
      {
        id: "international-research",
        title: "International Market Research Services - Primary & Secondary Data Collection",
        description: "Custom Data, Real Impact. Need insights? We got you. From fresh surveys to digging into legit sources, B3Life collects real data that fuels smart business moves—for pharma and beyond.",
        cta: "Let's gather the data you need for informed business decisions."
      },
      {
        id: "risk-analysis",
        title: "Outsource Risk Analysis to B3Life - Top Market Research Agency",
        description: "Risk? Handled. 🚫⚠️ Before you drop that new product, B3Life scopes out all the risks—threats, challenges, the whole deal. With data-backed modeling and next-gen tools, we predict, prevent, and recommend moves that keep your launch smooth and stress-free.",
        cta: "Let's identify and mitigate risks before they impact your business."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="Data-driven insights that provide the foundation for successful marketing strategies."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default MarketResearchPage;