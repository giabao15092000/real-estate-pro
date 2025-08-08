import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Introduction = () => {
return (
<div className="App bg-gray-50 font-sans">


text
  <main className="min-h-screen py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Giới thiệu về RealEstatePro</h1>
        
        <div className="text-gray-700 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Sứ mệnh của chúng tôi</h2>
            <p>RealEstatePro ra đời với sứ mệnh trở thành nền tảng kết nối bất động sản hàng đầu Việt Nam, giúp việc mua bán, cho thuê bất động sản trở nên minh bạch, hiệu quả và dễ dàng hơn bao giờ hết.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Tầm nhìn</h2>
            <p>Chúng tôi hướng tới việc xây dựng một cộng đồng bất động sản số hóa toàn diện, nơi mọi giao dịch được thực hiện nhanh chóng, an toàn với trải nghiệm người dùng tốt nhất.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Giá trị cốt lõi</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Minh bạch:</span> Thông tin chính xác, rõ ràng</li>
              <li><span className="font-semibold">Hiệu quả:</span> Kết nối nhanh chóng, chính xác</li>
              <li><span className="font-semibold">Đáng tin cậy:</span> Kiểm duyệt nghiêm ngặt, bảo mật thông tin</li>
              <li><span className="font-semibold">Đổi mới:</span> Ứng dụng công nghệ tiên tiến</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Thành tựu</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">50.000+</p>
                <p className="text-gray-600">Tin đăng mỗi tháng</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">2.000.000+</p>
                <p className="text-gray-600">Người dùng</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">63</p>
                <p className="text-gray-600">Tỉnh thành phủ sóng</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">95%</p>
                <p className="text-gray-600">Hài lòng từ khách hàng</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <p className="font-medium">Mọi thắc mắc, vui lòng liên hệ:</p>
            <p className="mt-2">Email: <span className="text-red-600">info@realestatepro.vn</span></p>
            <p>Điện thoại: <span className="text-red-600">1900 1881</span></p>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  
</div>
);
};

export default Introduction;