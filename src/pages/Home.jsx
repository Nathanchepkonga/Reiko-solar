import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Add your logo file here
import consultationImg from '../assets/images/consultation.jpg'; // Replace with actual image
import installationImg from '../assets/images/installation.jpg'; // Replace with actual image
import joinTeamImg from '../assets/images/join-team.jpg'; // Replace with actual image

const Home = () => {
  return (
    <div className="text-center p-6">
      {/* Logo Section */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Reiko Solar Kenya Logo"
          className="mx-auto w-32 h-32"
        />
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-green mb-4">
        Welcome to Reiko Solar Kenya
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Your trusted partner for solar solutions. Explore our services today.
      </p>

      {/* Service Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Consultation Services */}
        <div className="service-item">
          <img
            src={consultationImg}
            alt="Consultation Services"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-2xl font-semibold text-blue my-4">
            Consultation Services
          </h2>
          <Link to="/consultation">
            <button className="bg-green text-white py-2 px-4 rounded hover:opacity-80">
              Learn More
            </button>
          </Link>
        </div>

        {/* Installation Services */}
        <div className="service-item">
          <img
            src={installationImg}
            alt="Installation Services"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-2xl font-semibold text-blue my-4">
            Installation Services
          </h2>
          <Link to="/installation">
            <button className="bg-green text-white py-2 px-4 rounded hover:opacity-80">
              Learn More
            </button>
          </Link>
        </div>

        {/* Join Our Technician Team */}
        <div className="service-item">
          <img
            src={joinTeamImg}
            alt="Join Our Technician Team"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-2xl font-semibold text-blue my-4">
            Join Our Technician Team
          </h2>
          <Link to="/join-team">
            <button className="bg-yellow text-white py-2 px-4 rounded hover:opacity-80">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
