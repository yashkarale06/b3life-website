import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * AnimatedElement - A wrapper component that adds animation effects when elements come into view
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to be animated
 * @param {string} props.animation - Animation type: 'fade-in', 'slide-up', 'slide-in-left', 'slide-in-right'
 * @param {number} props.delay - Delay in seconds before animation starts
 * @param {number} props.duration - Duration of the animation in seconds
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedElement = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  duration = 0.7, 
  className = '',
  threshold = 0.1
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: threshold,
    triggerOnce: true
  });

  // Define animation classes
  const animations = {
    'fade-in': `transition-opacity duration-${duration * 1000} ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    'slide-up': `transition-all duration-${duration * 1000} ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
    'slide-in-left': `transition-all duration-${duration * 1000} ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`,
    'slide-in-right': `transition-all duration-${duration * 1000} ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
    'scale-up': `transition-all duration-${duration * 1000} ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
  };

  return (
    <div 
      ref={ref}
      className={`${animations[animation]} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;