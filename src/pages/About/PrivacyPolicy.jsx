import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="App bg-gray-50 font-sans">
      
      
      <main className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Chính sách bảo mật</h1>
            
            <div className="text-gray-700 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Thu thập thông tin</h2>
                <p>Chúng tôi thu thập thông tin cá nhân khi bạn:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Đăng ký tài khoản trên RealEstatePro</li>
                  <li>Đăng tin bất động sản</li>
                  <li>Liên hệ với chủ nhà qua hệ thống</li>
                  <li>Sử dụng các dịch vụ khác của chúng tôi</li>
                </ul>
                <p className="mt-2">Các thông tin thu thập có thể bao gồm: họ tên, email, số điện thoại, địa chỉ...</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Sử dụng thông tin</h2>
                <p>Thông tin cá nhân được sử dụng để:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Cung cấp và cải thiện dịch vụ</li>
                  <li>Xác minh danh tính người dùng</li>
                  <li>Liên hệ khi cần thiết</li>
                  <li>Ngăn chặn các hành vi gian lận</li>
                  <li>Gửi thông báo quan trọng về dịch vụ</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Bảo mật thông tin</h2>
                <p>Chúng tôi áp dụng các biện pháp bảo mật bao gồm:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Mã hóa dữ liệu nhạy cảm</li>
                  <li>Giới hạn quyền truy cập thông tin</li>
                  <li>Kiểm tra bảo mật định kỳ</li>
                  <li>Tuân thủ các tiêu chuẩn bảo mật quốc tế</li>
                </ul>
                <p className="mt-2">Tuy nhiên, không có phương pháp truyền tải hay lưu trữ điện tử nào là an toàn tuyệt đối.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Chia sẻ thông tin</h2>
                <p>Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba. Thông tin chỉ được chia sẻ trong các trường hợp:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Có sự đồng ý của bạn</li>
                  <li>Theo yêu cầu pháp lý từ cơ quan nhà nước</li>
                  <li>Với các đối tác cung cấp dịch vụ cho RealEstatePro (với cam kết bảo mật)</li>
                  <li>Khi cần bảo vệ quyền lợi, tài sản hoặc an toàn của RealEstatePro</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Quyền lợi người dùng</h2>
                <p>Bạn có quyền:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Truy cập và chỉnh sửa thông tin cá nhân</li>
                  <li>Yêu cầu ngừng sử dụng thông tin</li>
                  <li>Khiếu nại về việc sử dụng thông tin</li>
                  <li>Xóa tài khoản và dữ liệu cá nhân</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Thay đổi chính sách</h2>
                <p>Chúng tôi có thể cập nhật chính sách này theo thời gian. Các thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo trên website.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-8">
                <p className="font-medium">Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ:</p>
                <p className="mt-2">Email: <span className="text-red-600">privacy@realestatepro.vn</span></p>
                <p>Điện thoại: <span className="text-red-600">1900 1881</span> (Phòng bảo mật)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default PrivacyPolicy;