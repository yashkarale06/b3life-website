// src/components/navItems.js
// This file contains the navigation data used by both NavLinks and MobileNavLinks components

export const navItems = [
  { label: 'Home', path: '/' },
  { 
    label: 'Services', 
    path: '/services',
    submenu: [
      { label: 'Branding & Design', path: '/services/branding' },
      { label: 'Digital Marketing', path: '/services/digital-marketing' },
      { label: 'Events & Exhibitions', path: '/services/events' },
      { label: 'Films & Jingles', path: '/services/films' },
      { label: 'Technology', path: '/services/technology' },
      { label: 'Medical Communications', path: '/services/medical-communications' },
      { label: 'Brand Activation', path: '/services/brand-activation' },
      { label: 'Printing Services', path: '/services/printing' },
      { label: 'Live Webcasting', path: '/services/webcasting' },
      { label: 'Market Research', path: '/services/market-research' },
    ]
  },
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];