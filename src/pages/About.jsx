import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/images/about.jpg"; // Import the image

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center w-full min-h-[300px] md:min-h-[400px]"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-r from-green-200 via-blue-200 to-purple-300">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Reiko Solar Kenya is a leading provider of affordable and reliable solar
            energy solutions across Kenya. We bring clean, efficient, and sustainable energy
            to homes and businesses, powering a brighter future.
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To provide innovative, high-quality solar solutions that promote sustainability
              and enhance the lives of our customers through affordable energy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be the most trusted and preferred provider of solar energy in Kenya, enabling
              every home and business to achieve energy independence and environmental
              sustainability.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-14">
          <h3 className="text-3xl font-semibold text-green-700 mb-6 text-center">
            Our Core Values
          </h3>
          <ul className="list-disc pl-8 text-gray-700 text-lg space-y-4">
            <li>🌱 Customer Focus: We prioritize the needs of our clients.</li>
            <li>🤝 Integrity: We operate with honesty and transparency in all our dealings.</li>
            <li>💡 Innovation: We constantly seek new solutions to enhance our services.</li>
            <li>🌍 Sustainability: We promote the use of renewable energy for a greener future.</li>
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-6 md:p-10 rounded-lg shadow-xl mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">Why Choose Us?</h3>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              With Reiko Solar Kenya, you get more than just solar panels; you get a reliable partner
              committed to a sustainable, energy-efficient future.
            </p>
            <div className="space-x-4">
              <Link
                to="/consultation"
                className="bg-green-300 hover:bg-green-400 text-green-800 py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Explore our solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
