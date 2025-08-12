import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { LightningFill, GraphUp, HeartFill, Building, GeoAlt, Clock, Envelope } from 'react-bootstrap-icons';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      department: "Technology",
      location: "Ho Chi Minh City",
      type: "Full-time",
      description: "Develop user interfaces for RealEstatePro products using ReactJS and related technologies."
    },
    {
      title: "Real Estate Consultant",
      department: "Business",
      location: "Hanoi",
      type: "Full-time",
      description: "Advise and assist customers in the process of buying, selling, and renting properties on our platform."
    },
    {
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      description: "Create content about the real estate market, service usage guides, and related articles."
    }
  ];

  return (
    <div className="App font-sans bg-white">
      
      
      <main className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="bg-red-600 text-white py-12 mb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career With Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Join RealEstatePro and help shape the future of real estate technology</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-700 space-y-16">
              {/* Why Work Here Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <span className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-2xl">✨</span>
                  </span>
                  Why Work at RealEstatePro?
                </h2>
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaborating in a modern office"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <LightningFill className="text-red-600 text-xl" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg text-gray-900">Dynamic Environment</h3>
                    <p className="text-gray-600">Work with young, creative and passionate colleagues in a fast-paced startup culture</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <GraphUp className="text-red-600 text-xl" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg text-gray-900">Growth Opportunities</h3>
                    <p className="text-gray-600">Continuous training and clear career advancement paths with mentorship programs</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <HeartFill className="text-red-600 text-xl" />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg text-gray-900">Attractive Benefits</h3>
                    <p className="text-gray-600">Competitive salary, comprehensive insurance, flexible hours and annual company trips</p>
                  </div>
                </div>
              </div>
              
              {/* Job Openings Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <span className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-2xl">💼</span>
                  </span>
                  Current Open Positions
                </h2>
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Job interview in a professional setting"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="space-y-6">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all bg-white group">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-red-600 group-hover:text-red-700 transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                            <span className="flex items-center"><Building className="text-gray-500 mr-2" /> {job.department}</span>
                            <span className="flex items-center"><GeoAlt className="text-gray-500 mr-2" /> {job.location}</span>
                            <span className="flex items-center"><Clock className="text-gray-500 mr-2" /> {job.type}</span>
                          </div>
                        </div>
                        <button className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all font-medium shadow-sm hover:shadow-md">
                          Apply Now
                        </button>
                      </div>
                      <p className="mt-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-6">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* How to Apply Section */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <Envelope className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">How To Apply</h3>
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Person writing a job application"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 mb-3">Send your CV and cover letter to our HR department:</p>
                    <p className="text-red-600 font-medium text-lg mb-4">hr@realestatepro.vn</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 font-medium">Email subject format:</p>
                      <p className="text-gray-800 font-mono">[Position] - [Full Name] - [Years of Experience]</p>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">We typically respond within 3-5 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default Careers;