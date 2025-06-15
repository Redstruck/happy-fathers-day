
import { useState, useEffect } from "react";
import { Heart, Music, Zap } from "lucide-react";

const DadsFavorites = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    const element = document.getElementById('dads-favorites');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const favorites = [
    {
      icon: Heart,
      title: "Family Time",
      description: "",
      color: "from-red-400 to-rose-600"
    },
    {
      icon: Zap,
      title: "Tennis",
      description: "",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Music,
      title: "Music",
      description: "",
      color: "from-purple-400 to-violet-600"
    }
  ];

  return (
    <section id="dads-favorites" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Dad's Favorites
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {favorites.map((favorite, index) => (
            <div
              key={index}
              className={`favorite-card group relative p-6 rounded-2xl transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} glassmorphism hover:scale-105`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${favorite.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <favorite.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">{favorite.title}</h3>
              {favorite.description && (
                <p className="text-slate-300 text-center text-sm">{favorite.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DadsFavorites;
