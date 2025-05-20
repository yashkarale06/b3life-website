import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LogoSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullLogo, setShowFullLogo] = useState(false);
  const navigate = useNavigate();
  
  // Array of logo letters
  const logoLetters = ['B', '3', 'L', 'I', 'F', 'E'];
  
  useEffect(() => {
    // If we haven't shown all letters yet
    if (currentSlide < logoLetters.length) {
      const timer = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 800); // Change letter every 800ms
      
      return () => clearTimeout(timer);
    } else if (currentSlide === logoLetters.length && !showFullLogo) {
      // After showing all letters, show the full logo
      const timer = setTimeout(() => {
        setShowFullLogo(true);
      }, 500);
      
      return () => clearTimeout(timer);
    } else if (showFullLogo) {
      // Auto-redirect after showing the full logo for 2.5 seconds
      const redirectTimer = setTimeout(() => {
        navigate('/home');
      }, 2500);
      
      return () => clearTimeout(redirectTimer);
    }
  }, [currentSlide, showFullLogo, logoLetters.length, navigate]);
  
  // Variants for the sliding animation
  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    },
    exit: { 
      x: 100, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  // Variants for the full logo animation
  const fullLogoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <motion.div 
      className="h-screen w-full flex items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0 }}
    >
      {!showFullLogo ? (
        // Individual letter slideshow
        <div className="relative h-96 w-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentSlide < logoLetters.length && (
              <motion.div
                key={currentSlide}
                className="absolute"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img 
                  src={`/images/${logoLetters[currentSlide]}.png`} 
                  alt={`B3LIFE Letter ${logoLetters[currentSlide]}`}
                  className="h-96 object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // Full logo without clickable content or text
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={fullLogoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <img 
            src="/images/logo/B3LIFE-full.png" 
            alt="B3LIFE Logo"
            className="h-48 md:h-64 object-contain"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default LogoSlideshow;