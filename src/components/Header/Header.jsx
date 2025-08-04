import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fas fa-home text-3xl text-red-600"></i>
              <h1 className="text-2xl font-bold text-gray-800">
                RealEstatePro
              </h1>
            </div>

            <nav className="hidden lg:flex flex-1 justify-center space-x-8">
              <div className="relative group">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Home
                </button>
              </div>
              <div className="relative group">
                <button
                  onClick={() => scrollToSection("properties")}
                  className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                >
                  Properties for Sale{" "}
                  <i className="fas fa-chevron-down ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Apartment
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Private House
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Villa
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Shophouse
                  </a>
                </div>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                >
                  Properties for Rent{" "}
                  <i className="fas fa-chevron-down ml-1"></i>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Apartment for Rent
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    House for Rent
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Office for Rent
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Store for Rent
                  </a>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("news")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Contact
              </button>
            </nav>

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
              onClick={() => scrollToSection("home")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("properties")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              Properties for Sale
            </button>
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600">
              Properties for Rent
            </a>
            <button
              onClick={() => scrollToSection("news")}
              className="block py-2 text-gray-700 hover:text-red-600 w-full text-left"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection("contact")}
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
