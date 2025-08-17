import React, { useState } from "react";
import "./Header.css";

const Header = ({ goToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Style nút màu đen + ánh sao
  const navBtnStyle =
    "relative px-3 py-2 rounded-lg font-bold bg-white text-red-600 overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:text-yellow-400 " +
    "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full " +
    "before:bg-[radial-gradient(red,transparent_20%)] before:bg-[length:3px_3px] before:opacity-30 before:animate-twinkle";

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer header-logo"
              onClick={() => goToSection("hero")}
            >
              <i className="fas fa-home text-3xl text-red"></i>
              <h1 className="text-2xl font-bold text-red">RealEstatePro</h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex flex-1 justify-center flex-wrap space-x-4 header-nav">
              <button
                onClick={() => goToSection("hero")}
                className={navBtnStyle}
              >
                Home
              </button>
              <button
                onClick={() => goToSection("featured")}
                className={navBtnStyle}
              >
                Featured Properties
              </button>
              <button
                onClick={() => goToSection("for-sale")}
                className={navBtnStyle}
              >
                Properties for Sale
              </button>
              <button
                onClick={() => goToSection("for-rent")}
                className={navBtnStyle}
              >
                Properties for Rent
              </button>
              <button
                onClick={() => goToSection("news")}
                className={navBtnStyle}
              >
                News
              </button>
              <button
                onClick={() => goToSection("contact")}
                className={navBtnStyle}
              >
                Contact Us
              </button>
              <button
                onClick={() => goToSection("feedback")}
                className={navBtnStyle}
              >
                Feedback
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white hover:text-yellow-300 transition"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-black shadow-lg lg:hidden mobile-menu">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => goToSection("hero")}
              className={`${navBtnStyle} w-full`}
            >
              Home
            </button>
            <button
              onClick={() => goToSection("featured")}
              className={`${navBtnStyle} w-full`}
            >
              Featured Properties
            </button>
            <button
              onClick={() => goToSection("for-sale")}
              className={`${navBtnStyle} w-full`}
            >
              Properties for Sale
            </button>
            <button
              onClick={() => goToSection("for-rent")}
              className={`${navBtnStyle} w-full`}
            >
              Properties for Rent
            </button>
            <button
              onClick={() => goToSection("news")}
              className={`${navBtnStyle} w-full`}
            >
              News
            </button>
            <button
              onClick={() => goToSection("contact")}
              className={`${navBtnStyle} w-full`}
            >
              Contact
            </button>
            <button
              onClick={() => goToSection("feedback")}
              className={`${navBtnStyle} w-full`}
            >
              Feedback
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
