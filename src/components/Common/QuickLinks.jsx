import React from "react";

const QuickLinks = () => {
  const quickLinks = [
    { icon: "fas fa-building", title: "Apartment", href: "#" },
    { icon: "fas fa-home", title: "House", href: "#" },
    { icon: "fas fa-city", title: "Villa", href: "#" },
    { icon: "fas fa-store", title: "Shophouse", href: "#" },
    { icon: "fas fa-briefcase", title: "Office", href: "#" },
    { icon: "fas fa-warehouse", title: "Warehouse", href: "#" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          QuickSearchs
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-gray-50 hover:bg-red-50 p-4 rounded-lg text-center transition-colors group"
            >
              <i
                className={`${link.icon} text-3xl text-red-600 mb-3 group-hover:scale-110 transition-transform`}
              ></i>
              <p className="font-medium">{link.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
