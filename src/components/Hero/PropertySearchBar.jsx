import React, { useState, useMemo } from "react";

const PropertySearchBar = ({ properties, onSearch }) => {
  const [filters, setFilters] = useState({
    area: "",
    price: "",
    location: "",
    category: "",
    type: "",
  });

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
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-6xl">
      <div className="flex flex-wrap justify-center gap-4">
        <select
          name="area"
          value={filters.area}
          onChange={handleChange}
          className="p-2 rounded w-48"
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
          className="p-2 rounded w-48"
        >
          <option value="">Price</option>
          {prices.map((p, idx) => (
            <option key={idx} value={p}>
              {p.toLocaleString()} đ
            </option>
          ))}
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="p-2 rounded w-48"
        >
          <option value="">Location</option>
          {locations.map((l, idx) => (
            <option key={idx} value={l}>
              {l}
            </option>
          ))}
        </select>

        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="p-2 rounded w-48"
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
          className="p-2 rounded w-48"
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
          className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-2 rounded"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default PropertySearchBar;
