import React from 'react';

const Consultation = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue mb-4">Consultation Services</h2>
      <p className="text-lg mb-6">
        Choose a package that suits your solar needs ,complete payment and then fill the consultation form.
      </p>

      {/* Packages Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-green mb-2">Solar System Packages</h3>
        <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
          <li>
            <strong>System 1:</strong> Lights, TV, Radio, Charging - <strong>Ksh 200</strong>
          </li>
          <li>
            <strong>System 2:</strong> System 1 + Fridge - <strong>Ksh 400</strong>
          </li>
          <li>
            <strong>System 3:</strong> System 2 + Microwave & Washing Machine - <strong>Ksh 600</strong>
          </li>
          <li>
            <strong>System 4:</strong> System 3 + High-End Residential & Net Metering - <strong>Ksh 800</strong>
          </li>
          <li>
            <strong>System 5:</strong> Industrial System - <strong>Ksh 1000</strong>
          </li>
        </ul>
      </div>

      {/* Payment Instructions */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h3 className="text-xl font-bold text-yellow mb-2">Paying via M-Pesa Till Number</h3>
        <ol className="list-decimal pl-6 text-sm text-gray-700 space-y-1">
          <li>Open M-Pesa Menu: On your mobile phone, go to the M-Pesa app or the SIM Toolkit and select <strong>Lipa na M-Pesa</strong>.</li>
          <li>Select <strong>Buy Goods and Services</strong>.</li>
          <li>Enter Till Number: Type the Till Number <strong>7137580</strong> and press OK.</li>
          <li>Enter Amount: Enter the amount you wish to pay and press OK.</li>
          <li>Confirm Details: Ensure the Till Number and amount are correct, then proceed.</li>
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
