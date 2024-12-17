import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect for changing navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when a menu item is selected
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={closeMenu}>
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
              isScrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            }`}
          >
            Home
          </Link>
          <Link
            to="/consultation"
            className={`transition duration-300 ${
              isScrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            }`}
          >
            Consultation
          </Link>
          <Link
            to="/installation"
            className={`transition duration-300 ${
              isScrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            }`}
          >
            Installation
          </Link>
          <Link
            to="/about"
            className={`transition duration-300 ${
              isScrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <ul className="flex flex-col text-center text-gray-800 text-lg">
                <li>
                  <Link
                    to="/"
                    className="block py-3 px-4 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/consultation"
                    className="block py-3 px-4 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="block py-3 px-4 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-3 px-4 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
