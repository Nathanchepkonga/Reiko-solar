import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Reiko Solar Kenya
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow">Home</Link>
          <Link to="/consultation" className="hover:text-yellow">Consultation</Link>
          <Link to="/installation" className="hover:text-yellow">Installation</Link>
          <Link to="/join-team" className="hover:text-yellow">Join Our Team</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
