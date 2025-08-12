import React, { useState, useEffect } from "react";

import PropertySearchBar from "./PropertySearchBar";
import propertiesData from "../../data/properties.json"; // Lấy trực tiếp từ JSON
import PropertyCard from "../Properties/PropertyCard";
import PropertyModal from "../Properties/PropertyModal";

const Hero3D = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [, setFade] = useState(true);

  const selectedProperty = filteredData.find((p) => p.id === selectedId);
  // Danh sách 3 ảnh nền
  const backgrounds = [
    `${process.env.PUBLIC_URL}/img/hero-bg1.webp`,
    `${process.env.PUBLIC_URL}/img/hero-bg2.webp`,
    `${process.env.PUBLIC_URL}/img/hero-bg3.webp`,
  ];

  // Đổi ảnh nền 5 giây/lần với fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(true); // fade in
      }, 500); // thời gian fade out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          filter: "brightness(1.2)", // tăng 20% độ sáng
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-end justify-center pb-4 px-4">
          <PropertySearchBar
            properties={propertiesData}
            onSearch={setFilteredData}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Found {filteredData.length} properties
          </h2>

          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={setSelectedId}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No results</p>
          )}
        </div>
      </section>

      {selectedProperty && (
        <PropertyModal
          isOpen={selectedId !== null}
          property={selectedProperty}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
};

export default Hero3D;
