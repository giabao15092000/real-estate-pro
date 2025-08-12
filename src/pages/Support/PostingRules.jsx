import React from "react";
import { FaBan, FaDollarSign, FaGavel } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PostingRules = () => {
  return (
    <div className="bg-white font-sans">
      

      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-red-600 border-b-4 border-red-600 inline-block pb-3">
                Posting Rules
              </h1>
              <p className="text-gray-600 mt-3">
                Please read and follow these rules carefully to ensure your property listings remain active and compliant.
              </p>
            </div>

            <div className="space-y-8">
              {/* Prohibited Content */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaBan className="text-red-600 mr-3 text-xl" /> Prohibited Content
                </h2>
                <p className="text-gray-700 mb-3">
                  Listings will be rejected or removed if they violate any of the following rules:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fake, fraudulent, or scam listings.</li>
                  <li>Listings already sold/rented but not updated.</li>
                  <li>Content unrelated to real estate.</li>
                  <li>False information about legality, area, or price.</li>
                  <li>Discriminatory or illegal content.</li>
                  <li>Advertising other services (brokerage, construction, etc.).</li>
                </ul>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  alt="Prohibited content"
                  className="mt-5 rounded-lg shadow-lg w-full h-56 object-cover"
                />
              </div>

              {/* Pricing Rules */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaDollarSign className="text-red-600 mr-3 text-xl" /> Pricing Rules
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete pricing (e.g., million, billion, or per m²).</li>
                  <li>Do not write "Negotiable" if an exact price is available.</li>
                  <li>Do not post prices as 0 or 1 currency unit.</li>
                  <li>Prices must be realistic and match market value.</li>
                </ul>
                <img
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad"
                  alt="Pricing rules"
                  className="mt-5 rounded-lg shadow-lg w-full h-56 object-cover"
                />
              </div>

              {/* Penalties */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaGavel className="text-red-600 mr-3 text-xl" /> Penalties
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Warning:</span> First violation.</p>
                  <p><span className="font-semibold">7-day Listing Suspension:</span> Second violation.</p>
                  <p><span className="font-semibold">30-day Account Suspension:</span> Third violation.</p>
                  <p><span className="font-semibold">Permanent Ban:</span> Severe or repeated violations.</p>
                </div>
                <p className="mt-4 text-gray-700">
                  For complaints, please contact{" "}
                  <span className="text-red-600 font-semibold">support@realestatepro.vn</span>
                </p>
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
                  alt="Penalty rules"
                  className="mt-5 rounded-lg shadow-lg w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default PostingRules;
