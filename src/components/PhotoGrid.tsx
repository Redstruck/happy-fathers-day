
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
    <section id="photo-grid" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Precious Memories
        </h2>
        
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo-card group relative overflow-hidden rounded-2xl aspect-square transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} animate-sway-${index % 3}`}
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`
              }}
            >
              <div className="photo-card-inner w-full h-full relative preserve-3d">
                <div className="photo-front absolute inset-0 backface-hidden">
                  <img
                    src={`https://images.unsplash.com/${photo}?w=400&h=400&fit=crop`}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 glassmorphism opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                <div className="photo-back absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">Beautiful Memory</h3>
                    <p className="text-sm opacity-80">A special moment captured in time</p>
                  </div>
                </div>
              </div>
              
              {/* Ripple effect on click */}
              <div className="ripple absolute inset-0 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
