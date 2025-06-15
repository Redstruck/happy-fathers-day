
import { useState, useEffect } from "react";
import { Music, Film, Coffee, Car, Book, Camera } from "lucide-react";

const DadsFavorites = () => {
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

    const element = document.getElementById('dads-favorites');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const favorites = [
    { icon: Music, title: "Classic Rock", color: "from-red-400 to-rose-600", description: "Beatles, Led Zeppelin" },
    { icon: Film, title: "Action Movies", color: "from-blue-400 to-indigo-600", description: "Die Hard, Top Gun" },
    { icon: Coffee, title: "Morning Coffee", color: "from-amber-400 to-orange-600", description: "Black, no sugar" },
    { icon: Car, title: "Classic Cars", color: "from-green-400 to-emerald-600", description: "1967 Mustang" },
    { icon: Book, title: "History Books", color: "from-purple-400 to-violet-600", description: "WWII Stories" },
    { icon: Camera, title: "Photography", color: "from-pink-400 to-fuchsia-600", description: "Family moments" }
  ];

  return (
    <section id="dads-favorites" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Dad's Favorites
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {favorites.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 100} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${item.color} text-white text-center transform transition-transform duration-300 group-hover:rotate-3`}>
                <item.icon size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DadsFavorites;
