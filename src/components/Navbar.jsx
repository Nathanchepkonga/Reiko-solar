import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
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

        {/* Mobile Menu */}
        <div className="md:hidden w-full absolute left-0 top-full bg-white shadow-md">
          <div className="flex justify-around py-3 text-lg font-medium">
            <Link
              to="/"
              className="text-gray-800 hover:text-green-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/consultation"
              className="text-gray-800 hover:text-green-600 transition duration-300"
            >
              Consultation
            </Link>
            <Link
              to="/installation"
              className="text-gray-800 hover:text-green-600 transition duration-300"
            >
              Installation
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-green-600 transition duration-300"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
