
import { useState, useEffect } from "react";
import { Calendar, Award, Star, Trophy } from "lucide-react";

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

    const element = document.getElementById('achievements-timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      year: "1985",
      title: "Started Career",
      description: "Began his professional journey",
      icon: Star
    },
    {
      year: "1992",
      title: "First Promotion",
      description: "Achieved recognition for dedication",
      icon: Trophy
    },
    {
      year: "2000",
      title: "Family Milestone",
      description: "Celebrated 10 years of marriage",
      icon: Award
    },
    {
      year: "2010",
      title: "Community Leader",
      description: "Became active in local community",
      icon: Calendar
    }
  ];

  return (
    <section id="achievements-timeline" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 via-yellow-300 to-slate-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Life Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'} ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-3">
                      <achievement.icon className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-bold text-lg">{achievement.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-300">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-4 border-slate-900"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
