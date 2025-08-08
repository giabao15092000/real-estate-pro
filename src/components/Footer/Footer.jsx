import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: "https://www.facebook.com/",
      youtube: "https://youtube.com/realestatepro",
      zalo: "https://chat.zalo.me/",
    };
    window.open(urls[platform], "_blank");
  };

  const handleAppDownload = (store) => {
    const urls = {
      appstore: "https://apps.apple.com/app/realestatepro",
      playstore:
        "https://play.google.com/store/apps/details?id=com.realestatepro",
    };
    window.open(urls[store], "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-home text-3xl text-rose-400"></i>
              <h4 className="text-2xl font-bold">RealEstatePro</h4>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Vietnam's leading real estate platform, connecting millions of
              buyers and sellers.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick("facebook")}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-110"
                title="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button
                onClick={() => handleSocialClick("youtube")}
                className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-transform transform hover:scale-110"
                title="YouTube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </button>
              <button
                onClick={() => handleSocialClick("zalo")}
                className="p-2 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-110"
                title="Zalo"
              >
                <img
                  src="data:image/png;base64,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"
                  alt="Zalo"
                  className="w-7 h-7 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold mb-4 border-b-2 border-rose-400 inline-block pb-1">
              Customer Support
            </h5>
            <ul className="space-y-2 text-gray-300">
              {[
                { text: "Help Center", link: "/support/help-center" },
                { text: "Posting Guide", link: "/support/posting-guide" },
                { text: "Posting Rules", link: "/support/posting-rules" },
                { text: "FAQs", link: "/support/faq" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.link}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h5 className="text-lg font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
              About Us
            </h5>
            <ul className="space-y-2 text-gray-300">
              {[
                { text: "Introduction", link: "/about/introduction" },
                { text: "Careers", link: "/about/careers" },
                { text: "Contact", link: "/about/contact" },
                { text: "Privacy Policy", link: "/about/privacy-policy" },
                { text: "Terms of Service", link: "/about/terms-of-service" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.link}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h5 className="text-lg font-semibold mb-4 border-b-2 border-green-400 inline-block pb-1">
              Download the App
            </h5>
            <p className="text-gray-300 mb-4">
              Download the app for a better experience
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleAppDownload("appstore")}
                className="flex items-center bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 px-4 py-2 rounded-lg transition-colors w-full shadow-md"
              >
                <i className="fab fa-apple text-2xl mr-3 text-white"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button
                onClick={() => handleAppDownload("playstore")}
                className="flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-4 py-2 rounded-lg transition-colors w-full shadow-md"
              >
                <i className="fab fa-google-play text-2xl mr-3 text-white"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-200">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} RealEstatePro. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <Link
                to="/about/privacy-policy"
                className="hover:text-rose-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about/terms-of-service"
                className="hover:text-rose-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-rose-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="text-xs text-gray-400 space-y-1">
            <p>REALESTATEPRO VIETNAM CO., LTD</p>
            <p>
              Address: 123 Nguyen Hue Street, Ben Nghe Ward, District 1, HCMC
            </p>
            <p>Phone: 0961542616 | Email: support@realestatepro.vn</p>
            <p>
              Business License No.: 0123456789 issued by HCMC Department of
              Planning and Investment on 01/01/2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
