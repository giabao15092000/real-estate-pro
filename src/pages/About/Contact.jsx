import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
return (
<div className="App bg-gray-50 font-sans">


text
  <main className="min-h-screen py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Liên hệ với chúng tôi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Thông tin liên hệ</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Trụ sở chính</h3>
                  <p className="text-gray-600">123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Điện thoại</h3>
                  <p className="text-gray-600">1900 1881 (Phòng kinh doanh)</p>
                  <p className="text-gray-600">028 1234 5678 (Phòng kỹ thuật)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <i className="fas fa-envelope text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@realestatepro.vn</p>
                  <p className="text-gray-600">support@realestatepro.vn (Hỗ trợ kỹ thuật)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <i className="fas fa-clock text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Giờ làm việc</h3>
                  <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                  <p className="text-gray-600">Thứ 7: 8:00 - 12:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <i className="fab fa-zalo text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gửi tin nhắn</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Họ và tên</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Nhập email của bạn"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Số điện thoại</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Nội dung</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Nhập nội dung bạn muốn gửi"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Bản đồ</h2>
          <div className="map-container mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4326002567447!2d106.69831731533414!3d10.776530192320445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0x5c4f3bfe8107e715!2zTmd1eeG7hW4gSHXhu4UsIFF1YW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1640995200000!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
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