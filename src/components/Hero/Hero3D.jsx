import React, { useState } from "react";
import PropertySearchBar from "./PropertySearchBar";
import { properties } from "../../data/properties";
import PropertyCard from "../Properties/PropertyCard";
import PropertyModal from "../Properties/PropertyModal";

const Hero3D = () => {
  const [filteredData, setFilteredData] = useState(properties);
  const [selectedId, setSelectedId] = useState(null);

  const selectedProperty = filteredData.find((p) => p.id === selectedId);

  return (
    <>
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/hero-bg.webp)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-end justify-center pb-4 px-4">
          <PropertySearchBar
            properties={properties}
            onSearch={setFilteredData}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Tìm thấy {filteredData.length} bất động sản
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
            <p className="text-center text-gray-500">
              Không tìm thấy bất động sản nào phù hợp.
            </p>
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
