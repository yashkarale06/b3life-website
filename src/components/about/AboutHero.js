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
    <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 bg-white overflow-hidden relative"> 
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 lg:gap-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side content */}
          <motion.div 
            className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 font-serif tracking-normal"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <GradientText>About B3Life</GradientText>
            </motion.h1>
            <motion.div 
              className="text-xl sm:text-2xl text-gray-700 mb-8 sm:mb-10 mt-4 sm:mt-6 font-light min-h-[3rem] font-sans"
              variants={itemVariants}
            >
              <TypewriterText 
                text="We're not just an agency—we're the full-stack force behind brands that dare to be different." 
                speed={30}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-gray-600 mb-8 mx-auto font-light leading-relaxed text-base sm:text-lg max-w-2xl font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                From logo to launch, app to anthem, and booth to broadcast—B3Life brings strategy, soul, and swagger to everything healthcare, wellness, and beyond.
              </motion.p>
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-8 py-4 rounded-lg transition-all shadow-lg font-medium tracking-wide text-base sm:text-lg font-sans hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side image */}
          <motion.div 
            className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 relative flex justify-center items-center md:ml-auto"
            variants={itemVariants}
          >
            <motion.div 
              className="w-full relative z-10"
              whileHover={{ scale: 1.03, rotate: 1 }}
              whileTap={{ scale: 0.98, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.img 
                src="/images/About.jpg" 
                alt="B3Life Team" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[400px]" 
                initial={{ filter: "grayscale(20%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
                whileTap={{ filter: "grayscale(0%)" }}
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