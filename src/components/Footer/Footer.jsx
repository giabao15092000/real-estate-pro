import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: "https://facebook.com/realestatepro",
      youtube: "https://youtube.com/realestatepro",
      zalo: "https://zalo.me/realestatepro",
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
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-home text-2xl text-red-400"></i>
              <h4 className="text-xl font-bold">RealEstatePro</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Nền tảng bất động sản hàng đầu Việt Nam, kết nối hàng triệu người
              mua và bán bất động sản.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick("facebook")}
                className="text-gray-400 hover:text-white transition-colors"
                title="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button
                onClick={() => handleSocialClick("youtube")}
                className="text-gray-400 hover:text-white transition-colors"
                title="YouTube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </button>
              <button
                onClick={() => handleSocialClick("zalo")}
                className="text-gray-400 hover:text-white transition-colors"
                title="Zalo"
              >
                <i className="fab fa-zalo text-xl"></i>
              </button>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Hỗ trợ khách hàng</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hướng dẫn đăng tin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Quy định đăng tin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Về chúng tôi</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Tải ứng dụng</h5>
            <p className="text-gray-400 mb-4">
              Tải ứng dụng để trải nghiệm tốt hơn
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleAppDownload("appstore")}
                className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors w-full"
              >
                <i className="fab fa-apple text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Tải trên</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button
                onClick={() => handleAppDownload("playstore")}
                className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors w-full"
              >
                <i className="fab fa-google-play text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Tải trên</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} RealEstatePro. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="text-xs text-gray-500 space-y-1">
            <p>CÔNG TY TNHH REALESTATEPRO VIỆT NAM</p>
            <p>
              Địa chỉ: 123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM
            </p>
            <p>Điện thoại: 1900 1881 | Email: support@realestatepro.vn</p>
            <p>
              Giấy phép kinh doanh số: 0123456789 do Sở KH&ĐT TP.HCM cấp ngày
              01/01/2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
