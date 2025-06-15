
import { useEffect, useState } from "react";

const PhotoGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    const element = document.getElementById('photo-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const photos = [
    "photo-1465146344425-f00d5f5c8f07",
    "photo-1500673922987-e212871fec22",
    "photo-1470813740244-df37b8c1edcb",
    "photo-1469041797191-50ace28483c3",
    "photo-1465146344425-f00d5f5c8f07",
    "photo-1500673922987-e212871fec22",
    "photo-1470813740244-df37b8c1edcb",
    "photo-1469041797191-50ace28483c3",
    "photo-1465146344425-f00d5f5c8f07"
  ];

  return (
    <section id="photo-grid" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo-card group relative overflow-hidden rounded-2xl transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} glassmorphism hover:scale-105`}
            >
              <img
                src={`https://images.unsplash.com/${photo}?w=400&h=300&fit=crop`}
                alt={`Memory ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
