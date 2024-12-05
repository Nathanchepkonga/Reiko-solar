import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-blue text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Reiko Solar Kenya. All rights reserved.</p>
        <p>Call us: +254 712 345 678 | Email: reikokenya@gmail.com</p>
        <Link to="/join-team" className="text-yellow hover:underline">
          Join Our Technician Team
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
