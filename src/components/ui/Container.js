import React from 'react';

/**
 * Container - A layout component for consistent container styling
 */
const Container = ({ 
  children, 
  size = 'default', 
  className = '',
  ...props 
}) => {
  // Define size classes
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  return (
    <div className={`container mx-auto px-4 md:px-6 ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;