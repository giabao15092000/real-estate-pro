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
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {property.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative mb-4">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  {property.status && (
                    <span className={getStatusBadge(property.status)}>
                      {property.status.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(property.images || []).map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Image ${index + 1}`}
                    className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="price-badge text-white p-4 rounded-lg mb-6">
                <p className="text-3xl font-bold">
                  {formatPrice(property.price)}
                </p>
                <p className="text-sm opacity-90">
                  {property.type === "rent" ? "VNĐ/tháng" : "VNĐ"}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-home text-red-600 mr-3"></i>
                  <span>{getCategoryName(property.category)}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-bed text-red-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.bedrooms}</p>
                  <p className="text-sm text-gray-600">Phòng ngủ</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-bath text-red-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.bathrooms}</p>
                  <p className="text-sm text-gray-600">Phòng tắm</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-expand-arrows-alt text-red-600 text-xl mb-2"></i>
                  <p className="font-semibold">{property.area}m²</p>
                  <p className="text-sm text-gray-600">Diện tích</p>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold mb-3">Mô tả:</h5>
                <p className="text-gray-700">{property.description}</p>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold mb-3">Tiện ích:</h5>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Thông tin liên hệ:</h5>
                <div className="flex items-center mb-2">
                  <i className="fas fa-user text-red-600 mr-3"></i>
                  <span>{property.agent}</span>
                </div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-phone text-red-600 mr-3"></i>
                  <span>{property.phone}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCall}
                    className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <i className="fas fa-phone mr-2"></i>Gọi ngay
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
