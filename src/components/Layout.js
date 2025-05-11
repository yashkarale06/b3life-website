// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <Header />
      <main className="overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;