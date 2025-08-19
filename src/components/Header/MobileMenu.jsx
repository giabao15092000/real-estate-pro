import React, { useEffect, useRef } from "react";

const MobileMenu = ({ goToSection, isOpen, navBtnStyle, closeMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // đóng menu
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="bg-black shadow-lg lg:hidden mobile-menu fixed top-16 left-0 w-full z-50"
    >
      <div className="px-4 py-4 space-y-3">
        <button
          onClick={() => {
            goToSection("hero");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          Home
        </button>
        <button
          onClick={() => {
            goToSection("featured");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          Featured Properties
        </button>
        <button
          onClick={() => {
            goToSection("for-sale");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          Properties for Sale
        </button>
        <button
          onClick={() => {
            goToSection("for-rent");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          Properties for Rent
        </button>
        <button
          onClick={() => {
            goToSection("news");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          News
        </button>
        <button
          onClick={() => {
            goToSection("contact");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          Contact
        </button>
        <button
          onClick={() => {
            goToSection("feedback");
            closeMenu();
          }}
          className={`${navBtnStyle} w-full`}
        >
          Feedback
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
