import React, { useState, useMemo } from "react";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";

import "./Properties.css";

const PropertiesSection = ({
  id,
  title,
  properties,
  showSort = false,
  showPagination = false,
}) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [displayProperties, setDisplayProperties] = useState(properties);
  // Nhận dữ liệu từ PropertySearchBar
  const handleSearch = (filteredList) => {
    setDisplayProperties(filteredList);
    setCurrentPage(1);
  };

  // Trong useMemo, thay properties thành displayProperties
  const sortedAndPaginatedProperties = useMemo(() => {
    let result = [...displayProperties];

    // Sorting
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

    // Pagination
    if (showPagination) {
      const start = (currentPage - 1) * itemsPerPage;
      const end = currentPage * itemsPerPage;
      result = result.slice(start, end);
    }

    return result;
  }, [displayProperties, sortBy, currentPage, showPagination]);

  const totalPages = useMemo(() => {
    return showPagination
      ? Math.ceil(displayProperties.length / itemsPerPage)
      : 1;
  }, [displayProperties.length, showPagination]);

  const handlePropertyClick = (id) => {
    const property = properties.find((p) => p.id === id);
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h3
          className={`text-3xl font-bold pb-2 mb-6 hover:scale-105 transition-transform
            ${
              title.includes("Sale")
                ? "text-green-600 border-b-4 border-green-300"
                : title.includes("Rent")
                ? "text-blue-600 border-b-4 border-blue-300"
                : "text-red-600 border-b-4 border-red-300"
            }`}
        >
          {title}
        </h3>

        {/* Sort Dropdown */}
        {showSort && (
          <div className="flex justify-end items-center mb-6">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="area">Area</option>
            </select>
          </div>
        )}

        {/* Grid Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedAndPaginatedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={handlePropertyClick}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {showPagination && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Math.max(1, currentPage - 1));
                }}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                «
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(index + 1);
                  }}
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
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Math.min(totalPages, currentPage + 1));
                }}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default PropertiesSection;
