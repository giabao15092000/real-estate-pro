import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const FAQ = () => {
const faqs = [
{
question: "Làm cách nào để đăng ký tài khoản?",
answer: "Nhấn vào nút 'Đăng ký' ở góc trên bên phải, điền đầy đủ thông tin theo yêu cầu và xác minh email/SĐT để hoàn tất."
},
{
question: "Tại sao tin đăng của tôi không hiển thị?",
answer: "Tin đăng cần được kiểm duyệt trong 2-4 giờ. Nếu quá thời gian này, có thể tin đã vi phạm quy định. Vui lòng kiểm tra email hoặc liên hệ hỗ trợ."
},
{
question: "Tôi có thể chỉnh sửa tin đăng sau khi đăng không?",
answer: "Có, bạn có thể chỉnh sửa tin đăng trong mục 'Quản lý tin đăng'. Tin sau chỉnh sửa sẽ được kiểm duyệt lại trong 1-2 giờ."
},
{
question: "Làm sao để nâng cấp tin đăng lên VIP?",
answer: "Vào mục 'Quản lý tin đăng', chọn tin muốn nâng cấp và nhấn 'Nâng cấp VIP'. Thanh toán phí theo hướng dẫn để tin được ưu tiên hiển thị."
},
{
question: "Tôi quên mật khẩu phải làm sao?",
answer: "Nhấn vào 'Quên mật khẩu' tại trang đăng nhập, nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu mới."
},
{
question: "Làm thế nào để liên hệ với chủ nhà?",
answer: "Tìm tin đăng bạn quan tâm, nhấn nút 'Liên hệ' và điền thông tin. Bạn cũng có thể gọi trực tiếp số điện thoại hiển thị trên tin đăng."
},
{
question: "Tôi có thể đăng bao nhiêu tin mỗi tháng?",
answer: "Tài khoản thường được đăng tối đa 5 tin/tháng. Bạn có thể nâng cấp tài khoản VIP để đăng không giới hạn số lượng tin."
}
];

return (
<div className="App bg-gray-50 font-sans">


text
  <main className="min-h-screen py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Câu hỏi thường gặp</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <i className="fas fa-question-circle text-red-600 mr-3"></i>
                {faq.question}
              </h2>
              <p className="text-gray-600 pl-9">{faq.answer}</p>
            </div>
          ))}
          
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Không tìm thấy câu trả lời?</h2>
            <p className="text-gray-600 mb-4">Nếu bạn có thắc mắc khác, vui lòng liên hệ với chúng tôi:</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <i className="fas fa-envelope text-red-600 mr-3"></i>
                <span>Email: <span className="text-red-600">support@realestatepro.vn</span></span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone-alt text-red-600 mr-3"></i>
                <span>Hotline: <span className="text-red-600">1900 1881</span> (8:00 - 17:00 hàng ngày)</span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-comments text-red-600 mr-3"></i>
                <span>Chat trực tuyến: Nhấn vào biểu tượng chat ở góc phải màn hình</span>
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