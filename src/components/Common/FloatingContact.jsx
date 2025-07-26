import React from "react";

const FloatingContact = () => {
  const handleCall = () => {
    window.open("tel:19001881", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/84901234567", "_blank");
  };

  const handleMessenger = () => {
    window.open("https://m.me/realestatepro", "_blank");
  };

  return (
    <div className="floating-contact">
      <div className="flex flex-col space-y-2">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          title="Chat WhatsApp"
        >
          <i className="fab fa-whatsapp text-xl"></i>
        </button>
        <button
          onClick={handleMessenger}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          title="Chat Messenger"
        >
          <i className="fab fa-facebook-messenger text-xl"></i>
        </button>
        <button
          onClick={handleCall}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          title="Gọi ngay"
        >
          <i className="fas fa-phone text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
