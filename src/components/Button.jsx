import React from 'react';

const Button = ({ text, color = 'bg-green', onClick }) => {
  return (
    <button
      className={`${color} text-white py-2 px-4 rounded hover:opacity-80`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
