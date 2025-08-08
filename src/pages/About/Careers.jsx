import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Careers = () => {
const jobOpenings = [
{
title: "Frontend Developer",
department: "Công nghệ",
location: "Hồ Chí Minh",
type: "Full-time",
description: "Phát triển giao diện người dùng cho các sản phẩm của RealEstatePro bằng ReactJS và các công nghệ liên quan."
},
{
title: "Chuyên viên tư vấn bất động sản",
department: "Kinh doanh",
location: "Hà Nội",
type: "Full-time",
description: "Tư vấn và hỗ trợ khách hàng trong quá trình mua bán, cho thuê bất động sản trên nền tảng."
},
{
title: "Content Writer",
department: "Marketing",
location: "Remote",
type: "Part-time",
description: "Sáng tạo nội dung về thị trường bất động sản, hướng dẫn sử dụng dịch vụ và các bài viết liên quan."
}
];

return (
<div className="App bg-gray-50 font-sans">


text
  <main className="min-h-screen py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Tuyển dụng</h1>
        
        <div className="text-gray-700 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tại sao nên làm việc tại RealEstatePro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <i className="fas fa-bolt text-red-600 mr-2"></i>
                  Môi trường năng động
                </h3>
                <p className="text-gray-600">Làm việc với những người trẻ tuổi, sáng tạo và nhiệt huyết</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <i className="fas fa-chart-line text-red-600 mr-2"></i>
                  Cơ hội phát triển
                </h3>
                <p className="text-gray-600">Đào tạo liên tục và cơ hội thăng tiến rõ ràng</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <i className="fas fa-heart text-red-600 mr-2"></i>
                  Phúc lợi hấp dẫn
                </h3>
                <p className="text-gray-600">Lương thưởng cạnh tranh, bảo hiểm, du lịch hàng năm</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Vị trí đang tuyển dụng</h2>
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-red-600">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <span><i className="fas fa-building mr-1"></i> {job.department}</span>
                    <span><i className="fas fa-map-marker-alt mr-1"></i> {job.location}</span>
                    <span><i className="fas fa-clock mr-1"></i> {job.type}</span>
                  </div>
                  <p className="mt-3 text-gray-700">{job.description}</p>
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Ứng tuyển ngay
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-3">Gửi hồ sơ ứng tuyển</h3>
            <p className="text-gray-600 mb-2">Gửi CV và thư giới thiệu đến:</p>
            <p className="text-red-600 font-medium">hr@realestatepro.vn</p>
            <p className="text-gray-600 mt-2">Tiêu đề email: [Vị trí ứng tuyển] - [Họ tên]</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  
</div>
);
};

export default Careers;