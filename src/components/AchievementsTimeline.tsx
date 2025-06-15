
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

  const achievements = [{
    year: "1995",
    title: "Became a Dad",
    icon: Heart,
    color: "from-red-400 to-rose-600"
  }, {
    year: "2000",
    title: "Career Promotion",
    icon: Briefcase,
    color: "from-blue-400 to-indigo-600"
  }, {
    year: "2010",
    title: "Coaching Champion",
    icon: Trophy,
    color: "from-yellow-400 to-orange-600"
  }, {
    year: "2020",
    title: "Proud Grandfather",
    icon: GraduationCap,
    color: "from-green-400 to-emerald-600"
  }];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Life Achievements
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
          
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12 stagger-child ${
                isVisible ? 'stagger-visible' : ''
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 magnetic-hover">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {achievement.year}
                  </p>
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
