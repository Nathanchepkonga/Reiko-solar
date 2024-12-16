import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          {/* Contact Information */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-white text-lg font-semibold">Reiko Solar Kenya</p>
            <p>Call us: +254 712 345 678</p>
            <p>Email: <a href="mailto:reikokenya@gmail.com" className="hover:text-green-400 transition">reikokenya@gmail.com</a></p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link
              to="/"
              className="hover:text-green-400 transition"
            >
              Home
            </Link>
            <Link
              to="/consultation"
              className="hover:text-green-400 transition"
            >
              Consultation
            </Link>
            <Link
              to="/installation"
              className="hover:text-green-400 transition"
            >
              Installation
            </Link>
            <Link
              to="/about"
              className="hover:text-green-400 transition"
            >
              About Us
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm">&copy; 2025 Reiko Solar Kenya. All rights reserved.</p>
          <p className="text-sm mt-2">
            <Link to="/join-team" className="hover:text-green-400 transition">
              Join Our Technician Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
