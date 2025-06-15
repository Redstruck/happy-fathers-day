
import { useEffect, useState } from "react";

const PhotoGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('photo-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
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
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Memories Together
        </h2>
        
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl aspect-square group transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                animation: `float-${(index % 3) + 1} ${3 + (index % 2)}s ease-in-out infinite`
              }}
            >
              <img
                src={`https://images.unsplash.com/${photo}?w=400&h=400&fit=crop`}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Beautiful Memory</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
};

export default PhotoGrid;
