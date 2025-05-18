import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLinks = ({ closeMenu }) => {
  // Simple flat navigation menu
  const mainNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },  ];
  
  return (
    <div className="py-4">
      {mainNavItems.map((item, index) => (
        <div key={index} className="border-b border-gray-100 py-3">
          <Link 
            to={item.path} 
            className="block text-lg font-medium text-gray-800 hover:text-purple-700"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileNavLinks