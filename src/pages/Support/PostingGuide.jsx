import React from "react";
import { FaUser, FaUpload, FaImages, FaCheckCircle, FaFileAlt, FaClock } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PostingGuide = () => {
  const steps = [
    { icon: <FaUser />, text: "Log in to your account or sign up if you don't have one yet." },
    { icon: <FaUpload />, text: 'Click the "Post Listing" button on the menu bar.' },
    { icon: <FaFileAlt />, text: "Fill in all property details according to the form." },
    { icon: <FaImages />, text: "Upload at least 5 high-quality images (up to 20 images)." },
    { icon: <FaCheckCircle />, text: 'Review your information and click "Post Listing".' },
    { icon: <FaClock />, text: "Your listing will be reviewed within 2-4 hours." },
  ];

  return (
    <div className="bg-white font-sans">
      

      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-red-600 border-b-4 border-red-600 inline-block pb-3">
                Posting Guide
              </h1>
              <p className="text-gray-600 mt-3">
                Follow this step-by-step guide to create an attractive and effective property listing.
              </p>
            </div>

            <div className="space-y-8">
              {/* Step-by-step process */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Posting Process
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg">
                        {step.icon}
                      </div>
                      <p className="text-gray-700">{step.text}</p>
                    </div>
                  ))}
                </div>
                <img
                  src="https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Posting process"
                  className="mt-6 rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>

              {/* Image Requirements */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Image Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Quantity:</span> Minimum 5 images, maximum 20 images.
                  </li>
                  <li>
                    <span className="font-semibold">Format:</span> JPG, PNG (max 5MB per image).
                  </li>
                  <li>
                    <span className="font-semibold">Content:</span>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Front view and overall property photo.</li>
                      <li>Living room, bedrooms, kitchen, bathrooms.</li>
                      <li>Nearby facilities and amenities (if available).</li>
                      <li>No blurry or unrelated images.</li>
                    </ul>
                  </li>
                </ul>
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                  alt="Image requirements"
                  className="mt-6 rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>

              {/* Writing a good description */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  How to Write an Attractive Description
                </h2>
                <p className="mb-2">
                  <span className="font-semibold">Title:</span> Short and highlight main selling points (e.g., "2BR Fully Furnished Apartment, Beautiful View, Downtown").
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Content:</span>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Describe the property in detail.</li>
                  <li>List all amenities and furniture.</li>
                  <li>Highlight convenient location details.</li>
                  <li>Include pricing and promotions (if any).</li>
                </ul>
                <p className="mt-3">
                  <span className="font-semibold">Note:</span> Avoid abbreviations, slang, or inappropriate language.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                  alt="Writing description"
                  className="mt-6 rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default PostingGuide;
