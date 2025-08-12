import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentSearchType, setCurrentSearchType] = useState("buy");
  const [searchData, setSearchData] = useState({
    propertyType: "",
    city: "",
    district: "",
    priceRange: "",
    keyword: "",
  });

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const performSearch = () => {
    console.log("Searching with:", { ...searchData, type: currentSearchType });
    // Scroll to properties section
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tìm kiếm bất động sản
          </h2>
          <p className="text-xl mb-8">
            Hơn 100,000+ tin đăng bất động sản trên toàn quốc
          </p>
        </div>

        {/* Advanced Search Form */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setCurrentSearchType("buy")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                currentSearchType === "buy"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Mua
            </button>
            <button
              onClick={() => setCurrentSearchType("rent")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                currentSearchType === "rent"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Thuê
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loại bất động sản
              </label>
              <select
                name="propertyType"
                value={searchData.propertyType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Tất cả loại</option>
                <option value="apartment">Căn hộ chung cư</option>
                <option value="house">Nhà riêng</option>
                <option value="villa">Biệt thự</option>
                <option value="shophouse">Nhà mặt phố</option>
                <option value="office">Văn phòng</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tỉnh/Thành phố
              </label>
              <select
                name="city"
                value={searchData.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Chọn tỉnh/thành</option>
                <option value="ho-chi-minh">TP. Hồ Chí Minh</option>
                <option value="ha-noi">Hà Nội</option>
                <option value="da-nang">Đà Nẵng</option>
                <option value="binh-duong">Bình Dương</option>
                <option value="dong-nai">Đồng Nai</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quận/Huyện
              </label>
              <select
                name="district"
                value={searchData.district}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Chọn quận/huyện</option>
                <option value="quan-1">Quận 1</option>
                <option value="quan-2">Quận 2</option>
                <option value="quan-3">Quận 3</option>
                <option value="binh-thanh">Bình Thạnh</option>
                <option value="thu-duc">Thủ Đức</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Khoảng giá
              </label>
              <select
                name="priceRange"
                value={searchData.priceRange}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Chọn mức giá</option>
                <option value="0-1000000000">Dưới 1 tỷ</option>
                <option value="1000000000-3000000000">1 - 3 tỷ</option>
                <option value="3000000000-5000000000">3 - 5 tỷ</option>
                <option value="5000000000-10000000000">5 - 10 tỷ</option>
                <option value="10000000000-999999999999">Trên 10 tỷ</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="keyword"
              value={searchData.keyword}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Nhập từ khóa, tên dự án, địa chỉ..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={performSearch}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <i className="fas fa-search mr-2"></i>Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
