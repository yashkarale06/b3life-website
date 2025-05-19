
// pages/AboutPage.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import MissionVision from '../components/about/MissionVision';
import ContactCTA from '../components/shared/ContactCTA';

const AboutPage = () => {
  return (
    <Layout>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <AboutHero />
          <div className="py-8"></div> {/* Added spacing */}
          <MissionVision /> {/* Moved right after AboutHero */}
          <div className="py-8"></div> {/* Added spacing */}
          <AboutContent />
          <ContactCTA />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default AboutPage;
