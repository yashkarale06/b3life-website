// components/about/MissionVision.js
import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden"> {/* Increased padding */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold text-purple-700 mb-12 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Purpose
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 100, rotateX: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.2
                }
              }
            }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute -right-10 -top-10 w-40 h-40 bg-purple-100 rounded-full opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <h3 className="text-2xl font-bold text-purple-700 mb-6 relative z-10">Our Mission</h3>
            <p className="text-gray-700 relative z-10">
              To reimagine how healthcare brands show up—<strong>louder, smarter, and realer</strong>—across digital, physical, and experiential spaces.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 100, rotateX: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.2,
                  delay: 0.2
                }
              }
            }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-100 rounded-full opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 5
              }}
            />
            <h3 className="text-2xl font-bold text-purple-700 mb-6 relative z-10">Our Vision</h3>
            <p className="text-gray-700 relative z-10">
              To be the agency that transforms how healthcare brands connect with their audiences, making wellness more accessible, engaging, and human-centered.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;