import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for changing navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              alt="Reiko Solar Logo"
              className="h-14 w-auto transition duration-300 transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className={`transition duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'
            }`}
          >
            Home
          </Link>
          <Link
            to="/consultation"
            className={`transition duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'
            }`}
          >
            Consultation
          </Link>
          <Link
            to="/installation"
            className={`transition duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'
            }`}
          >
            Installation
          </Link>
          <Link
            to="/about"
            className={`transition duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
              isScrolled
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-xl rounded-lg w-48 mt-2">
              <Link
                to="/"
                className="block px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setDropdownOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/consultation"
                className="block px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setDropdownOpen(false)}
              >
                Consultation
              </Link>
              <Link
                to="/installation"
                className="block px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setDropdownOpen(false)}
              >
                Installation
              </Link>
              <Link
                to="/about"
                className="block px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setDropdownOpen(false)}
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
