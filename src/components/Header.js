import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileNavLinks from './MobileNavLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-md py-2' : 'bg-gray-800 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Link to="/contact" className="bg-purple-700 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-all transform hover:scale-105">
            Contact Us
          </Link>
        </nav>
        
        <button className="md:hidden text-purple-700 hover:text-teal-600" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button onClick={toggleMenu} className="text-purple-700 hover:text-teal-600">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-xl">
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            <Link 
              to="/contact" 
              className="bg-purple-700 hover:bg-teal-600 text-white px-6 py-3 rounded-md w-full mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;