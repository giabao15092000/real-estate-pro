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
  const [filters, setFilters] = useState({
    type: "buy",
    category: "",
    city: "",
    district: "",
    price: "",
    area: "",
  });
  const itemsPerPage = 12;

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const applyFilters = () => {
    let result = properties.filter((p) => p.type === filters.type);

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.city) {
      result = result.filter((p) => p.location.includes(filters.city));
    }
    if (filters.district) {
      result = result.filter((p) => p.location.includes(filters.district));
    }
    if (filters.price) {
      const [min, max] = filters.price;
      result = result.filter((p) => p.price >= min && p.price <= max);
    }
    if (filters.area) {
      const [min, max] = filters.area;
      result = result.filter((p) => p.area >= min && p.area <= max);
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "area":
        result.sort((a, b) => b.area - a.area);
        break;
      case "newest":
      default:
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
    }

    setFilteredProperties(result);
    setCurrentPage(1);
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

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSort = (sortValue) => {
    setSortBy(sortValue);
  };

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
            <h3 className="text-3xl font-bold text-red-600 border-b-4 border-red-300 pb-2 hover:scale-105 transition-transform">
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

      {/* Nhà đất bán */}
      <section id="properties" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="breadcrumb mb-6"></div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-green-600 border-b-4 border-green-300 pb-2 hover:scale-105 transition-transform">
              Nhà đất bán
            </h3>
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

          {/* Filters (đã có ở đây) */}

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

      {/* Nhà đất cho thuê */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-300 pb-2 mb-8 hover:scale-105 transition-transform">
            Nhà đất cho thuê
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties
              .filter((p) => p.type === "rent")
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

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default PropertiesSection;
