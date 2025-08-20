import { Link } from "react-router-dom";
import newsData from "../../data/newData.json";

export default function NewsList() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Real Estate News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Link to={`/news/${item.id}`} className="block">
                <img
                  src={`/image/${item.image}`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-blue-600 mt-3 inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
