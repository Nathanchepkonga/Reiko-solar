import React from 'react';

const Buttons = ({ text, onClick, to }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default Buttons;
