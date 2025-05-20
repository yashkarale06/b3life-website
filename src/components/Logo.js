import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center">
    <img 
      src="/images/Main_Logo.png" 
      alt="B3Life Logo" 
      className="h-8 md:h-10" // Adjust the height as needed
    />
  </Link>
);

export default Logo;