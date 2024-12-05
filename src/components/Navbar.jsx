import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Update path based on your actual logo location

const Navbar = () => {
  return (
    <nav className="bg-green text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Reiko Solar Logo" className="h-10 w-auto mr-4" />
        <h1 className="text-xl font-bold">Reiko Solar Kenya</h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/consultation" className="hover:underline">Consultation </Link>
        <Link to="/installation" className="hover:underline">Installation </Link>
        <Link to="/about" className="hover:underline">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
