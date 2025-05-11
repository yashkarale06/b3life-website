import React from 'react';
import Container from './Container';

/**
 * Section - A layout component for consistent section styling
 */
const Section = ({ 
  children, 
  bg = 'white', 
  containerSize = 'default',
  className = '',
  containerClassName = '',
  ...props 
}) => {
  // Define background classes
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    purple: 'bg-purple-700 text-white',
    teal: 'bg-teal-600 text-white',
    gradient: 'bg-gradient-to-r from-purple-700 to-teal-600 text-white'
  };

  return (
    <section className={`py-20 ${backgrounds[bg]} ${className}`} {...props}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;