import React, { useState } from "react";
import AuthModal from "./AuthModal";

const TopBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" or "register"

  const openModal = (mode) => {
    setAuthMode(mode);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-600 via-pink-500 to-orange-500 text-white py-2 text-sm shadow-md">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* Left Info */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <i className="fas fa-phone mr-1 text-yellow-300"></i>
              Hotline: <span className="ml-1 font-semibold">0961542616</span>
            </span>
            <span className="flex items-center">
              <i className="fas fa-envelope mr-1 text-yellow-300"></i>
              quocanh82209@gmail.com
            </span>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <button
              onClick={() => openModal("login")}
              className="bg-white text-red-600 px-3 py-1 rounded-lg font-semibold hover:bg-red-100 transition-all duration-300 shadow hover:shadow-lg"
            >
              <i className="fas fa-sign-in-alt mr-1"></i> Login
            </button>
            <button
              onClick={() => openModal("register")}
              className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 shadow hover:shadow-lg text-xs sm:text-sm"
            >
              <i className="fas fa-user-plus mr-1"></i> Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AuthModal
        show={showModal}
        onClose={() => setShowModal(false)}
        mode={authMode}
      />
    </>
  );
};

export default TopBar;
