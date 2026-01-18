// src/components/Privacy.jsx
import React from "react";

const Privacy = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-green-900 rounded-lg max-w-lg w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4 text-white-800">Privacy Policy</h2>
        <p className="text-white-700 text-sm leading-relaxed mb-6">
          We value your privacy. Any personal information you provide to us is securely stored and never shared with third parties. By using our services, you consent to our privacy practices.
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

export default Privacy;
