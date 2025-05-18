// pages/AboutPage.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import ContactCTA from '../components/shared/ContactCTA';
import { Check, ArrowRight } from 'lucide-react';

// Modern hero section with typewriter effect and image
const ModernHero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const words = ['Different', 'Bold', 'Strategic', 'Creative', 'Innovative'];
  
  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      // If deleting, remove the last character
      if (isDeleting) {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        // If typing, add the next character
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }
      
      // If word is complete, start deleting after a pause
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
      
      // If word is deleted, move to next word
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words]);
  
  // Animation for the image
  const imageControls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await imageControls.start({ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: "easeOut" } 
      });
      
      // Subtle floating animation
      imageControls.start({
        y: [0, -10, 0],
        transition: { 
          duration: 5, 
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      });
    };
    
    sequence();
  }, [imageControls]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              We're Not Just An Agency
            </h1>
            
            <div className="flex items-baseline mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mr-3">
                We're
              </h2>
              <div className="h-12 overflow-hidden">
                <span className="text-3xl md:text-4xl font-bold text-teal-600 block">
                  {currentText}
                  <span className="inline-block w-1 h-10 bg-teal-600 ml-1 animate-pulse"></span>
                </span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We're the full-stack force behind brands that dare to be different, bringing strategy, soul, and swagger to everything healthcare and wellness.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:bg-purple-800"
            >
              Our Services <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={imageControls}
            className="relative w-full md:w-2/5"
          >
            {/* Abstract 3D shape representation */}
            <div className="relative w-full aspect-square">
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-700/20 to-teal-500/20 flex items-center justify-center"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-700/30 to-teal-500/30 flex items-center justify-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-700 to-teal-500 shadow-lg flex items-center justify-center text-4xl font-bold text-white">
                    B3
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ x: -20, y: -20 }}
                animate={{ 
                  x: [-20, 0, -20], 
                  y: [-20, -40, -20],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
                className="absolute top-0 left-10 w-16 h-16 bg-purple-700 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                style={{ transform: "rotate(-10deg)" }}
              >
                Brand
              </motion.div>
              
              <motion.div
                initial={{ x: 30, y: 40 }}
                animate={{ 
                  x: [30, 50, 30], 
                  y: [40, 20, 40],
                  rotate: [0, -8, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
                className="absolute bottom-10 right-5 w-16 h-16 bg-teal-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                style={{ transform: "rotate(10deg)" }}
              >
                Design
              </motion.div>
              
              <motion.div
                initial={{ x: 40, y: -30 }}
                animate={{ 
                  x: [40, 20, 40], 
                  y: [-30, -10, -30],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
                className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                style={{ transform: "rotate(5deg)" }}
              >
                Digital
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Mission & Vision with 3D Effect and Animations
const AnimatedMissionVision = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-6"
          >
            Our Mission & Vision
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-700"
          >
            Guided by clear purpose, driven by ambitious goals
          </motion.p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-700 opacity-70"></div>
            <div className="absolute top-0 left-0 w-0 h-1 bg-purple-700 transition-all duration-1000 group-hover:w-full"></div>
            
            <div className="mb-6 flex items-center">
              <div className="w-16 h-16 bg-purple-700/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-700 text-2xl">M</span>
              </div>
              
              <h3 className="text-3xl font-bold text-purple-700">
                Our Mission
              </h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              To reimagine how healthcare brands show up—<strong>louder, smarter, and realer</strong>—across digital, physical, and experiential spaces.
            </p>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.05 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-purple-500 -z-10"
              style={{ filter: "blur(40px)" }}
            />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-600 opacity-70"></div>
            <div className="absolute top-0 left-0 w-0 h-1 bg-teal-600 transition-all duration-1000 group-hover:w-full"></div>
            
            <div className="mb-6 flex items-center">
              <div className="w-16 h-16 bg-teal-600/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-teal-600 text-2xl">V</span>
              </div>
              
              <h3 className="text-3xl font-bold text-teal-600">
                Our Vision
              </h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the <strong>#1 creative engine</strong> for every health brand that wants to lead the change, not chase it.
            </p>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.05 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-teal-500 -z-10"
              style={{ filter: "blur(40px)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced About Content with 3D Cards and Animations
const EnhancedAboutContent = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const highlights = [
    {
      title: "Omni-channel = Our playground",
      emoji: "🧠🎥💻🛍️",
      description: "We seamlessly blend digital, physical, and experiential touchpoints to create cohesive brand experiences."
    },
    {
      title: "Built by strategists, hyped by creatives, powered by techies",
      emoji: "✨",
      description: "Our diverse team brings complementary skills to every project, ensuring well-rounded solutions."
    },
    {
      title: "We speak fluent 'doctor', 'digital', 'design' & 'data'",
      emoji: "🔬",
      description: "Our deep understanding of healthcare paired with creative and technical expertise creates uniquely effective solutions."
    },
    {
      title: "Regulatory compliant, but never creatively compromised",
      emoji: "⚖️",
      description: "We navigate healthcare regulations while still delivering bold, innovative work that stands out."
    },
    {
      title: "Execution? Impeccable. Energy? Unmatched.",
      emoji: "⚡",
      description: "We bring enthusiasm and attention to detail to every project, ensuring flawless delivery."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">What Makes Us Unmissable</h2>
            
            <p className="text-xl text-gray-700">
              We reimagine how healthcare brands show up—louder, smarter, and realer—across digital, physical, and experiential spaces.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg group"
              >
                <div className="p-8 h-full flex flex-col relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-teal-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                  
                  <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    {highlight.emoji}
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <span className="text-teal-600 mr-3 mt-1 transition-transform duration-300 group-hover:scale-125">
                      <Check size={20} />
                    </span>
                    <h3 className="text-xl font-bold text-purple-700">
                      {highlight.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mt-2">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Modern Stats Section with Counting Animation
const StatsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);
  
  const stats = [
    { value: 100, label: 'Happy Clients', suffix: '+' },
    { value: 250, label: 'Projects Delivered', suffix: '+' },
    { value: 5, label: 'Years Experience', suffix: '+' },
    { value: 15, label: 'Team Members', suffix: '' }
  ];
  
  // Counting animation component
  const Counter = ({ value, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = value / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          setCount(Math.floor(start));
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          }
        }, 1000/60);
        
        return () => clearInterval(timer);
      }
    }, [inView, value, duration]);
    
    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8 }
                }
              }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-teal-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// The main About Page component
const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        <ModernHero />
        <AnimatedMissionVision />
        <EnhancedAboutContent />
        <StatsSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default AboutPage;