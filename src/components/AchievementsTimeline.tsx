
import { useState, useEffect } from "react";
import { Trophy, Heart, Briefcase, GraduationCap } from "lucide-react";

const AchievementsTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    const element = document.getElementById('achievements');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      year: "1995",
      title: "Became a Dad",
      icon: Heart,
      color: "from-red-400 to-rose-600"
    },
    {
      year: "2000",
      title: "Career Promotion",
      icon: Briefcase,
      color: "from-blue-400 to-indigo-600"
    },
    {
      year: "2010",
      title: "Coaching Champion",
      icon: Trophy,
      color: "from-yellow-400 to-orange-600"
    },
    {
      year: "2020",
      title: "Proud Grandfather",
      icon: GraduationCap,
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full animate-float-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Dad's Journey
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center mr-8">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow">
                <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-slate-300">A milestone worth celebrating</p>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
