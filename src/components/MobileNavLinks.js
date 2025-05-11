// src/components/MobileNavLinks.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { navItems } from './navItems';

const MobileNavLinks = ({ closeMenu }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  
  return (
    <>
      {navItems.map((item, index) => (
        <div key={index} className="border-b border-gray-100 pb-4">
          {item.submenu ? (
            <>
              <button 
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                {item.label}
                {expandedItem === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              
              {expandedItem === index && (
                <div className="mt-3 pl-4 space-y-3">
                  {item.submenu.map((subitem, subindex) => (
                    <Link 
                      key={subindex} 
                      to={subitem.path}
                      className="block text-gray-600 hover:text-purple-700"
                      onClick={closeMenu}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link 
              to={item.path} 
              className="block font-medium"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default MobileNavLinks;