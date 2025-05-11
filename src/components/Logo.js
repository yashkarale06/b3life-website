import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center">
    <span className="text-2xl font-bold text-purple-700">B3Life</span>
    <span className="text-sm text-teal-600 ml-2">Brain, Brand & Business Life</span>
  </Link>
);

export default Logo;