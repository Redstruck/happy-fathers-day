
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import FamilyMessages from "@/components/FamilyMessages";
import PersonalTribute from "@/components/PersonalTribute";
import DadsFavorites from "@/components/DadsFavorites";
import AchievementsTimeline from "@/components/AchievementsTimeline";
import MemoryCollage from "@/components/MemoryCollage";

const Index = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
      top: -10px;
      left: -10px;
    `;
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleHover = () => {
      cursor.style.transform += ' scale(1.5)';
    };

    const handleLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
    };

    document.addEventListener('mousemove', updateCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .photo-card, .magnetic-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <PhotoGrid />
      <FamilyMessages />
      <DadsFavorites />
      <AchievementsTimeline />
      <MemoryCollage />
      <PersonalTribute />
    </div>
  );
};

export default Index;
