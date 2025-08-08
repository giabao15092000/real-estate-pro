import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HelpCenter = () => {
  return (
    <div className="App bg-gray-50 font-sans">
      
      
      <main className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Trung tâm trợ giúp</h1>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <i className="fas fa-search text-red-600 mr-3"></i>
                  Cách tìm kiếm bất động sản
                </h2>
                <div className="text-gray-600 space-y-3">
                  <p>1. Nhập từ khóa vào ô tìm kiếm (ví dụ: "căn hộ quận 1", "nhà mặt phố")</p>
                  <p>2. Sử dụng bộ lọc nâng cao để thu hẹp kết quả theo: giá, diện tích, loại BĐS</p>
                  <p>3. Nhấn nút "Tìm kiếm" hoặc ấn Enter</p>
                  <p>4. Xem chi tiết bằng cách nhấp vào tin đăng</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <i className="fas fa-phone text-red-600 mr-3"></i>
                  Cách liên hệ với chủ nhà
                </h2>
                <div className="text-gray-600 space-y-3">
                  <p>1. Tìm tin đăng bạn quan tâm</p>
                  <p>2. Nhấn nút "Liên hệ" trên trang chi tiết</p>
                  <p>3. Điền thông tin và nội dung bạn muốn hỏi</p>
                  <p>4. Nhấn "Gửi tin nhắn" - thông tin sẽ được gửi đến chủ nhà</p>
                  <p>Hoặc gọi trực tiếp số điện thoại hiển thị trên tin đăng</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <i className="fas fa-filter text-red-600 mr-3"></i>
                  Cách lọc kết quả tìm kiếm
                </h2>
                <div className="text-gray-600 space-y-3">
                  <p>1. Trên trang tìm kiếm, nhấn vào "Bộ lọc nâng cao"</p>
                  <p>2. Chọn các tiêu chí bạn quan tâm:</p>
                  <ul className="list-disc pl-5">
                    <li>Khoảng giá</li>
                    <li>Diện tích</li>
                    <li>Loại bất động sản</li>
                    <li>Tiện ích (chung cư)</li>
                    <li>Hướng nhà</li>
                  </ul>
                  <p>3. Nhấn "Áp dụng bộ lọc" để xem kết quả</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default HelpCenter;