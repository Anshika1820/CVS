// src/components/TnC.jsx
import React from "react";

const TnC = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 ">
      <div className="bg-green-900 rounded-lg max-w-lg w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4 text-white-800">Terms & Conditions</h2>
        <p className="text-white-700 text-sm leading-relaxed mb-6">
          Welcome to CodevirusSecurity. By using our services, you agree to our terms and conditions. Please read them carefully. Use of our website and services implies acceptance of these terms.
        </p>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TnC;
