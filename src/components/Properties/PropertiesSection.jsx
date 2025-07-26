import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
import { properties } from "../../data/properties";
import "./Properties.css";

const PropertiesSection = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    // Display featured properties first
    displayFeaturedProperties();
  }, []);

  const displayFeaturedProperties = () => {
    const featuredProps = properties.filter((p) => p.featured).slice(0, 8);
    setFilteredProperties(featuredProps);
  };

  const handlePropertyClick = (propertyId) => {
    const property = properties.find((p) => p.id === propertyId);
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const handleSort = (sortValue) => {
    setSortBy(sortValue);
    let sorted = [...filteredProperties];

    switch (sortValue) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "area":
        sorted.sort((a, b) => b.area - a.area);
        break;
      case "newest":
      default:
        sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
    }

    setFilteredProperties(sorted);
  };

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  return (
    <>
      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800">
              Bất động sản nổi bật
            </h3>
            <a
              href="#properties"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Xem tất cả <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties
              .filter((p) => p.featured)
              .slice(0, 8)
              .map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={handlePropertyClick}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section id="properties" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="breadcrumb mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <a href="#" className="hover:text-red-600">
                Trang chủ
              </a>
              <i className="fas fa-chevron-right mx-2"></i>
              <span>Nhà đất bán</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Nhà đất bán</h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="newest">Tin mới nhất</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="price-high">Giá cao đến thấp</option>
                <option value="area">Diện tích</option>
              </select>
            </div>
          </div>

          {/* Sticky Filter Bar */}
          <div className="sticky-search bg-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex flex-wrap gap-4 items-center">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Loại BDS</option>
                <option>Căn hộ</option>
                <option>Nhà riêng</option>
                <option>Biệt thự</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Tỉnh/Thành</option>
                <option>TP.HCM</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Quận/Huyện</option>
                <option>Quận 1</option>
                <option>Quận 2</option>
                <option>Quận 3</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Mức giá</option>
                <option>Dưới 1 tỷ</option>
                <option>1-3 tỷ</option>
                <option>3-5 tỷ</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Diện tích</option>
                <option>Dưới 50m²</option>
                <option>50-100m²</option>
                <option>Trên 100m²</option>
              </select>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                Lọc kết quả
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={handlePropertyClick}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                «
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-red-600 text-white"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default PropertiesSection;
