import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaYoutube, FaLinkedin, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="App font-sans bg-white">
      
      
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-red-600 text-white py-12 rounded-xl mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you! Get in touch with our team.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Contact Information</h2>
                <img
                  src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern office reception desk"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Headquarters</h3>
                      <p className="text-gray-600">123 Nguyen Hue, Ben Nghe Ward, District 1, Ho Chi Minh City</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Phone</h3>
                      <p className="text-gray-600">1900 1881 (Business Department)</p>
                      <p className="text-gray-600">028 1234 5678 (Technical Support)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@realestatepro.vn</p>
                      <p className="text-gray-600">support@realestatepro.vn (Technical Support)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Working Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                      <FaYoutube className="text-xl" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                      <FaCommentDots className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Send Us a Message</h2>
                <img
                  src="https://images.unsplash.com/photo-1636751364472-12bfad09b451?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person typing a message on a laptop"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Our Location</h2>
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office building in a city"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4326002567447!2d106.69831731533414!3d10.776530192320445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0x5c4f3bfe8107e715!2zTmd1eeG7hW4gSHXhu4UsIFF1YW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1640995200000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default Contact;