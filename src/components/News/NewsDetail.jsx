import { useParams, Link } from "react-router-dom";
import newsData from "../../data/newData.json";
import TopViews from "./Topviews";
export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((n) => n.id === Number(id));

  if (!news) {
    return <div className="p-10">404 - Article Not Found </div>;
  }

  // Lấy danh sách bài viết hot (trừ bài hiện tại)
  const hotNews = newsData.filter((n) => n.id !== Number(id)).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-10 gap-6">
      {/* Cột chính: Nội dung bài viết */}
      <div className="col-span-7 col-span-12">
        <Link to="/news" className="text-blue-600">
          ← Back to List
        </Link>
        <h1 className="text-4xl font-bold mt-4">{news.title}</h1>
        <p className="text-gray-500 mt-2">{news.date}</p>
        <img
          src={process.env.PUBLIC_URL + "/image/" + news.image}
          alt={news.title}
          className="w-full max-h-96 object-cover mt-4"
        />
        <div className="mt-6 text-lg leading-relaxed">
          {news.content.split("\n").map(
            (paragraph, index) =>
              paragraph.trim() && (
                <p key={index} style={{ marginBottom: "1rem" }}>
                  {paragraph}
                </p>
              )
          )}
        </div>
      </div>

      {/* Cột phụ: Hot News */}
      <aside className="col-span-3 bg-gray-50 p-4 rounded-lg shadow hidden md:block">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">🔥 Hot News</h2>
          <ul className="space-y-4">
            {hotNews.slice(0, 7).map((item, index) => (
              <li key={index} className="flex gap-3">
                <img
                  src={process.env.PUBLIC_URL + "/image/" + item.image}
                  alt={item.title}
                  className="w-20 h-14 object-cover rounded"
                />
                <div>
                  <h3 className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 text-right">
                    {item.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Top Views */}
        <TopViews />
      </aside>
    </div>
  );
}
// export default function NewsDetail() {
//     const { id } = useParams();
//     const newsItem = newsData.find((item) => item.id === parseInt(id));

//     if (!newsItem) {
//       return (
//         <div className="container mx-auto p-4 text-center text-lg">
//           Không tìm thấy bài viết.
//         </div>
//       );
//     }

//     return (
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
//         {/* Title */}
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//           {newsItem.title}
//         </h1>

//         {/* Meta info */}
//         <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-6">
//           <span>{newsItem.date}</span>
//           <span>👁 {newsItem.views} lượt xem</span>
//         </div>

//         {/* Image */}
//         <div className="w-full mb-6">
//           <img
//             src={newsItem.image}
//             alt={newsItem.title}
//             className="w-full max-h-[450px] object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Content */}
//         <div className="prose prose-lg max-w-none text-gray-800">
//           {newsItem.content.split("\n").map((para, index) => (
//             <p key={index} className="mb-4 leading-relaxed">
//               {para}
//             </p>
//           ))}
//         </div>
//       </div>
//     );
//   }
