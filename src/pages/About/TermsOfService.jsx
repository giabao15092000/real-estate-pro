import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const TermsOfService = () => {
  return (
    <div className="App bg-gray-50 font-sans">
      
      
      <main className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Điều khoản sử dụng</h1>
            
            <div className="text-gray-700 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Giới thiệu</h2>
                <p>Bằng việc sử dụng dịch vụ của RealEstatePro, bạn đồng ý với các điều khoản sử dụng được quy định dưới đây. Vui lòng đọc kỹ trước khi sử dụng.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Điều kiện sử dụng</h2>
                <p>Khi sử dụng RealEstatePro, bạn cam kết:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Cung cấp thông tin chính xác, trung thực</li>
                  <li>Không đăng tin giả mạo, sai sự thật</li>
                  <li>Không sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                  <li>Không can thiệp, phá hoại hệ thống</li>
                  <li>Chịu trách nhiệm về mọi hoạt động dưới tài khoản của mình</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Quyền và trách nhiệm</h2>
                <p><span className="font-semibold">Quyền của RealEstatePro:</span></p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Kiểm duyệt, từ chối hoặc xóa tin đăng không phù hợp</li>
                  <li>Tạm ngưng hoặc chấm dứt tài khoản vi phạm</li>
                  <li>Thay đổi điều khoản sau khi thông báo</li>
                </ul>
                
                <p className="mt-4"><span className="font-semibold">Trách nhiệm người dùng:</span></p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Bảo mật thông tin tài khoản</li>
                  <li>Bồi thường thiệt hại nếu vi phạm gây tổn thất</li>
                  <li>Tuân thủ pháp luật Việt Nam</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Thanh toán và phí dịch vụ</h2>
                <p>Các dịch vụ có phí sẽ được thông báo rõ ràng trước khi sử dụng. Bạn đồng ý thanh toán đầy đủ các khoản phí phát sinh.</p>
                <p className="mt-2">Phương thức thanh toán: Chuyển khoản ngân hàng, ví điện tử, thẻ tín dụng.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Giới hạn trách nhiệm</h2>
                <p>RealEstatePro không chịu trách nhiệm về:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nội dung tin đăng từ người dùng</li>
                  <li>Giao dịch giữa người mua và người bán</li>
                  <li>Thiệt hại do sự cố kỹ thuật ngoài kiểm soát</li>
                  <li>Hậu quả từ việc sử dụng sai mục đích</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Giải quyết tranh chấp</h2>
                <p>Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng. Nếu không đạt được thỏa thuận, vụ việc sẽ được giải quyết tại Tòa án có thẩm quyền tại TP.HCM.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Hiệu lực điều khoản</h2>
                <p>Điều khoản này có hiệu lực từ ngày 01/01/2024. Chúng tôi có quyền sửa đổi, bổ sung và sẽ thông báo trước 15 ngày khi có thay đổi quan trọng.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-8">
                <p className="font-medium">Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ:</p>
                <p className="mt-2">Email: <span className="text-red-600">legal@realestatepro.vn</span></p>
                <p>Địa chỉ: 123 Nguyễn Huệ, Q.1, TP.HCM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default TermsOfService;