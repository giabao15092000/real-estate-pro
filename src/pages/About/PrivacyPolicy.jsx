import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ShieldCheckIcon, LockClosedIcon, DocumentTextIcon, ShareIcon, UserIcon, BellIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
  return (
    <div className="App font-sans bg-white">
      <main className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="bg-red-600 text-white py-12 mb-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl">Your data security is our top priority</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-gray-700 space-y-8">
                
                {/* Section 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <DocumentTextIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">1. Information Collection</h2>
                  </div>
                  <div className="md:w-3/4">
                    <p>We collect personal information when you:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>Register an account on RealEstatePro</li>
                      <li>Post property listings</li>
                      <li>Contact property owners through our system</li>
                      <li>Use our other services</li>
                    </ul>
                    <p className="mt-3">Collected information may include: name, email, phone number, address...</p>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                      alt="Data collection" 
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Section 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <BellIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">2. Information Usage</h2>
                  </div>
                  <div className="md:w-3/4">
                    <p>Personal information is used to:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>Provide and improve our services</li>
                      <li>Verify user identity</li>
                      <li>Contact you when necessary</li>
                      <li>Prevent fraudulent activities</li>
                      <li>Send important service notifications</li>
                    </ul>
                    <img 
                      src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Information usage" 
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Section 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <LockClosedIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">3. Data Security</h2>
                  </div>
                  <div className="md:w-3/4">
                    <p>We implement security measures including:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>Encryption of sensitive data</li>
                      <li>Limited information access</li>
                      <li>Regular security audits</li>
                      <li>Compliance with international security standards</li>
                    </ul>
                    <p className="mt-3">However, no method of electronic transmission or storage is 100% secure.</p>
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                      alt="Data security" 
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Section 4 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <ShareIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">4. Information Sharing</h2>
                  </div>
                  <div className="md:w-3/4">
                    <p>We do not sell or rent your personal information to third parties. Information is only shared when:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>You give explicit consent</li>
                      <li>Required by legal authorities</li>
                      <li>With service providers bound by confidentiality agreements</li>
                      <li>Necessary to protect RealEstatePro's rights or safety</li>
                    </ul>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                      alt="Information sharing" 
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Section 5 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <UserIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">5. User Rights</h2>
                  </div>
                  <div className="md:w-3/4">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>Access and edit your personal information</li>
                      <li>Request cessation of data usage</li>
                      <li>File complaints about data handling</li>
                      <li>Delete your account and personal data</li>
                    </ul>
                    <img 
                      src="https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80" 
                      alt="User rights" 
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Section 6 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <ShieldCheckIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">6. Policy Updates</h2>
                  </div>
                  <div className="md:w-3/4">
                    <p>We may update this policy periodically. Significant changes will be notified via email or website announcements.</p>
                    <img 
                      src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80" 
                      alt="Policy updates" 
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Contact Section */}
                <div className="bg-red-50 p-6 rounded-lg mt-8 border border-red-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Privacy Questions?</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Email: <span className="text-red-600 font-medium">privacy@realestatepro.vn</span>
                    </p>
                    <p className="text-gray-700">
                      Phone: <span className="text-red-600 font-medium">1900 1881</span> (Privacy Department)
                    </p>
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

export default PrivacyPolicy;
