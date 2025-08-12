import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Introduction = () => {
  const coreValues = [
    {
      title: "Transparency",
      content: "Accurate and clear information",
      icon: 'https://cdn-icons-png.flaticon.com/512/1570/1570887.png'
    },
    {
      title: "Efficiency",
      content: "Fast and precise connections",
      icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png'
    },
    {
      title: "Reliability",
      content: "Strict verification, information security",
      icon: 'https://cdn-icons-png.flaticon.com/512/477/477103.png'
    },
    {
      title: "Innovation",
      content: "Applying advanced technology",
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png'
    },
  ];
  
  const achievements = [
    {
      title: "50,000+",
      content: "Listings daily"
    },
    {
      title: "2M+",
      content: "Active users"
    },
    {
      title: "63",
      content: "Provinces covered" 
    },
    {
      title: "95%",
      content: "Customer satisfaction" 
    }
  ];

  return (
    <div className="App font-sans bg-white">
      
      
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-gray-900 border-b border-gray-200 pb-6">
              About RealEstatePro
            </h1>

            <div className="text-gray-700 space-y-16">
              {/* Mission Section */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    RealEstatePro was founded with the mission to become Vietnam's leading real estate platform, making property buying, selling, and renting more transparent, efficient, and easier than ever before.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img
                    className="w-full rounded-xl shadow-lg"
                    alt="Real estate mission"
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
              </div>

              {/* Vision Section */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mt-20">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-left">
                    Our Vision
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed text-left">
                    We aim to build a comprehensive digital real estate community where all transactions are conducted quickly, safely, and with the best user experience.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img
                    className="w-full rounded-xl shadow-lg"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Real estate vision"
                  />
                </div>
              </div>

              {/* Core Values Section */}
              <div className="mt-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
                  Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coreValues.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center h-full"
                    >
                      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                        <img className="w-8 h-8" src={item.icon} alt={item.title} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="mt-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
                  Our Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {achievements.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white h-48 flex flex-col justify-center items-center border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all"
                    >
                      <p className="text-3xl font-bold text-red-600 mb-3">{item.title}</p>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mt-16">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Have questions?</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Email: <span className="text-red-600 font-medium">info@realestatepro.vn</span>
                  </p>
                  <p className="text-gray-600">
                    Phone: <span className="text-red-600 font-medium">1900 1881</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default Introduction;