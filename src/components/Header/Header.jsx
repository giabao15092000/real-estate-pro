import React, { useState } from "react";
import "./Header.css";

const Header = ({ goToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <i className="fas fa-home text-3xl text-red-600"></i>
              <h1 className="text-2xl font-bold text-gray-800">
                RealEstatePro
              </h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex flex-1 justify-center space-x-8">
              <button
                onClick={() => goToSection("hero")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => goToSection("featured")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Featured Properties
              </button>

              <button
                onClick={() => goToSection("for-sale")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Properties for Sale
              </button>

              <button
                onClick={() => goToSection("for-rent")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Properties for Rent
              </button>

              <button
                onClick={() => goToSection("news")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                News
              </button>

              <button
                onClick={() => goToSection("contact")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <i className="fas fa-plus mr-2"></i>Post Listing
              </button>
              <button
                className="lg:hidden text-gray-700"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg lg:hidden">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => goToSection("hero")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => goToSection("featured")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Featured Properties
            </button>
            <button
              onClick={() => goToSection("for-sale")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Properties for Sale
            </button>
            <button
              onClick={() => goToSection("for-rent")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Properties for Rent
            </button>
            <button
              onClick={() => goToSection("news")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              News
            </button>
            <button
              onClick={() => goToSection("contact")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
