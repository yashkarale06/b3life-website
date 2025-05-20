import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Import your existing components
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Contact from './pages/ContactPage';
import Navbar from './components/Header';
import LogoSlideshow from './components/home/LogoSlideshow';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    // Set a timeout as a fallback in case the navigation in LogoSlideshow fails
    // This is shorter than before since we're also handling navigation in LogoSlideshow
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000); // Reduced from 10000ms to 8000ms as a fallback
    
    return () => clearTimeout(timer);
  }, []);
  
  // Page transition variants - simple fade animation
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3, // Faster transition
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2, // Even faster exit
      },
    },
  };
  
  return (
    <Router>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div key="slideshow">
            <LogoSlideshow />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;