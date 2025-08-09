import React, { useState, useMemo } from "react";
import { formatPrice } from "../../utils/helpers";

const PropertySearchBar = ({ properties, onSearch }) => {
  const [filters, setFilters] = useState({
    area: "",
    price: "",
    location: "",
    category: "",
    type: "",
  });

  const locationMap = {
    "Hà Nội": "Hanoi",
    "TP HCM": "Ho Chi Minh City",
    "Đà Nẵng": "Da Nang",
    "Hải Phòng": "Hai Phong",
    "Cần Thơ": "Can Tho",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const filtered = properties.filter((p) => {
      return (
        (!filters.area || p.area.toString() === filters.area.toString()) &&
        (!filters.price || p.price.toString() === filters.price.toString()) &&
        (!filters.location || p.location === filters.location) &&
        (!filters.category || p.category === filters.category) &&
        (!filters.type || p.type === filters.type)
      );
    });
    onSearch(filtered);
  };

  const areas = useMemo(
    () => [...new Set(properties.map((p) => p.area))],
    [properties]
  );
  const prices = useMemo(
    () => [...new Set(properties.map((p) => p.price))],
    [properties]
  );
  const locations = useMemo(
    () => [...new Set(properties.map((p) => p.location))],
    [properties]
  );
  const categories = useMemo(
    () => [...new Set(properties.map((p) => p.category))],
    [properties]
  );
  const types = useMemo(
    () => [...new Set(properties.map((p) => p.type))],
    [properties]
  );

  return (
    <div
      className=" p-6 rounded-xl shadow-2xl border border-gray-700 w-full max-w-6xl mx-auto"
      style={{ backgroundColor: "#90C908" }}
    >
      <div className="flex flex-wrap justify-center gap-4">
        {/* Select chung style */}
        <select
          name="area"
          value={filters.area}
          onChange={handleChange}
          className="p-2 rounded-lg w-48 bg-white hover:bg-lime-200 border border-gray-600 focus:ring-2 focus:ring-lime-400"
        >
          <option value="">Area</option>
          {areas.map((a, idx) => (
            <option key={idx} value={a}>
              {a} m²
            </option>
          ))}
        </select>

        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="p-2 rounded-lg w-48 bg-white hover:bg-lime-200 text-black border border-gray-600 focus:ring-2 focus:ring-lime-400"
        >
          <option value="">Price</option>
          {prices.map((p, idx) => (
            <option key={idx} value={p}>
              {formatPrice(p)}
            </option>
          ))}
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="p-2 rounded-lg w-48 bg-white hover:bg-lime-200 text-black border border-gray-600 focus:ring-2 focus:ring-lime-400"
        >
          <option value="">Location</option>
          {locations.map((l, idx) => (
            <option key={idx} value={l}>
              {locationMap[l] || l}
            </option>
          ))}
        </select>

        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="p-2 rounded-lg w-48 bg-white hover:bg-lime-200 text-black border border-gray-600 focus:ring-2 focus:ring-lime-400"
        >
          <option value="">Category</option>
          {categories.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="p-2 rounded-lg w-48 bg-white hover:bg-lime-200 text-black border border-gray-600 focus:ring-2 focus:ring-lime-400"
        >
          <option value="">Type</option>
          {types.map((t, idx) => (
            <option key={idx} value={t}>
              {t}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-white hover:bg-lime-200 text-black font-semibold px-6 py-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default PropertySearchBar;
