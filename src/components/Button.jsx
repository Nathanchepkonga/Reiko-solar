import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({ text, onClick, to, isExternal = false }) => {
  return isExternal ? (
    // External Link
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
    >
      {text}
    </a>
  ) : (
    // Internal Link
    <Link
      to={to}
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
    >
      {text}
    </Link>
  );
};

export default Buttons;
