import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsDone(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="relative">
      <span className="inline-block">{displayedText}</span>
      <span 
        className={`inline-block w-1 h-6 bg-purple-700 ml-1 absolute ${isDone ? 'animate-pulse' : 'animate-blink'}`}
        style={{ top: '0.125rem' }}
      ></span>
    </div>
  );
};

const GradientText = ({ children, className }) => {
  return (
    <span className={`bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};

// Animated background element
const AnimatedBackground = () => {
  return (

<div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles - reduced for mobile */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-20 ${i % 2 === 0 ? 'bg-purple-300' : 'bg-teal-300'}`}
          style={{
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            scale: [1, Math.random() * 0.3 + 0.9, 1],
            rotate: [0, Math.random() * 90, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90" />
    </div>
  );
};

const AboutHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="pt-32 sm:pt-40 md:pt-56 pb-16 sm:pb-20 md:pb-24 bg-white overflow-hidden relative"> 
      {/* Enhanced background animations */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side content with enhanced animations */}
          <motion.div 
            className="w-full md:w-3/5 pr-0 md:pr-8 text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-sans tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }} // Added for mobile interaction
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <GradientText>About B3Life</GradientText>
            </motion.h1>
            <motion.div 
              className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 mt-4 sm:mt-8 font-light min-h-[3rem]"
              variants={itemVariants}
            >
              <TypewriterText 
                text="We're not just an agency—we're the full-stack force behind brands that dare to be different." 
                speed={30}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-gray-600 mb-6 max-w-xl mx-auto md:mx-0 font-light leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                From logo to launch, app to anthem, and booth to broadcast—B3Life brings strategy, soul, and swagger to everything healthcare, wellness, and beyond.
              </motion.p>
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all shadow-md font-medium tracking-wide text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }} // Faster transition for mobile
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side image with enhanced animations - moved up on mobile */}
          <motion.div 
            className="w-full sm:w-4/5 md:w-2/5 relative -mt-4 sm:mt-0 md:mt-0 flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-purple-100 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -z-10 top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-teal-100 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0],
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            {/* Image with touch effect for mobile */}
            <motion.div 
              className="w-full sm:w-4/5 relative z-10"
              whileHover={{ scale: 1.03, rotate: 1 }}
              whileTap={{ scale: 0.98, rotate: -1 }} // Added for mobile interaction
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.img 
                src="/images/About.jpg" 
                alt="B3Life Team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-56 sm:max-h-64 md:max-h-72" 
                initial={{ filter: "grayscale(20%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
                whileTap={{ filter: "grayscale(0%)" }} // Added for mobile interaction
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;