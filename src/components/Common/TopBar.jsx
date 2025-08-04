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
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>
              <i className="fas fa-phone mr-1"></i>Hotline: 1900 1881
            </span>
            <span>
              <i className="fas fa-envelope mr-1"></i>support@realestatepro.vn
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => openModal("login")}
              className="hover:text-gray-200"
            >
              Login
            </button>
            <button
              onClick={() => openModal("register")}
              className="hover:text-gray-200"
            >
              Sign up
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
