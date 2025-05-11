import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/shared/PageHeader';
import ServiceDetail from '../../components/services/ServiceDetail';
import ContactCTA from '../../components/shared/ContactCTA';

const BrandingServicePage = () => {
  const serviceData = {
    title: "Branding & Design",
    intro: "Got big ideas but can't seem to vibe with the right words? Or maybe your message is fire but it's just not hitting right. That's where we come in. We don't just build brands — we bring them to life. Like your bold best friend who knows how to dress, talk, and steal the spotlight, our brands have real personalities.",
    highlights: [
      "We give them a voice. A vibe. A vision.",
      "Whether it's defining their purpose, crafting scroll-stopping looks, or creating stories that connect on a deeper level — we make brands that mean something.",
      "Our process? Think evolution meets revolution. From napkin doodles to full-blown brand drops, we shape the idea until it turns heads."
    ],
    cta: "Wanna make noise, stand out, and start movements? Let's create something iconic together.",
    subservices: [
      {
        id: "brand-identity",
        title: "Brand Identity",
        description: "Crafting a brand identity that actually slaps? Yeah, that's no chill task. When you're dropping a new brand, product, or service, you need a vibe so strong it lives rent-free in people's minds. That's where we — B3Life — come in. We don't just design logos and pick pretty colors. We create full-on brand personas with major main character energy. From fonts that speak your mood, to color palettes that pop off the screen — we make sure your brand looks as powerful as it feels. The goal? Build a look that sticks, speaks your truth, and makes your audience say, \"This is SO me.\"",
        cta: "Ready to level up your brand game?"
      },
      {
        id: "brand-strategy",
        title: "Brand Strategy",
        description: "Lost in the crowd? Let's make your brand unmissable. Every brand needs a strong core — that's your brand strategy. It's not just about logos and taglines; it's the big idea that guides everything you do. At B3Life, we build bold brand strategies that actually work. We're talking clear messaging, laser-sharp positioning, and campaigns that convert. We dig deep — into your audience, competitors, and goals — then craft a plan that hits hard across all touchpoints: social, digital, print, events, you name it. Whether you're launching something new or leveling up your current brand, we help you show up strong, loud, and clear — everywhere.",
        cta: "Ready to elevate your brand strategy?"
      }
    ]
  };

  return (
    <Layout>
      <PageHeader 
        title={serviceData.title} 
        subtitle="We bring brands to life with personality, purpose, and memorable presence."
      />
      <ServiceDetail serviceData={serviceData} />
      <ContactCTA />
    </Layout>
  );
};

export default BrandingServicePage;