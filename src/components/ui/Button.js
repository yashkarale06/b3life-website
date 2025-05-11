import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button - A reusable button component with various variants
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  as = 'button', 
  to, 
  href, 
  className = '',
  ...props 
}) => {
  // Define styles based on variant
  const variants = {
    primary: 'bg-purple-700 hover:bg-purple-800 text-white',
    secondary: 'bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700',
    text: 'bg-transparent text-purple-700 hover:text-purple-800 hover:underline'
  };

  // Define sizes
  const sizes = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };

  // Common classes
  const buttonClasses = `inline-block rounded-md font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`;

  // Render appropriate element based on 'as' prop
  if (as === 'link' && to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  } else if (as === 'a' && href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;