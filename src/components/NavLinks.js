import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navItems } from './navItems';

const NavLinks = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  return (
    <>
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => item.submenu && setActiveSubmenu(index)}
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          <Link
            to={item.path}
            className="text-white hover:text-teal-400 font-medium flex items-center transition-colors"
          >
            {item.label}
            {item.submenu && <ChevronDown size={16} className="ml-1" />}
          </Link>
          
          {item.submenu && activeSubmenu === index && (
            <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg py-2 z-10">
              {item.submenu.map((subitem, subindex) => (
                <Link
                  key={subindex}
                  to={subitem.path}
                  className="block px-4 py-2 text-sm text-white hover:text-teal-400 hover:bg-gray-700"
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;