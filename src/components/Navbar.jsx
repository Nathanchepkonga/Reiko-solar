import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Update path based on your actual logo location

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-green text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Reiko Solar Logo"
              className="h-10 w-auto transform group-hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
              Reiko Solar Kenya
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/consultation" className="hover:text-yellow-300 transition-colors duration-300">
            Consultation
          </Link>
          <Link to="/installation" className="hover:text-yellow-300 transition-colors duration-300">
            Installation
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">
            About Us
          </Link>
        </div>

        {/* Dropdown Button for Mobile */}
        <div className="md:hidden relative">
          <button
            className="bg-yellow-300 text-black py-2 px-4 rounded focus:outline-none"
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-200 transition"
                onClick={() => setDropdownOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/consultation"
                className="block px-4 py-2 hover:bg-gray-200 transition"
                onClick={() => setDropdownOpen(false)}
              >
                Consultation
              </Link>
              <Link
                to="/installation"
                className="block px-4 py-2 hover:bg-gray-200 transition"
                onClick={() => setDropdownOpen(false)}
              >
                Installation
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-200 transition"
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
