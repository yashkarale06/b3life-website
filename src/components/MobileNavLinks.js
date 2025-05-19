import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { navItems } from './navItems';

const MobileNavLinks = ({ closeMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <>
      {navItems.map((item, index) => (
        <div key={index} className="py-2">
          {item.submenu ? (
            <>
              <button
                onClick={() => toggleSubmenu(index)}
                className="flex items-center justify-between w-full text-white hover:text-teal-400 font-medium"
              >
                <span>{item.label}</span>
                {openSubmenu === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              
              {openSubmenu === index && (
                <div className="mt-2 ml-4 space-y-2">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.path}
                      className="block text-white hover:text-teal-400 py-1"
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
              className="block text-white hover:text-teal-400 font-medium"
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