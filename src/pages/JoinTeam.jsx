import React from 'react';

const JoinTeam = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue mb-4">Join Our Technician Team</h2>
      <p className="text-lg mb-6">
        Become a part of the Reiko Solar Kenya team. Fill out the form below to apply.
      </p>
      <div className="mt-6">
        <iframe
          src="https://forms.gle/es9ZX9SPjmqXqunU6"
          className="w-full h-96 border-0"
          title="Join Our Team Form"
        />
      </div>
    </div>
  );
};

export default JoinTeam;
