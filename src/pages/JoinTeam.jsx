import React from 'react';

const JoinTeam = () => {
  return (
    <div className="card p-6 max-w-4xl mx-auto my-10 fade-in">
      <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Join Our Technician Team</h2>
      <p className="text-lg mb-6 text-center text-gray-600">
        Become a part of the Reiko Solar Kenya team. Click the button below to open the application form and start your journey with us.
      </p>
      <div className="text-center">
        <a
          href="https://forms.gle/es9ZX9SPjmqXqunU6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-300 hover:bg-green-400 text-green-800 py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Open Application Form
        </a>
      </div>
    </div>
  );
};

export default JoinTeam;
