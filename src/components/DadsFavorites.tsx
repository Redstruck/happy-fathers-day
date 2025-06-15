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
  return;
};
export default DadsFavorites;