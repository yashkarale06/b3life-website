// pages/services/DigitalMarketingPage.js
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const DigitalMarketingPage = () => {
  const serviceData = {
    title: "Digital Marketing",
    intro: "Your Brand. Our Digital Playground. Everyone's online — scrolling, clicking, swiping. That's exactly where your brand needs to be.",
    highlights: [
      "At B3Life, we blend creativity, strategy, and smart data to make your brand pop in the digital space.",
      "From content and videos to emails and apps — we craft campaigns that connect and convert.",
      "We work on three solid pillars: Research, Results-Driven Strategy, and Analytics That Matter"
    ],
    cta: "No noise, just impact. Let's build your online tribe and make your brand unmissable.",
    subservices: [
      {
        id: "seo",
        title: "Search Engine Optimization",
        description: "SEO That Gets You Found. Business thrives on strong strategies, and we've got the expertise to boost your website's organic reach. Our SEO team's mission? To get your site ranking high, driving traffic, and pulling in leads. We stay on top of the latest algorithms, tweaking your site with precision to ensure it hits all the right SEO marks. From keyword research to link building, we've got you covered.",
        cta: "Let B3Life power up your online presence and help you show up where it matters."
      },
      {
        id: "app-development",
        title: "App & Website Development",
        description: "Apps are the easiest way to connect with your audience, offering instant recognition of your product or service. At B3Life, we build custom apps with a focus on smooth UX, cost-efficiency, and top-tier performance. We also create websites that reflect your brand's personality. Our in-house team is skilled in everything from static and dynamic sites to e-commerce, CMS, UX design, and mobile apps.",
        cta: "Ready to level up your digital presence? Let's make your brand unforgettable."
      },
      {
        id: "social-media",
        title: "Social Media Optimization",
        description: "Your Brand, Trending Everywhere. Everyone's on social — and your brand should be too. At B3Life, we turn scrolls into sales with smart social media strategies. From podcasts and blogs to Instagram, LinkedIn, YouTube, and more — we create content that connects. Our crew of social pros, designers, and copywriters craft thumb-stopping campaigns that boost your brand and drive real results.",
        cta: "With solid SMO, we help you grow your online presence, build communities, and turn likes into leads."
      },
      {
        id: "content-strategy",
        title: "Digital & Content Strategy",
        description: "At B3Life, we craft digital solutions that align with your brand goals and amplify your online presence. Our team dives deep into your industry and competitors to build strategies that actually work. From scroll-stopping content to full-blown campaigns, we cover it all.",
        cta: "Because let's face it — content is king. And ours rules."
      },
      {
        id: "social-listening",
        title: "Social Listening",
        description: "We Hear What Your Audience Thinks. Social listening isn't just smart — it's powerful. At B3Life, we track, analyse, and respond to what people are saying about your brand online. From monitoring buzz to finding influencers and decoding your competitors — we turn insights into action.",
        cta: "Real talk, real results."
      },
      {
        id: "orm",
        title: "Online Reputation Management",
        description: "We Clean Up Your Digital Vibe. Bad press? Trolls? We've got your back. At B3Life, we protect your brand's online rep, making sure the internet sees the best version of you. Our ORM team monitors conversations, handles the heat, and keeps your brand shining.",
        cta: "More trust. More engagement. More business."
      },
      {
        id: "performance",
        title: "Performance Marketing",
        description: "Performance That Pays Off. At B3Life, we don't just run ads — we chase results. Performance marketing lets you pay only for what works. It's ROI-focused, fully trackable, and made to move the needle. From PPC to social media to search engine marketing — we build campaigns that drive real leads based on how your audience thinks and clicks.",
        cta: "Ready to see real results from your marketing spend?"
      },
      {
        id: "email",
        title: "Email Marketing",
        description: "Slide Into Inboxes — the Smart Way. Email still wins. At B3Life, we build email campaigns that actually get opened and clicked. From strategy to design, newsletters to automation — we help you build real, one-on-one connections that grow your customer base and boost loyalty.",
        cta: "Ready to make your emails work harder for your brand?"
      },
      {
        id: "influencer",
        title: "Influencer Marketing",
        description: "Influence That Hits Different. Influencers are today's storytellers — and we know how to pick the right ones. At B3Life, we match your brand with creators who vibe with your audience. From buzz to clicks to conversions, we make sure every campaign drives real impact and real returns.",
        cta: "Let's find the right voices for your brand."
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="We blend creativity, strategy, and smart data to make your brand pop in the digital space."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default DigitalMarketingPage;