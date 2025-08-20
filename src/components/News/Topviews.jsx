import React, { useEffect, useState } from "react";
import newsData from "../../data/newData.json"; // đường dẫn đến file newData.json

export default function TopViews() {
  const [topViews, setTopViews] = useState([]);

  useEffect(() => {
    // Sắp xếp giảm dần theo lượt views
    const sortedData = [...newsData].sort((a, b) => b.views - a.views);
    // Lấy top 5 bài
    setTopViews(sortedData.slice(0, 5));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">🔥 Top Views</h2>
      <ul>
        {topViews.map((item) => (
          <li key={item.id} className="flex items-center mb-3">
            <img
              src={"/image/" + item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-md mr-3"
            />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500 text-right">
                {item.views} views
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
