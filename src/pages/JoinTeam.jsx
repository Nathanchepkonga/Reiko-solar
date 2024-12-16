import React from 'react';

const JoinTeam = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue mb-4">Join Our Technician Team</h2>
      <p className="text-lg mb-6">
        Become a part of the Reiko Solar Kenya team. Click the button below to open the application form.
      </p>
      <div className="text-center">
        <a
          href="https://forms.gle/es9ZX9SPjmqXqunU6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue text-white py-2 px-4 rounded hover:opacity-80 inline-block"
        >
          Open Application Form
        </a>
      </div>
    </div>
  );
};

export default JoinTeam;
