import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
                <a
                  href="#home"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Trang chủ
                </a>
              </div>
              <div className="relative group">
                <a
                  href="#properties"
                  className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                >
                  Nhà đất bán <i className="fas fa-chevron-down ml-1"></i>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Căn hộ chung cư
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Nhà riêng
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Nhà biệt thự
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Nhà mặt phố
                  </a>
                </div>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                >
                  Nhà đất cho thuê <i className="fas fa-chevron-down ml-1"></i>
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Căn hộ cho thuê
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Nhà cho thuê
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Văn phòng cho thuê
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Cửa hàng cho thuê
                  </a>
                </div>
              </div>
              <a
                href="#news"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Tin tức
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Liên hệ
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <i className="fas fa-plus mr-2"></i>Đăng tin
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
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-red-600"
            >
              Trang chủ
            </a>
            <a
              href="#properties"
              className="block py-2 text-gray-700 hover:text-red-600"
            >
              Nhà đất bán
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600">
              Nhà đất cho thuê
            </a>
            <a
              href="#news"
              className="block py-2 text-gray-700 hover:text-red-600"
            >
              Tin tức
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-red-600"
            >
              Liên hệ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
