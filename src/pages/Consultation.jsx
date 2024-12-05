import React from 'react';

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
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue mb-4">Consultation Services</h2>
      <p className="text-lg mb-6">
        Choose a package that suits your solar needs, complete payment, and then fill the consultation form.
      </p>

      {/* Packages Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-green mb-4">Solar System Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white"
            >
              <h4 className="text-xl font-bold mb-2">
                {pkg.id}. {pkg.title}
              </h4>
              <p className="text-gray-700 mb-2">{pkg.description}</p>
              <p className="text-green-600 font-bold">Ksh {pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h3 className="text-xl font-bold text-yellow mb-2">Paying via M-Pesa Till Number</h3>
        <ol className="list-decimal pl-6 text-sm text-gray-700 space-y-1">
          <li>
            Open M-Pesa Menu: On your mobile phone, go to the M-Pesa app or the SIM Toolkit and select{" "}
            <strong>Lipa na M-Pesa</strong>.
          </li>
          <li>Select <strong>Buy Goods and Services</strong>.</li>
          <li>Enter Till Number: Type the Till Number <strong>7137580</strong> and press OK.</li>
          <li>Enter Amount: Enter the amount you wish to pay and press OK.</li>
          <li>
            Confirm Details: Ensure the Till Number and amount are correct, then proceed.
          </li>
          <li>Enter M-Pesa PIN: Enter your M-Pesa PIN and press OK.</li>
          <li>Copy the MPESA Message and fill out the form below.</li>
        </ol>
      </div>

      {/* Consultation Form Button */}
      <div className="text-center">
        <a
          href="https://forms.gle/mgUyiTZecdvK5jqNA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue text-white py-2 px-4 rounded hover:opacity-80 inline-block"
        >
          Open Consultation Form
        </a>
      </div>
    </div>
  );
};

export default Consultation;
