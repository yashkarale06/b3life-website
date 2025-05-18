// src/components/ui/Loader3D.js
import React, { useState, useEffect } from 'react';

const Loader3D = ({ isLoading = true, fullScreen = true }) => {
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
    }
  }, [isLoading]);
  
  if (!isLoading && fadeOut === true) return null;
  
  return (
    <div 
      className={`${fullScreen ? 'fixed inset-0 z-50' : 'w-full h-full'} 
                bg-white flex flex-col items-center justify-center transition-opacity duration-500
                ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Main Logo */}
        <div className="logo-container relative">
          {/* B3Life text */}
          <div className="text-6xl font-bold relative z-10">
            <span className="text-teal-600">B3</span>
            <span className="text-purple-700">Life</span>
          </div>
          
          {/* Shadow/3D effect */}
          <div className="logo-shadow absolute inset-0 text-6xl font-bold blur-sm opacity-30 transform translate-x-1 translate-y-1 z-0">
            <span className="text-teal-600">B3</span>
            <span className="text-purple-700">Life</span>
          </div>
          
          {/* Animated underline */}
          <div className="h-1 bg-gradient-to-r from-purple-700 to-teal-600 mt-2 rounded-full animate-line-grow"></div>
        </div>
        
        {/* Tagline */}
        <div className="text-gray-600 mt-8 text-center">
          <span className="block text-xs uppercase tracking-wider mb-1">BRAIN | BRAND | BUSINESS</span>
          <span className="block text-xl font-medium mt-2">
            <span className="text-purple-700">Doing Now,</span>
            <span className="text-teal-600"> What you need Next</span>
          </span>
        </div>
        
        {/* Loading animation */}
        <div className="mt-10 flex items-center justify-center">
          <div className="dot-pulse">
            <div className="dot-pulse__dot"></div>
          </div>
        </div>
      </div>
      
      {/* Inline styles for animations */}
      <style jsx>{`
        /* Logo animations */
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .logo-container {
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes lineGrow {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .animate-line-grow {
          width: 0;
          animation: lineGrow 2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
        
        /* Pulse dot animation */
        .dot-pulse {
          position: relative;
          left: -9999px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #9333ea;
          color: #9333ea;
          box-shadow: 9999px 0 0 -5px;
          animation: dot-pulse 1.5s infinite linear;
          animation-delay: 0.25s;
        }
        
        .dot-pulse::before, .dot-pulse::after {
          content: "";
          display: inline-block;
          position: absolute;
          top: 0;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #9333ea;
          color: #9333ea;
        }
        
        .dot-pulse::before {
          box-shadow: 9984px 0 0 -5px;
          animation: dot-pulse-before 1.5s infinite linear;
          animation-delay: 0s;
        }
        
        .dot-pulse::after {
          box-shadow: 10014px 0 0 -5px;
          animation: dot-pulse-after 1.5s infinite linear;
          animation-delay: 0.5s;
        }
        
        @keyframes dot-pulse-before {
          0% { box-shadow: 9984px 0 0 -5px; }
          30% { box-shadow: 9984px 0 0 2px; }
          60%, 100% { box-shadow: 9984px 0 0 -5px; }
        }
        
        @keyframes dot-pulse {
          0% { box-shadow: 9999px 0 0 -5px; }
          30% { box-shadow: 9999px 0 0 2px; }
          60%, 100% { box-shadow: 9999px 0 0 -5px; }
        }
        
        @keyframes dot-pulse-after {
          0% { box-shadow: 10014px 0 0 -5px; }
          30% { box-shadow: 10014px 0 0 2px; }
          60%, 100% { box-shadow: 10014px 0 0 -5px; }
        }
      `}</style>
    </div>
  );
};

export default Loader3D;