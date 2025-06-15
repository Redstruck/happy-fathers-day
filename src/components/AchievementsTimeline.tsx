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
  return <section id="achievements" className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
      
    </section>;
};
export default AchievementsTimeline;