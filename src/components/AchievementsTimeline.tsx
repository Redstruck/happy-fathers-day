
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
    <section id="achievements-timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 via-blue-300 to-slate-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Life Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-item flex items-center mb-8 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center flex-shrink-0 mx-8">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`glassmorphism p-6 rounded-2xl flex-1 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                <div className="text-blue-400 font-bold text-lg">{achievement.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
