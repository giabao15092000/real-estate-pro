import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  ScaleIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { FaHandshake } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="App font-sans bg-white">
      
      
      <main className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="bg-red-600 text-white py-12 mb-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl">Please read these terms carefully before using our services</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-700 space-y-10">
              {/* Section 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">1. Introduction</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Legal document on a desk"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>Welcome to our Terms of Service. These terms outline the rules and regulations for using our website and services.</p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">2. Privacy & Security</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Digital security lock on a laptop"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>We value your privacy and are committed to protecting your personal information.</p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <ScaleIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">3. Rights & Responsibilities</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Scales of justice"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>Users must follow our guidelines and respect the rights of others while using our services.</p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CreditCardIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">4. Payments & Billing</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Credit card payment"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>Payments must be made promptly and securely. Late payments may result in service suspension.</p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <ExclamationCircleIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">5. Limitations of Liability</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Warning sign on a document"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>We are not liable for damages arising from the use of our services, except where required by law.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaHandshake className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">6. Dispute Resolution</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Handshake agreement"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>Disputes will be prioritized through negotiation. If unresolved, cases will be settled at the competent court in Ho Chi Minh City.</p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CalendarIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">7. Terms Validity</h2>
                </div>
                <div className="md:w-3/4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1721931904143-2896431c980c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Calendar and clock on a desk"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p>These terms are effective from January 1, 2024. We reserve the right to modify them and will provide 15 days notice for significant changes.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-red-50 p-6 rounded-lg mt-8 border border-red-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Questions About Our Terms?</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    Email: <span className="text-red-600 font-medium">legal@realestatepro.vn</span>
                  </p>
                  <p className="text-gray-700">
                    Address: 123 Nguyen Hue, District 1, Ho Chi Minh City
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

export default TermsOfService;