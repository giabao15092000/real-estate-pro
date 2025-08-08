import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PostingRules = () => {
return (
<div className="App bg-gray-50 font-sans">

<main className="min-h-screen py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Quy định đăng tin</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Nội dung cấm đăng</h2>
            <div className="text-gray-600 space-y-3">
              <p>Tin đăng sẽ bị từ chối hoặc xóa nếu vi phạm các quy định sau:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tin không có thật, giả mạo, lừa đảo</li>
                <li>Tin đã bán/cho thuê nhưng không cập nhật trạng thái</li>
                <li>Nội dung không liên quan đến bất động sản</li>
                <li>Thông tin sai sự thật về pháp lý, diện tích, giá cả</li>
                <li>Nội dung phân biệt đối xử, vi phạm pháp luật</li>
                <li>Quảng cáo dịch vụ khác (môi giới, xây dựng...)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Quy định về giá cả</h2>
            <div className="text-gray-600 space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Phải ghi giá chính xác, đầy đủ (tỷ, triệu hoặc đồng/m²)</li>
                <li>Không ghi giá "thỏa thuận" nếu có giá cụ thể</li>
                <li>Không ghi giá 0 đồng hoặc 1 đồng</li>
                <li>Giá phải phù hợp với thị trường, không câu view</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Chế tài xử lý</h2>
            <div className="text-gray-600 space-y-3">
              <div className="space-y-2">
                <p><span className="font-semibold">Cảnh báo:</span> Lần vi phạm đầu tiên</p>
                <p><span className="font-semibold">Khóa tin 7 ngày:</span> Lần vi phạm thứ 2</p>
                <p><span className="font-semibold">Khóa tài khoản 30 ngày:</span> Lần vi phạm thứ 3</p>
                <p><span className="font-semibold">Khóa vĩnh viễn:</span> Vi phạm nghiêm trọng hoặc tái phạm nhiều lần</p>
              </div>
              <p className="mt-4">Mọi khiếu nại vui lòng gửi về <span className="text-red-600">support@realestatepro.vn</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  
</div>
);
};

export default PostingRules;