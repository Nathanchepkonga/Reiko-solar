import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Update path based on your actual logo location

const Navbar = () => {
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
        <div className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/consultation"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Consultation
          </Link>
          <Link
            to="/installation"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Installation
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
