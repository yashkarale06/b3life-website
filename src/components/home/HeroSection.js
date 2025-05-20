// components/home/HeroSection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

// TypewriterText component
const TypewriterText = ({ text, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsDone(true);
      // Hide cursor after a short delay when typing is complete
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 1500); // 1.5 seconds delay before hiding cursor
      
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className={`relative min-h-[3rem] ${className}`}>
      <span className="inline-block">{displayedText}</span>
      {showCursor && (
        <span 
          className={`inline-block w-1 h-6 bg-purple-700 ml-1 absolute ${isDone ? 'animate-pulse' : 'animate-blink'}`}
          style={{ top: '0.125rem' }}
        ></span>
      )}
    </div>
  );
};

// Animated background element from AboutHero
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

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // State to control when to start typing animations
  const [startTyping, setStartTyping] = useState(false);
  
  // Start typing after the section becomes visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 500); // Start typing 500ms after becoming visible
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={ref}
      className={`bg-white text-gray-800 min-h-screen flex items-center transition-opacity duration-1000 ease-out relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Add the animated background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {startTyping ? (
            <>
              <div className="mb-6 leading-tight">
                <TypewriterText 
                  text="Doing now, What you need next" 
                  speed={40} 
                  className="text-4xl md:text-6xl font-bold text-gray-800"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <TypewriterText 
                  text="We're not just an agency—we're the full-stack force behind brands that dare to be different." 
                  speed={20} 
                  className="text-xl md:text-2xl mb-10 text-gray-600"
                />
              </motion.div>
              <motion.div 
                className="flex flex-col md:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 0.5 }}
              >
                <Link 
                  to="/services" 
                  className="bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:opacity-90 px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-md"
                >
                  Our Services
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-md font-medium transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0">
                Placeholder
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-600 opacity-0">
                Placeholder
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 opacity-0">
                <Link to="/services" className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-8 py-3 rounded-md font-medium">
                  Our Services
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-md font-medium">
                  Get in Touch
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;