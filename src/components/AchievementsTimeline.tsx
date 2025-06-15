
import { useState, useEffect } from "react";
import { Trophy, Heart, Briefcase, GraduationCap } from "lucide-react";

const AchievementsTimeline = () => {
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

    const element = document.getElementById('achievements');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { year: "1995", title: "Became a Dad", icon: Heart, color: "from-red-400 to-rose-600" },
    { year: "2000", title: "Career Promotion", icon: Briefcase, color: "from-blue-400 to-indigo-600" },
    { year: "2010", title: "Coaching Champion", icon: Trophy, color: "from-yellow-400 to-orange-600" },
    { year: "2020", title: "Proud Grandfather", icon: GraduationCap, color: "from-green-400 to-emerald-600" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Dad's Amazing Journey
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${achievement.color} text-white`}>
                  <div className="flex items-center gap-4">
                    <achievement.icon size={32} />
                    <div>
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <p className="text-white/90">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
