import React from "react";
import consultationImage from "../assets/images/consultation.jpg";

const Consultation = () => {
  // Data for packages
  const packages = [
    {
      id: 1,
      title: "System 1",
      description: "Lights, TV, Radio, Charging",
      price: 400,
    },
    {
      id: 2,
      title: "System 2",
      description: "System 1 + Fridge",
      price: 800,
    },
    {
      id: 3,
      title: "System 3",
      description: "System 2 + Microwave & Washing Machine",
      price: 1200,
    },
    {
      id: 4,
      title: "System 4",
      description: "System 3 + High-End Residential & Net Metering",
      price: 1600,
    },
    {
      id: 5,
      title: "System 5",
      description: "Industrial System",
      price: 2000,
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-50">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-64 rounded-lg shadow-lg mb-8"
        style={{ backgroundImage: `url(${consultationImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Consultation Services
          </h2>
        </div>
      </div>

      {/* Introductory Text */}
      <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
        Choose a package that suits your solar needs, complete payment, and then
        fill out the consultation form to get started.
      </p>

      {/* Solar Packages Section */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-green-700 text-center mb-6">
          Solar System Packages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-green-800 mb-3">
                {pkg.id}. {pkg.title}
              </h4>
              <p className="text-gray-600 mb-2">{pkg.description}</p>
              <p className="text-green-600 font-bold text-lg">
                Ksh {pkg.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-10">
        <h3 className="text-2xl font-bold text-yellow-700 mb-4">
          Paying via M-Pesa Till Number
        </h3>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2 text-sm md:text-base">
          <li>
            Open M-Pesa Menu: On your mobile phone, go to the M-Pesa app or the
            SIM Toolkit and select <strong>Lipa na M-Pesa</strong>.
          </li>
          <li>Select <strong>Buy Goods and Services</strong>.</li>
          <li>
            Enter Till Number: Type the Till Number <strong>7137580</strong> and
            press OK.
          </li>
          <li>Enter Amount: Enter the amount you wish to pay and press OK.</li>
          <li>
            Confirm Details: Ensure the Till Number and amount are correct,
            then proceed.
          </li>
          <li>Enter M-Pesa PIN: Enter your M-Pesa PIN and press OK.</li>
          <li>
            Copy the M-Pesa confirmation message and fill out the form below.
          </li>
        </ol>
      </div>

      {/* Consultation Form Section */}
      <div className="text-center">
        <a
          href="https://forms.gle/mgUyiTZecdvK5jqNA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-300 hover:bg-green-400 text-green-800 py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Fill Consultation Form
        </a>
      </div>
    </div>
  );
};

export default Consultation;
