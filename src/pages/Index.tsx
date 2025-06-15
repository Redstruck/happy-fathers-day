
import HeroSection from "@/components/HeroSection";
import PhotoGrid from "@/components/PhotoGrid";
import FamilyMessages from "@/components/FamilyMessages";
import PersonalTribute from "@/components/PersonalTribute";
import DadsFavorites from "@/components/DadsFavorites";
import AchievementsTimeline from "@/components/AchievementsTimeline";
import MemoryCollage from "@/components/MemoryCollage";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
