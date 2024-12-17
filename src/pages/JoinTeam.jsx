import React from "react";
import joinTeamImage from "../assets/images/join-team.jpg"; // Import the image

const JoinTeam = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center w-full min-h-[300px] md:min-h-[400px]"
        style={{ backgroundImage: `url(${joinTeamImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            Join Our Technician Team
          </h1>
        </div>
      </div>

      {/* Application Information Section */}
      <div className="card p-6 max-w-4xl mx-auto my-10 fade-in">
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
    </div>
  );
};

export default JoinTeam;
