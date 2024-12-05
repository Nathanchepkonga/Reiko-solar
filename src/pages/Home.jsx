import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import consultationImg from '../assets/images/consultation.jpg';
import installationImg from '../assets/images/installation.jpg';

const Home = () => {
  return (
    <div className="bg-gray-50 text-center p-6">
      {/* Hero Section */}
      <header className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 py-10">
        <div className="container mx-auto">
          <img
            src={logo}
            alt="Reiko Solar Kenya Logo"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h1 className="text-4xl font-extrabold mb-4 text-black">
            Welcome to Reiko Solar Kenya
          </h1>
          <p className="text-gray-600 mb-4">
            Your trusted partner for reliable and affordable solar energy solutions.
          </p>
        </div>
      </header>

      {/* Service Options */}
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Consultation Services */}
        <div className="service-item bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <img
            src={consultationImg}
            alt="Consultation Services"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Consultation Services
            </h2>
            <p className="text-gray-600 mb-4">
              Get professional advice on solar systems tailored to your needs.
            </p>
            <Link to="/consultation">
              <button className="bg-blue text-white py-2 px-4 rounded hover:opacity-80 inline-block">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Installation Services */}
        <div className="service-item bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <img
            src={installationImg}
            alt="Installation Services"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Installation Services
            </h2>
            <p className="text-gray-600 mb-4">
              Professional installation of solar systems for your home or business.
            </p>
            <Link to="/installation">
              <button className="bg-blue text-white py-2 px-4 rounded hover:opacity-80 inline-block">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="mt-12 bg-green-100 py-6">
        <div className="container mx-auto">
          <p className="text-gray-800 text-lg">
            Join the renewable energy revolution with Reiko Solar Kenya.
          </p>
          <Link to="/about">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded">
              About Us
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
