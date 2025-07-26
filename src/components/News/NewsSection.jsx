import React from "react";
import "./News.css";

const NewsSection = () => {
  const featuredNews = {
    title:
      "Thị trường bất động sản quý 4/2024: Xu hướng tăng trưởng mạnh và dự báo cho năm 2025",
    excerpt:
      "Báo cáo mới nhất cho thấy thị trường bất động sản quý 4/2024 có nhiều tín hiệu tích cực với thanh khoản tăng 25% so với cùng kỳ năm trước. Các chuyên gia dự báo xu hướng phục hồi sẽ tiếp tục trong năm 2025...",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23e5e7eb'/%3E%3Cg%3E%3Crect x='50' y='50' width='500' height='200' fill='%23f3f4f6' stroke='%236b7280' stroke-width='2'/%3E%3Ctext x='300' y='120' text-anchor='middle' fill='%236b7280' font-size='14'%3EThị trường BĐS Q4/2024%3C/text%3E%3Ctext x='300' y='140' text-anchor='middle' fill='%236b7280' font-size='12'%3EXu hướng và dự báo%3C/text%3E%3Ccircle cx='100' cy='200' r='15' fill='%23ef4444'/%3E%3Ctext x='100' y='205' text-anchor='middle' fill='white' font-size='10'%3EHOT%3C/text%3E%3C/g%3E%3C/svg%3E",
    category: "Thị trường",
    time: "2 giờ trước",
    views: "15,234",
    author: "Nguyễn Minh Tuấn",
  };

  const sideNews = [
    {
      title: "Hướng dẫn đầu tư bất động sản hiệu quả cho người mới bắt đầu",
      category: "Tư vấn",
      time: "4 giờ trước",
      views: "8,456",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%23f3f4f6'/%3E%3Ctext x='60' y='45' text-anchor='middle' fill='%236b7280' font-size='8'%3EĐầu tư BĐS%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Top 10 dự án căn hộ đáng chú ý nhất tại TP.HCM năm 2024",
      category: "Dự án",
      time: "6 giờ trước",
      views: "12,789",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%23ddd6fe'/%3E%3Ctext x='60' y='45' text-anchor='middle' fill='%236b7280' font-size='8'%3EDự án HCM%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Những thay đổi mới trong Luật Đất đai 2024 người dân cần biết",
      category: "Pháp lý",
      time: "1 ngày trước",
      views: "25,643",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%23fef3c7'/%3E%3Ctext x='60' y='45' text-anchor='middle' fill='%236b7280' font-size='8'%3EPháp lý%3C/text%3E%3C/svg%3E",
    },
  ];

  const moreNews = [
    {
      title: "Giá nhà đất Hà Nội tăng mạnh trong tháng 12/2024",
      time: "3 giờ trước",
      views: "5,234",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='150' viewBox='0 0 250 150'%3E%3Crect width='250' height='150' fill='%23e5e7eb'/%3E%3Ctext x='125' y='80' text-anchor='middle' fill='%236b7280' font-size='12'%3EGiá nhà đất%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Lãi suất vay mua nhà giảm mạnh, cơ hội cho người mua",
      time: "5 giờ trước",
      views: "7,891",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='150' viewBox='0 0 250 150'%3E%3Crect width='250' height='150' fill='%23f3f4f6'/%3E%3Ctext x='125' y='80' text-anchor='middle' fill='%236b7280' font-size='12'%3EVay mua nhà%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Khu đô thị thông minh - Xu hướng phát triển mới",
      time: "8 giờ trước",
      views: "3,567",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='150' viewBox='0 0 250 150'%3E%3Crect width='250' height='150' fill='%23ddd6fe'/%3E%3Ctext x='125' y='80' text-anchor='middle' fill='%236b7280' font-size='12'%3EKhu đô thị%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Đầu tư bất động sản F0 - Bí quyết sinh lời bền vững",
      time: "12 giờ trước",
      views: "9,123",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='150' viewBox='0 0 250 150'%3E%3Crect width='250' height='150' fill='%23fef3c7'/%3E%3Ctext x='125' y='80' text-anchor='middle' fill='%236b7280' font-size='12'%3EĐầu tư F0%3C/text%3E%3C/svg%3E",
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Newsletter subscription:", email);
    alert("Đăng ký thành công! Cảm ơn bạn đã quan tâm.");
    e.target.reset();
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* News Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                <i className="fas fa-newspaper text-red-600 mr-3"></i>
                Tin tức bất động sản
              </h3>
              <div className="hidden md:flex space-x-4 text-sm">
                <a
                  href="https://batdongsan.com.vn/tin-tuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium border-b-2 border-red-600 pb-1"
                >
                  Tất cả
                </a>
                <a
                  href="https://batdongsan.com.vn/tin-tuc/thi-truong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Thị trường
                </a>
                <a
                  href="https://batdongsan.com.vn/tin-tuc/phap-ly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Pháp lý
                </a>
                <a
                  href="https://batdongsan.com.vn/tin-tuc/tu-van"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Tư vấn
                </a>
                <a
                  href="https://batdongsan.com.vn/tin-tuc/du-an"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Dự án
                </a>
              </div>
            </div>
            <a
              href="https://batdongsan.com.vn/tin-tuc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              Xem tất cả <i className="fas fa-external-link-alt ml-1"></i>
            </a>
          </div>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <article className="news-card bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={featuredNews.image}
                  alt="Featured News"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    TIN HOT
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
                    {featuredNews.category}
                  </span>
                  <span>
                    <i className="fas fa-clock mr-1"></i>
                    {featuredNews.time}
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    <i className="fas fa-eye mr-1"></i>
                    {featuredNews.views} lượt xem
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors leading-tight">
                  <a
                    href="https://batdongsan.com.vn/tin-tuc/thi-truong-bat-dong-san-quy-4-2024-xu-huong-va-du-bao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featuredNews.title}
                  </a>
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23e5e7eb'/%3E%3Ctext x='12' y='16' text-anchor='middle' fill='%236b7280' font-size='10'%3EA%3C/text%3E%3C/svg%3E"
                      alt="Author"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{featuredNews.author}</span>
                  </div>
                  <div className="flex space-x-3 text-gray-400">
                    <button className="hover:text-red-600 transition-colors">
                      <i className="far fa-heart"></i>
                    </button>
                    <button className="hover:text-blue-600 transition-colors">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Side Articles */}
          <div className="space-y-4">
            {sideNews.map((news, index) => (
              <article
                key={index}
                className="news-card bg-white rounded-lg shadow-sm overflow-hidden group"
              >
                <div className="flex">
                  <img
                    src={news.image}
                    alt="News"
                    className="w-24 h-20 object-cover flex-shrink-0"
                  />
                  <div className="p-3 flex-1">
                    <div className="text-xs text-gray-500 mb-1">
                      <span
                        className={`px-1 py-0.5 rounded text-xs ${
                          news.category === "Tư vấn"
                            ? "bg-blue-100 text-blue-600"
                            : news.category === "Dự án"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {news.category}
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-tight mb-1">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        {news.title}
                      </a>
                    </h5>
                    <div className="text-xs text-gray-500">
                      <span>
                        <i className="fas fa-clock mr-1"></i>
                        {news.time}
                      </span>
                      <span className="mx-1">•</span>
                      <span>{news.views} lượt xem</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* More News Grid */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-gray-800">Tin tức khác</h4>
            <a
              href="https://batdongsan.com.vn/tin-tuc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Xem thêm <i className="fas fa-chevron-right ml-1"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreNews.map((news, index) => (
              <article key={index} className="group">
                <div className="relative mb-3">
                  <img
                    src={news.image}
                    alt="News"
                    className="w-full h-32 object-cover rounded group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h5 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-tight mb-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h5>
                <div className="text-xs text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i>
                    {news.time}
                  </span>
                  <span className="mx-1">•</span>
                  <span>{news.views} lượt xem</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 mt-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">
                Đăng ký nhận tin tức mới nhất
              </h4>
              <p className="text-red-100">
                Cập nhật thông tin thị trường bất động sản hàng ngày
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Nhập email của bạn..."
                required
                className="px-4 py-2 rounded-l-lg text-gray-800 flex-1 md:w-64 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-red-600 px-6 py-2 rounded-r-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
