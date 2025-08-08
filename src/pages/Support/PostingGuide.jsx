import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PostingGuide = () => {
  return (
    <div className="App bg-gray-50 font-sans">
      
      
      <main className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Hướng dẫn đăng tin</h1>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Quy trình đăng tin</h2>
                <div className="text-gray-600 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                    <p>Đăng nhập tài khoản hoặc đăng ký nếu chưa có</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                    <p>Nhấn nút "Đăng tin" trên thanh menu</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                    <p>Điền đầy đủ thông tin bất động sản theo mẫu</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</div>
                    <p>Tải lên ít nhất 5 hình ảnh chất lượng (tối đa 20 ảnh)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">5</div>
                    <p>Xem lại thông tin và nhấn "Đăng tin"</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">6</div>
                    <p>Tin đăng sẽ được kiểm duyệt trong vòng 2-4 giờ</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Yêu cầu hình ảnh</h2>
                <div className="text-gray-600 space-y-3">
                  <p><span className="font-semibold">Số lượng:</span> Tối thiểu 5 ảnh, tối đa 20 ảnh</p>
                  <p><span className="font-semibold">Định dạng:</span> JPG, PNG (không quá 5MB/ảnh)</p>
                  <p><span className="font-semibold">Nội dung:</span></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ảnh mặt tiền, toàn cảnh bất động sản</li>
                    <li>Ảnh phòng khách, phòng ngủ, nhà bếp, nhà vệ sinh</li>
                    <li>Ảnh các tiện ích xung quanh (nếu có)</li>
                    <li>Không đăng ảnh mờ, ảnh không liên quan</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Cách viết mô tả hấp dẫn</h2>
                <div className="text-gray-600 space-y-3">
                  <p><span className="font-semibold">Tiêu đề:</span> Ngắn gọn, nêu bật điểm mạnh (Ví dụ: "Căn hộ 2PN full nội thất, view đẹp Q1")</p>
                  <p><span className="font-semibold">Nội dung:</span></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mô tả chi tiết về bất động sản</li>
                    <li>Liệt kê đầy đủ tiện ích, nội thất</li>
                    <li>Thông tin vị trí thuận lợi</li>
                    <li>Giá cả và các ưu đãi (nếu có)</li>
                  </ul>
                  <p><span className="font-semibold">Lưu ý:</span> Không viết tắt, không dùng từ ngữ không phù hợp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default PostingGuide;