// Partial update - only changing the section padding
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="pt-8 pb-20 overflow-hidden w-full">
      <div className="w-full">
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-purple-700 mb-6 text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            What Makes Us Unmissable
          </motion.h2>
          
          <motion.div
            className="w-screen relative mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/About.jpg"
              alt="B3Life Team Collaboration"
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
          </motion.div>

          <div className="container mx-auto px-4">
            <motion.p 
              className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              We reimagine how healthcare brands show up—louder, smarter, and realer—across digital, physical, and experiential spaces. From logo to launch, app to anthem, and booth to broadcast—B3Life brings strategy, soul, and swagger to everything healthcare, wellness, and beyond.
            </motion.p>
            
            <motion.ul 
              className="space-y-4 mb-12 relative z-10"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.li 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-teal-600 mr-3 mt-1"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Check size={20} />
                </motion.span>
                <div>
                  <span className="text-gray-800 font-bold">Omni-channel = Our playground</span>
                  <p className="text-gray-700 mt-1">We seamlessly blend digital, physical, and experiential touchpoints to create cohesive brand experiences.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-teal-600 mr-3 mt-1"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Check size={20} />
                </motion.span>
                <div>
                  <span className="text-gray-800 font-bold">Built by strategists, hyped by creatives, powered by techies</span>
                  <p className="text-gray-700 mt-1">Our diverse team brings complementary skills to every project, ensuring well-rounded solutions.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-teal-600 mr-3 mt-1"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Check size={20} />
                </motion.span>
                <div>
                  <span className="text-gray-800 font-bold">We speak fluent 'doctor', 'digital', 'design' & 'data'</span>
                  <p className="text-gray-700 mt-1">Our deep understanding of healthcare paired with creative and technical expertise creates uniquely effective solutions.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-teal-600 mr-3 mt-1"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Check size={20} />
                </motion.span>
                <div>
                  <span className="text-gray-800 font-bold">Regulatory compliant, but never creatively compromised</span>
                  <p className="text-gray-700 mt-1">We navigate healthcare regulations while still delivering bold, innovative work that stands out.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.span 
                  className="text-teal-600 mr-3 mt-1"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Check size={20} />
                </motion.span>
                <div>
                  <span className="text-gray-800 font-bold">Execution? Impeccable. Energy? Unmatched.</span>
                  <p className="text-gray-700 mt-1">We bring enthusiasm and attention to detail to every project, ensuring flawless delivery.</p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;