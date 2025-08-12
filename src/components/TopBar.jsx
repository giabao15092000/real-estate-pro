import React from "react";

const TopBar = () => {
  return (
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
          <a href="#" className="hover:text-gray-200">
            Đăng tin miễn phí
          </a>
          <a href="#" className="hover:text-gray-200">
            Đăng nhập
          </a>
          <a href="#" className="hover:text-gray-200">
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
