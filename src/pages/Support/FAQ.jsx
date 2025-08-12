import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaComments } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I register an account?",
      answer: "Click the 'Sign Up' button in the top right corner, fill in the required information, and verify your email/phone number to complete.",
      image: "https://plus.unsplash.com/premium_photo-1665329006696-12a941e600a1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      question: "Why is my listing not displayed?",
      answer: "Listings require review within 2-4 hours. If it exceeds this time, your listing may have violated regulations. Please check your email or contact support.",
      image: "https://plus.unsplash.com/premium_photo-1706191097317-ed31a9db1ae7?q=80&w=805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      question: "Can I edit my listing after posting?",
      answer: "Yes, you can edit your listing in the 'Manage Listings' section. Edited listings will be reviewed again within 1-2 hours.",
      image: "https://plus.unsplash.com/premium_photo-1661373719922-c104ddbf6d87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      question: "How do I upgrade my listing to VIP?",
      answer: "Go to 'Manage Listings,' select the listing you want to upgrade, and click 'Upgrade to VIP.' Follow the payment instructions to prioritize your listing.",
      image: "https://plus.unsplash.com/premium_photo-1700675175408-5fe0d5851e57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      question: "What should I do if I forget my password?",
      answer: "Click 'Forgot Password' on the login page, enter your registered email to receive a link to reset your password.",
      image: "https://images.unsplash.com/photo-1634224143538-ce0221abf732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      question: "How can I contact the landlord?",
      answer: "Find the listing you're interested in, click 'Contact,' and fill in the information. You can also directly call the phone number displayed on the listing.",
      image: "https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      question: "How many listings can I post per month?",
      answer: "Regular accounts can post up to 5 listings/month. You can upgrade to a VIP account to post unlimited listings.",
      image: "https://plus.unsplash.com/premium_photo-1722161759298-dfceacb67bf7?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      <main className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-8 text-red-600 border-b-4 border-red-600 pb-4 text-center">
              Frequently Asked Questions
            </h1>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start"
                >
                  <img
                    src={faq.image}
                    alt={faq.question}
                    className="w-24 h-24 mr-4 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <FaQuestionCircle className="text-red-600 mr-3" />
                      {faq.question}
                    </h2>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
              
              <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Question Icon"
                    className="mr-3 w-6 h-6"
                  />
                  Can't find your answer?
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have other questions, please contact us:
                </p>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <FaEnvelope className="text-red-600 mr-3" />
                    <span>
                      Email: <span className="text-red-600 font-medium">support@realestatepro.com</span>
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FaPhoneAlt className="text-red-600 mr-3" />
                    <span>
                      Hotline: <span className="text-red-600 font-medium">1-800-1881</span> (8:00 AM - 5:00 PM daily)
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FaComments className="text-red-600 mr-3" />
                    <span>
                      Live Chat: Click the chat icon in the bottom right corner of the screen
                    </span>
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

export default FAQ;