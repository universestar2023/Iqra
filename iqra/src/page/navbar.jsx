import React from 'react';
import logo from '../page/lowb.png'; // Update the path to your logo image

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Brand Logo" className="h-10" /> {/* Adjust height as needed */}
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-indigo-200">Home</a>
          <a href="#about" className="text-white hover:text-indigo-200">About Us</a>
          <a href="#login" className="text-white hover:text-indigo-200">Login</a>
          <a href="#signup" className="text-white hover:text-indigo-200">Sign Up</a>
          <a href="#plans" className="text-white hover:text-indigo-200">Plans</a>
          <a href="#features" className="text-white hover:text-indigo-200">Features</a>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
