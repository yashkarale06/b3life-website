// components/ui/AnimatedCard.js - A reusable card component with animation
import React from 'react';
import AnimatedElement from './AnimatedElement';

/**
 * AnimatedCard - A card component with built-in animation
 */
const AnimatedCard = ({ 
  title, 
  subtitle, 
  content, 
  footer, 
  delay = 0, 
  className = '' 
}) => {
  return (
    <AnimatedElement animation="slide-up" delay={delay} className={className}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        {title && <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>}
        {subtitle && <p className="text-sm text-teal-600 mb-4">{subtitle}</p>}
        {content && <div className="text-gray-700 mb-4">{content}</div>}
        {footer && <div className="mt-auto">{footer}</div>}
      </div>
    </AnimatedElement>
  );
};

export default AnimatedCard;