import React, { useState } from "react";
import { formatPrice, formatDate, getStatusBadge } from "../../utils/helpers";

const PropertyCard = ({ property, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    console.log(
      `${!isFavorite ? "Added to" : "Removed from"} favorites:`,
      property.id
    );
  };

  return (
    <div
      className="property-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative block"
      onClick={() => onClick(property.id)}
    >
      {/* Trạng thái VIP/HOT/NEW */}
      {property.status && (
        <div className="absolute top-4 left-4 z-10">
          <span className={getStatusBadge(property.status)}>
            {property.status.toUpperCase()}
          </span>
        </div>
      )}

      {/* Nút yêu thích */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleFavoriteClick}
          className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
        >
          <i
            className={`${isFavorite ? "fas" : "far"} fa-heart text-red-600`}
          ></i>
        </button>
      </div>

      {/* Ảnh */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = process.env.PUBLIC_URL + "/img/placeholder.jpg";

          // e.target.src = "/img/placeholder.jpg"; // fallback image
        }}
      />

      {/* Nội dung */}
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
          {property.title}
        </h4>
        <p className="text-xl font-bold text-red-600 mb-2">
          {formatPrice(property.price)}
        </p>
        <p className="text-gray-600 mb-2 text-sm">
          <i className="fas fa-map-marker-alt mr-1"></i>
          {property.location}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
          <span>
            <i className="fas fa-bed mr-1"></i>
            {property.bedrooms} PN
          </span>
          <span>
            <i className="fas fa-bath mr-1"></i>
            {property.bathrooms} WC
          </span>
          <span>
            <i className="fas fa-expand-arrows-alt mr-1"></i>
            {property.area}m²
          </span>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>
            <i className="fas fa-user mr-1"></i>
            {property.agent}
          </span>
          <span>
            <i className="fas fa-clock mr-1"></i>
            {formatDate(property.dateAdded)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
