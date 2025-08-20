import React from "react";
import newsData from "../../data/newData.json";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const featuredNews = newsData[0]; // Giả sử bài đầu là featured
  const sideNews = newsData.slice(1, 4); // 3 bài nhỏ bên phải
  const moreNews = newsData.slice(4, 8); // phần tin tức khác

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-3xl font-bold pb-2 mb-6 hover:scale-105 transition-transform text-red-600 border-b-4 border-red-300">
              <i className="fas fa-newspaper text-red-600 mr-3"></i>
              News Estate Pro
            </h3>
            <Link
              to="/news"
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              View All<i className="fas fa-chevron-right ml-1"></i>
            </Link>
          </div>
        </div>

        {/* Featured + Side News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured */}
          {featuredNews && (
            <div className="lg:col-span-2">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img
                    src={"/image/" + featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                      HOT
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors leading-tight">
                    <Link to={`/news/${featuredNews.id}`}>
                      {featuredNews.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredNews.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    {featuredNews.date}
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Side News */}
          <div className="space-y-4">
            {sideNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden group"
              >
                <div className="flex">
                  <img
                    src={"/image/" + news.image}
                    alt={news.title}
                    className="w-24 h-20 object-cover flex-shrink-0"
                  />
                  <div className="p-3 flex-1">
                    <h5 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-tight mb-1">
                      <Link to={`/news/${news.id}`}>{news.title}</Link>
                    </h5>
                    <div className="text-xs text-gray-500">{news.date}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* More News */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-gray-800">Latest </h4>
            <Link
              to="/news"
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              See More <i className="fas fa-chevron-right ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreNews.map((news) => (
              <article key={news.id} className="group">
                <div className="relative mb-3">
                  <img
                    src={"/image/" + news.image}
                    alt={news.title}
                    className="w-full h-32 object-cover rounded group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h5 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-tight mb-2">
                  <Link to={`/news/${news.id}`}>{news.title}</Link>
                </h5>
                <div className="text-xs text-gray-500">{news.date}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
