// src/components/Hero/Carousel.jsx
import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden mt-4">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-full px-4 py-2">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl w-full h-64 object-cover"
            />
            <h3 className="text-lg mt-2">{item.title}</h3>
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 bg-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 bg-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
