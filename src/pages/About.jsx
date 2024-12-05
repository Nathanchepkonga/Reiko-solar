import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue mb-4">About Us</h2>
      <p className="text-lg mb-6">
        Reiko Solar Kenya is committed to providing affordable and reliable solar energy solutions across Kenya. 
        Our team of certified solar technicians and engineers ensures top-notch service delivery for all your solar needs.
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Comprehensive solar consultations tailored to your requirements.</li>
        <li>Professional installations by skilled technicians.</li>
        <li>Focus on sustainability and eco-friendly energy solutions.</li>
      </ul>
    </div>
  );
};

export default About;
