import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 w-full mt-20 bg-white border-t border-gray-200">
      <div className="container py-8 mx-auto">
        {/* Logo and Navigation */}
        <div className="mb-6 text-center">
          <h1 className="mb-4 text-xl font-bold text-gray-800">EdBlaise</h1>
          <nav className="flex justify-center space-x-6 text-gray-600">
            <Link to='/'  className='text-2xl font-semibold text-pink-700 '>EdBlaise</Link>
            <Link to='/' className='hover:underline hover:text-pink-600'>Home</Link>
            <Link to='/about' className='hover:underline hover:text-pink-600'>About</Link>
            <Link to='/contact' className='hover:underline hover:text-pink-600'>Contact</Link>
            <Link to='/service' className='hover:underline hover:text-pink-600'>Services</Link>
           
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mb-6 space-x-4">
          <a href="www.twitter.com" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="www.instragram.com" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="www.facebook.com" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="www.youtube.com" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-center text-gray-500">
          ©EdBlaise 2024, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
