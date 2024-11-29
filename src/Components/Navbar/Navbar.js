import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-pink-700">
          EdBlaise
        </Link>

        {/* Links for larger screens */}
        <div className="hidden space-x-8 md:flex">
          <Link to="/" className="text-lg font-medium transition duration-300 hover:underline hover:text-pink-600">
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium transition duration-300 hover:underline hover:text-pink-600">
            About
          </Link>
          <Link to="/service" className="text-lg font-medium transition duration-300 hover:underline hover:text-pink-600">
            Services
          </Link>
          <Link to="/support" className="text-lg font-medium transition duration-300 hover:underline hover:text-pink-600">
            Support
          </Link>
          <Link to="/contact" className="text-lg font-medium transition duration-300 hover:underline hover:text-pink-600">
            Contact
          </Link>
        </div>

        {/* Join Button for larger screens */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-6 py-2 text-white transition duration-300 bg-pink-600 rounded-md hover:border-2 hover:text-pink-600 hover:border-pink-500 hover:bg-transparent"
          >
            Join
          </Link>
        </div>

        {/* Hamburger/Cross Icon */}
        <div
          className="z-50 block cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {/* Cross Icon */}
          {menuOpen ? (
            <div className="flex items-center justify-center w-8 h-8">
              <div className="absolute w-6 h-1 rotate-45 bg-pink-700"></div>
              <div className="absolute w-6 h-1 -rotate-45 bg-pink-700"></div>
            </div>
          ) : (
            // Hamburger Icon
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="w-8 h-1 transition-transform duration-300 bg-pink-500"></div>
              <div className="w-8 h-1 transition-transform duration-300 bg-pink-500"></div>
              <div className="w-8 h-1 transition-transform duration-300 bg-pink-500"></div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 left-0 right-0 flex flex-col items-center justify-center w-full h-screen bg-white transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } sm:space-y-4 py-4`}
      >
        <li>
          <Link
            to="/"
            className="py-2 text-lg font-medium transition duration-300 hover:underline hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="py-2 text-lg font-medium transition duration-300 hover:underline hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className="py-2 text-lg font-medium transition duration-300 hover:underline hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className="py-2 text-lg font-medium transition duration-300 hover:underline hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Support Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="py-2 text-lg font-medium transition duration-300 hover:underline hover:text-pink-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="px-6 py-2 mt-4 text-white transition duration-300 bg-pink-600 rounded-md hover:border-2 hover:text-pink-600 hover:border-pink-500 hover:bg-transparent"
            onClick={() => setMenuOpen(false)}
          >
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
