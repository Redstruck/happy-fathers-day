import { useEffect, useState } from "react";
const PhotoGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('photo-grid');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const photos = ["photo-1465146344425-f00d5f5c8f07", "photo-1500673922987-e212871fec22", "photo-1470813740244-df37b8c1edcb", "photo-1469041797191-50ace28483c3", "photo-1465146344425-f00d5f5c8f07", "photo-1500673922987-e212871fec22", "photo-1470813740244-df37b8c1edcb", "photo-1469041797191-50ace28483c3", "photo-1465146344425-f00d5f5c8f07"];
  return;
};
export default PhotoGrid;