import { useState, useEffect } from "react";
const MemoryCollage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('memory-collage');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const memories = [{
    img: "photo-1465146344425-f00d5f5c8f07",
    caption: "Family BBQ 2020",
    size: "large"
  }, {
    img: "photo-1500673922987-e212871fec22",
    caption: "Birthday Celebration",
    size: "medium"
  }, {
    img: "photo-1470813740244-df37b8c1edcb",
    caption: "Camping Trip",
    size: "small"
  }, {
    img: "photo-1469041797191-50ace28483c3",
    caption: "Beach Vacation",
    size: "medium"
  }, {
    img: "photo-1465146344425-f00d5f5c8f07",
    caption: "Christmas Morning",
    size: "large"
  }, {
    img: "photo-1500673922987-e212871fec22",
    caption: "Graduation Day",
    size: "small"
  }];
  return;
};
export default MemoryCollage;