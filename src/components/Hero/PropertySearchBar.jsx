import React, { useState, useMemo, useEffect } from "react";
import { formatPrice } from "../../utils/helpers";

const PropertySearchBar = ({ properties, onSearch }) => {
  const [filters, setFilters] = useState({
    search: "",
    area: "",
    price: "",
    location: "",
    category: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    furnished: "",
    amenities: [],
    sort: "",
  });
  const [hasSearched, setHasSearched] = useState(false); // Thêm state để biết đã search chưa

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setHasSearched(true); // Mỗi khi thay đổi input là coi như đã search
  };
  const handleReset = () => {
    setFilters({
      search: "",
      area: "",
      price: "",
      location: "",
      category: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      furnished: "",
      amenities: [],
      sort: "",
    });
    setHasSearched(false); // Reset về chưa search
    onSearch([]); // Gửi mảng rỗng lên cha → Found 0 properties
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const updated = checked
        ? [...prev.amenities, value]
        : prev.amenities.filter((a) => a !== value);
      return { ...prev, amenities: updated };
    });
  };

  useEffect(() => {
    if (!hasSearched) {
      onSearch([]); // Lần đầu mở trang trả về 0 kết quả
      return;
    }
    // Nếu đã search, lọc dữ liệu
    let filtered = [...properties];

    if (filters.search) {
      const term = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          (p.description && p.description.toLowerCase().includes(term)) ||
          (p.amenities &&
            p.amenities.some((a) => a.toLowerCase().includes(term)))
      );
    }

    if (filters.area)
      filtered = filtered.filter((p) => p.area.toString() === filters.area);
    if (filters.price)
      filtered = filtered.filter((p) => p.price.toString() === filters.price);
    if (filters.location)
      filtered = filtered.filter((p) => p.location === filters.location);
    if (filters.category)
      filtered = filtered.filter((p) => p.category === filters.category);
    if (filters.type)
      filtered = filtered.filter((p) => p.type === filters.type);
    if (filters.bedrooms)
      filtered = filtered.filter(
        (p) => p.bedrooms === Number(filters.bedrooms)
      );
    if (filters.bathrooms)
      filtered = filtered.filter(
        (p) => p.bathrooms === Number(filters.bathrooms)
      );
    if (filters.furnished)
      filtered = filtered.filter((p) => p.furnished === filters.furnished);
    if (filters.amenities.length > 0) {
      filtered = filtered.filter((p) =>
        filters.amenities.every((a) => p.amenities.includes(a))
      );
    }

    if (filters.sort === "priceLowHigh")
      filtered.sort((a, b) => a.price - b.price);
    if (filters.sort === "priceHighLow")
      filtered.sort((a, b) => b.price - a.price);
    if (filters.sort === "newest")
      filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    if (filters.sort === "area") filtered.sort((a, b) => b.area - a.area);

    onSearch(filtered);
  }, [filters, properties, onSearch]);

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
  const furnishedList = useMemo(
    () => [...new Set(properties.map((p) => p.furnished))],
    [properties]
  );
  const bedroomsList = useMemo(
    () => [...new Set(properties.map((p) => p.bedrooms))],
    [properties]
  );
  const bathroomsList = useMemo(
    () => [...new Set(properties.map((p) => p.bathrooms))],
    [properties]
  );
  const amenitiesList = useMemo(
    () => [...new Set(properties.flatMap((p) => p.amenities || []))],
    [properties]
  );

  return (
    <div
      className="relative z-10 mt-6 p-6 rounded-xl shadow-2xl border border-gray-700 w-full max-w-7xl mx-auto"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search by title, location, keywords..."
          className="p-2 rounded-lg w-full sm:w-60 bg-white border border-gray-600 text-black"
        />

        <select
          name="area"
          value={filters.area}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Area</option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a} m²
            </option>
          ))}
        </select>

        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Price</option>
          {prices.map((p) => (
            <option key={p} value={p}>
              {formatPrice(p)}
            </option>
          ))}
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-52 bg-white border text-black"
        >
          <option value="">Location</option>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Type</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Bedrooms</option>
          {bedroomsList.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          name="bathrooms"
          value={filters.bathrooms}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Bathrooms</option>
          {bathroomsList.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          name="furnished"
          value={filters.furnished}
          onChange={handleChange}
          className="p-2 rounded-lg w-48 bg-white border text-black"
        >
          <option value="">Furnishing</option>
          {furnishedList.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>

        <select
          name="sort"
          value={filters.sort}
          onChange={handleChange}
          className="p-2 rounded-lg w-full sm:w-40 bg-white border text-black"
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="newest">Newest</option>
          <option value="area">Area</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {amenitiesList.map((a) => (
          <label
            key={a}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg cursor-pointer transition border border-white/30"
          >
            <input
              type="checkbox"
              value={a}
              checked={filters.amenities.includes(a)}
              onChange={handleAmenitiesChange}
              className="w-4 h-4 accent-lime-400"
            />
            <span className="text-white">{a}</span>
          </label>
        ))}
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded w-full sm:w-auto"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PropertySearchBar;
