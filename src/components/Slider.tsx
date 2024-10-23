import React, { useState, useEffect } from 'react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1589820933732-5594c9d89076?auto=format&fit=crop&q=80",
    title: "Roatan Island"
  },
  {
    url: "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?auto=format&fit=crop&q=80",
    title: "Copan Ruins"
  },
  {
    url: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80",
    title: "La Ceiba"
  }
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;