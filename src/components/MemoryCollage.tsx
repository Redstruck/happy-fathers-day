
import { useState, useEffect } from "react";

const MemoryCollage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    const element = document.getElementById('memory-collage');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const memories = [
    {
      img: "photo-1465146344425-f00d5f5c8f07",
      caption: "Family BBQ 2020",
      size: "large"
    },
    {
      img: "photo-1500673922987-e212871fec22",
      caption: "Birthday Celebration",
      size: "medium"
    },
    {
      img: "photo-1470813740244-df37b8c1edcb",
      caption: "Camping Trip",
      size: "small"
    },
    {
      img: "photo-1469041797191-50ace28483c3",
      caption: "Beach Vacation",
      size: "medium"
    },
    {
      img: "photo-1465146344425-f00d5f5c8f07",
      caption: "Christmas Morning",
      size: "large"
    },
    {
      img: "photo-1500673922987-e212871fec22",
      caption: "Graduation Day",
      size: "small"
    }
  ];

  return (
    <section id="memory-collage" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 via-green-300 to-slate-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Memory Lane
        </h2>
        
        <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`memory-item break-inside-avoid mb-6 group transition-all duration-1000 delay-${index * 150} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`relative overflow-hidden rounded-2xl ${memory.size === 'large' ? 'aspect-[4/5]' : memory.size === 'medium' ? 'aspect-square' : 'aspect-[5/4]'} glassmorphism p-2`}>
                <img
                  src={`https://images.unsplash.com/${memory.img}?w=400&h=400&fit=crop`}
                  alt={memory.caption}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl flex items-end">
                  <p className="text-white font-handwriting text-lg p-4">{memory.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryCollage;
