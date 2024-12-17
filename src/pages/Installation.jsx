import React from "react";
import installationImage from "../assets/images/installation.jpg";

const Installation = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${installationImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            Solar Installation Services
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10">
        {/* Introductory Text */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-10 px-4 md:px-16">
          At Reiko Solar Kenya, we specialize in professional solar installation
          services for residential, commercial, and industrial needs. Our expert
          team ensures quality and reliability from start to finish.
        </p>

        {/* Benefits of Installation */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-green-700 text-center mb-6">
            Why Choose Our Installation Services?
          </h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 text-sm md:text-base">
            <li>Experienced and certified technicians.</li>
            <li>Custom solutions tailored to your energy needs.</li>
            <li>High-quality solar panels and equipment.</li>
            <li>Efficient and timely project delivery.</li>
            <li>Comprehensive post-installation support.</li>
          </ul>
        </div>

        {/* Installation Process */}
        <div className="bg-white shadow-lg border-l-4 border-green-500 p-8 rounded-xl mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Our Installation Process
          </h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-4 text-sm md:text-base">
            <li>
              <strong className="font-semibold">Site Assessment:</strong> Our team visits your site
              to evaluate your energy needs and determine the best installation
              approach.
            </li>
            <li>
              <strong className="font-semibold">System Design:</strong> We create a customized system
              design tailored to your requirements.
            </li>
            <li>
              <strong className="font-semibold">Installation:</strong> Our technicians install the solar
              panels and equipment with precision and care.
            </li>
            <li>
              <strong className="font-semibold">Testing and Handover:</strong> The system is tested to
              ensure optimal performance, and you are guided on its operation.
            </li>
          </ol>
        </div>

        {/* Consultation Form Section */}
        <div className="text-center mb-16">
          <a
            href="https://forms.gle/49m8oMvMnkUYqiCw7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-300 hover:bg-green-400 text-green-800 py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Fill Installation Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Installation;
