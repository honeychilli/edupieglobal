import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <button to="/" className="text-2xl font-bold text-blue-500">
          EDU-PIE GLOBAL
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 items-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="px-4 py-2  text-black "
          >
            Home
          </button>
          <button 
            onClick={() => window.location.href = '/about'}
            className="px-4 py-2  text-black "
          >
            About Us
          </button>
          <button 
            onClick={() => window.location.href = '/Programs'}
            className="px-4 py-2  text-black "
          >
            Services
          </button>
          <button 
            onClick={() => window.location.href = '/contact'} 
            className="px-4 py-2  text-black "
          >
            Contact
          </button>
        </nav>



        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Mobile menu icon */}
          <button type="button" className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
