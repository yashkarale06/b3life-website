// pages/services/FilmsPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const FilmsPage = () => {
  const serviceData = {
    title: "Films & Jingles",
    intro: "Stories That Stick. At B3Life, we turn your brand into a visual storyteller.",
    highlights: [
      "From award-winning films to engaging animations and catchy jingles, we bring your ideas to life — with impact.",
      "Whether it's a corporate film, motivational video, or a catchy jingle, we make sure your audience feels it.",
      "Our experienced team handles everything from scriptwriting to post-production."
    ],
    cta: "Let's create compelling visual stories for your brand.",
    subservices: [
      {
        id: "corporate-videos",
        title: "Corporate Video Production & Film Making",
        description: "Corporate Videos That Hit the Mark. At B3Life, we make corporate videos that work. From concept to script, production, and editing — we've got the skills and experience to deliver videos that elevate your brand, anywhere in India.",
        cta: "Ready to elevate your brand with professional corporate videos?"
      },
      {
        id: "motivational-videos",
        title: "Motivational Videos to Inspire Your Audience",
        description: "Videos That Inspire Action. At B3Life, we create motivational videos that not only engage but inspire your audience to take action. With a sharp, passionate approach, we craft videos that deliver results and spark change.",
        cta: "Let's create motivational content that moves your audience."
      },
      {
        id: "explainer-videos",
        title: "Explainer Videos - Reaching & Connecting with More Customers",
        description: "Animated Videos That Speak Volumes. At B3Life, we create animated explainer videos that boost your brand's credibility and set you apart from the competition. Whether it's healthcare or FMCG, we craft stories that fit your brand voice and drive maximum ROI.",
        cta: "Ready to explain complex concepts in an engaging way?"
      },
      {
        id: "testimonial-videos",
        title: "Testimonial Videos -- Customer Testimonials for Brand Credibility",
        description: "Testimonial Videos That Build Trust. At B3Life, we turn customer testimonials into powerful stories that boost brand credibility and trust. With expert branding, storytelling, and editing, we create videos that engage and drive ROI, perfect for your website or social pages.",
        cta: "Let's showcase your customer success stories."
      },
      {
        id: "jingles",
        title: "Jingle & Anthem Writing Services for Video Production",
        description: "Songs & Jingles That Amplify Your Brand. At B3Life, we create original songs and jingles that elevate your brand. From motivational anthems to catchy ad jingles, we craft tunes that energize your marketing and inspire your audience.",
        cta: "Ready to give your brand a signature sound?"
      },
      {
        id: "case-study-videos",
        title: "Top-Quality Case Study Films & Audio Visuals",
        description: "Case Study Videos That Build Strong Partnerships. At B3Life, we go beyond simple case studies. We collaborate with you from start to finish, using research-driven creativity to create impactful videos that speak directly to your audience and achieve your goals.",
        cta: "Let's showcase your success stories through compelling case studies."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="We turn your brand into a visual storyteller with films and jingles that resonate with your audience."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default FilmsPage;