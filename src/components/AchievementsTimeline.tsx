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
  const achievements = [{
    year: "1985",
    title: "Started Career",
    description: "Began his professional journey",
    icon: Star
  }, {
    year: "1992",
    title: "First Promotion",
    description: "Achieved recognition for dedication",
    icon: Trophy
  }, {
    year: "2000",
    title: "Family Milestone",
    description: "Celebrated 10 years of marriage",
    icon: Award
  }, {
    year: "2010",
    title: "Community Leader",
    description: "Became active in local community",
    icon: Calendar
  }];
  return;
};
export default AchievementsTimeline;