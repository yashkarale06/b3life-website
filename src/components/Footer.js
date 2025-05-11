import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">B3Life</h3>
            <p className="mb-4 text-gray-300">Brain, Brand & Business Life.</p>
            <p className="text-sm text-gray-400">Doing now, What you need next</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>DLF Phase 3, Gurgaon,</p>
              <p>Haryana - 122010</p>
              <p className="mt-4">Phone: 9136657077</p>
              <p>Email: connect@b3life.in</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/work" className="hover:text-purple-400 transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1AdFu9uL2B/" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="https://www.instagram.com/b3life.in?igsh=MTlwNm4xMmtxbTh6eA==" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/b3-life-9748b5362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} B3Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;