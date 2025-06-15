
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

  const memories = [{
    img: "photo-1465146344425-f00d5f5c8f07",
    caption: "Family BBQ 2020",
    size: "large"
  }, {
    img: "photo-1500673922987-e212871fec22",
    caption: "Birthday Celebration",
    size: "medium"
  }, {
    img: "photo-1470813740244-df37b8c1edcb",
    caption: "Camping Trip",
    size: "small"
  }, {
    img: "photo-1469041797191-50ace28483c3",
    caption: "Beach Vacation",
    size: "medium"
  }, {
    img: "photo-1465146344425-f00d5f5c8f07",
    caption: "Christmas Morning",
    size: "large"
  }, {
    img: "photo-1500673922987-e212871fec22",
    caption: "Graduation Day",
    size: "small"
  }];

  return (
    <section id="memory-collage" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Memory Lane
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg border border-white/20
                magnetic-hover stagger-child cursor-pointer group
                ${memory.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${memory.size === 'medium' ? 'row-span-2' : ''}
                ${isVisible ? 'stagger-visible' : ''}
              `}
            >
              <img
                src={`https://images.unsplash.com/${memory.img}?w=400&h=400&fit=crop`}
                alt={memory.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{memory.caption}</p>
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
