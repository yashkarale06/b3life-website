import React from 'react';

/**
 * Heading - A reusable heading component with consistent styling
 */
const Heading = ({ 
  children, 
  level = 2, 
  color = 'purple', 
  className = '',
  ...props 
}) => {
  // Define color classes
  const colors = {
    purple: 'text-purple-700',
    teal: 'text-teal-600',
    white: 'text-white',
    dark: 'text-gray-900'
  };

  // Define size classes based on heading level
  const sizes = {
    1: 'text-4xl md:text-5xl font-bold',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl font-bold',
    4: 'text-xl font-bold',
    5: 'text-lg font-semibold',
    6: 'text-base font-semibold'
  };

  const headingClasses = `${sizes[level]} ${colors[color]} ${className}`;

  // Render appropriate heading level
  switch (level) {
    case 1:
      return <h1 className={headingClasses} {...props}>{children}</h1>;
    case 2:
      return <h2 className={headingClasses} {...props}>{children}</h2>;
    case 3:
      return <h3 className={headingClasses} {...props}>{children}</h3>;
    case 4:
      return <h4 className={headingClasses} {...props}>{children}</h4>;
    case 5:
      return <h5 className={headingClasses} {...props}>{children}</h5>;
    case 6:
      return <h6 className={headingClasses} {...props}>{children}</h6>;
    default:
      return <h2 className={headingClasses} {...props}>{children}</h2>;
  }
};

export default Heading;