
import { useState, useEffect } from "react";

const MemoryCollage = () => {
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

    const element = document.getElementById('memory-collage');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const memories = [
    { img: "photo-1465146344425-f00d5f5c8f07", caption: "Family BBQ 2020", size: "large" },
    { img: "photo-1500673922987-e212871fec22", caption: "Birthday Celebration", size: "medium" },
    { img: "photo-1470813740244-df37b8c1edcb", caption: "Camping Trip", size: "small" },
    { img: "photo-1469041797191-50ace28483c3", caption: "Beach Vacation", size: "medium" },
    { img: "photo-1465146344425-f00d5f5c8f07", caption: "Christmas Morning", size: "large" },
    { img: "photo-1500673922987-e212871fec22", caption: "Graduation Day", size: "small" }
  ];

  return (
    <section id="memory-collage" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Memory Lane
        </h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`break-inside-avoid mb-6 transition-all duration-1000 delay-${index * 150} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src={`https://images.unsplash.com/${memory.img}?w=400&h=${memory.size === 'large' ? '500' : memory.size === 'medium' ? '300' : '200'}&fit=crop`}
                  alt={memory.caption}
                  className="w-full rounded-lg"
                />
                <p className="mt-3 text-gray-800 font-handwriting text-center text-lg">{memory.caption}</p>
                <div className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryCollage;
