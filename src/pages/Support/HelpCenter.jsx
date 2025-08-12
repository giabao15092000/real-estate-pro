import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaSearch, FaPhoneAlt, FaFilter } from 'react-icons/fa';

const HelpCenter = () => {
  const helpItems = [
    {
      title: 'How to Search for Properties',
      icon: <FaSearch className="text-red-600 text-2xl mr-3" />,
      img: 'https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      steps: [
        'Enter keywords in the search bar (e.g., "apartment district 1", "street-front house")',
        'Use advanced filters to narrow results by: price, area, property type',
        'Click the "Search" button or press Enter',
        'View details by clicking on a listing',
      ],
    },
    {
      title: 'How to Contact the Landlord',
      icon: <FaPhoneAlt className="text-red-600 text-2xl mr-3" />,
      img: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=880&auto=format&fit=crop',
      steps: [
        "Find the listing you're interested in",
        'Click the "Contact" button on the listing details page',
        'Fill in your information and message content',
        'Click "Send Message" - the information will be sent to the landlord',
        'Or call the phone number displayed on the listing directly',
      ],
    },
    {
      title: 'How to Filter Search Results',
      icon: <FaFilter className="text-red-600 text-2xl mr-3" />,
      img: 'https://plus.unsplash.com/premium_photo-1679082305850-63541e846a4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      steps: [
        'On the search page, click "Advanced Filters"',
        'Select the criteria you care about:',
        <ul className="list-disc pl-6 text-gray-700">
          <li>Price range</li>
          <li>Area</li>
          <li>Property type</li>
          <li>Amenities (for apartments)</li>
          <li>House orientation</li>
        </ul>,
        'Click "Apply Filters" to view results',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      

      {/* Main Section */}
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-red-600 border-b-4 border-red-600 inline-block pb-3">
              Help Center
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Find quick answers to your questions about searching, contacting landlords, and filtering results.
            </p>
          </div>

          {/* Help Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                    {item.icon}
                    {item.title}
                  </h2>
                  <div className="space-y-2 text-gray-600">
                    {item.steps.map((step, i) => (
                      <p key={i} className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">{i + 1}.</span>
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default HelpCenter;
