import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const ContactInfo = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Get in Touch</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Office Address</h3>
          <address className="not-italic text-gray-700">
            <p>DLF Phase 3,</p>
            <p>Gurgaon, Haryana - 122010</p>
          </address>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Email:</span> connect@b3life.in
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Phone:</span> 9136657077
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1AdFu9uL2B/" className="text-purple-700 hover:text-purple-800 transition-colors">Facebook</a>
            <a href="https://www.instagram.com/b3life.in?igsh=MTlwNm4xMmtxbTh6eA==" className="text-purple-700 hover:text-purple-800 transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/b3-life-9748b5362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-purple-700 hover:text-purple-800 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Working Hours</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Saturday & Sunday:</span> Closed
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;