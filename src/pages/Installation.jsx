import React from 'react';

const Installation = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue mb-4">Installation Services</h2>
      <p className="text-lg mb-6">
        Request our professional solar installation services by filling out the form below.
      </p>
      <div className="mt-6">
        <iframe
          src="https://forms.gle/49m8oMvMnkUYqiCw7"
          className="w-full h-96 border-0"
          title="Installation Form"
        />
      </div>
    </div>
  );
};

export default Installation;
