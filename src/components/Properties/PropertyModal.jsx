import React from "react";
import {
  formatPrice,
  getCategoryName,
  getStatusBadge,
} from "../../utils/helpers";

const PropertyModal = ({ property, isOpen, onClose }) => {
  if (!isOpen || !property) return null;

  const handleCall = () => {
    window.open(`tel:${property.phone}`, "_self");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/84${property.phone.substring(1)}`, "_blank");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white shadow-xl rounded-2xl max-w-6xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b pb-3">
            <h3 className="text-2xl font-bold text-gray-800">
              {property.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Images */}
            <div>
              <div className="relative mb-4">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-80 object-cover rounded-xl border border-gray-200"
                />
                {property.status && (
                  <div className="absolute top-4 left-4">
                    <span className={getStatusBadge(property.status)}>
                      {property.status.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {property.images?.map((img, idx) => {
                  const cleanUrl = img.split("?")[0]; // bỏ phần query string
                  return (
                    <a
                      key={idx}
                      href={cleanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-20 object-cover rounded-lg border border-gray-200 cursor-pointer hover:opacity-80 transition"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Google Maps Iframe */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-gray-800">
                  Location Map:
                </h5>
                <iframe
                  title="Property Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    property.location
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-64 rounded-lg border border-gray-200"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right: Details */}
            <div>
              {/* Price */}
              <div className="bg-gradient-to-r from-green-500 to-lime-500 text-white p-4 rounded-xl mb-6 shadow-md">
                <p className="text-3xl font-bold">
                  {formatPrice(property.price)}
                </p>
              </div>

              {/* Basic Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-map-marker-alt text-green-600 mr-3"></i>
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-home text-green-600 mr-3"></i>
                  <span>{getCategoryName(property.category)}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                  <i className="fas fa-bed text-green-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.bedrooms}</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                  <i className="fas fa-bath text-green-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.bathrooms}</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                  <i className="fas fa-expand-arrows-alt text-green-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.area}m²</p>
                  <p className="text-sm text-gray-600">Area</p>
                </div>
                {/* Extra specs */}
                <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                  <i className="fas fa-layer-group text-green-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.floor || "N/A"}</p>
                  <p className="text-sm text-gray-600">Floor</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                  <i className="fas fa-couch text-green-600 text-xl mb-2"></i>
                  <p className="font-semibold">
                    {property.furnishing || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">Furnishing</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3 text-gray-800">
                  Description:
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3 text-gray-800">Amenities:</h5>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
                <h5 className="font-semibold mb-3 text-gray-800">
                  Contact Information:
                </h5>
                <div className="flex items-center mb-2 text-gray-700">
                  <i className="fas fa-user text-green-600 mr-3"></i>
                  <span>{property.agent}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                  <i className="fas fa-phone text-green-600 mr-3"></i>
                  <span>{property.phone}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCall}
                    className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-phone mr-2"></i>Call Now
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600 transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>Chat
                  </button>
                </div>
              </div>

              {/* Schedule Visit Form (static UI) */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold mb-3 text-gray-800">
                  Schedule a Visit:
                </h5>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-lime-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-lime-400"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-lime-400"
                  />
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-lime-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-lime-400"
                  ></textarea>
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
