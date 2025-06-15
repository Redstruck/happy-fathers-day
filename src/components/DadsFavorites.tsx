
import { useState, useEffect } from "react";
import { Music, Film, Coffee, Car, Book, Camera } from "lucide-react";

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

  const favorites = [{
    icon: Music,
    title: "Classic Rock",
    color: "from-red-400 to-rose-600",
    description: "Beatles, Led Zeppelin"
  }, {
    icon: Film,
    title: "Action Movies",
    color: "from-blue-400 to-indigo-600",
    description: "Die Hard, Top Gun"
  }, {
    icon: Coffee,
    title: "Morning Coffee",
    color: "from-amber-400 to-orange-600",
    description: "Black, no sugar"
  }, {
    icon: Car,
    title: "Classic Cars",
    color: "from-green-400 to-emerald-600",
    description: "1967 Mustang"
  }, {
    icon: Book,
    title: "History Books",
    color: "from-purple-400 to-violet-600",
    description: "WWII Stories"
  }, {
    icon: Camera,
    title: "Photography",
    color: "from-pink-400 to-fuchsia-600",
    description: "Family moments"
  }];

  return (
    <section id="dads-favorites" className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Dad's Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((favorite, index) => (
            <div
              key={index}
              className={`
                bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20
                magnetic-hover stagger-child group cursor-pointer
                ${isVisible ? 'stagger-visible' : ''}
              `}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${favorite.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <favorite.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{favorite.title}</h3>
              <p className="text-gray-300">{favorite.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DadsFavorites;
