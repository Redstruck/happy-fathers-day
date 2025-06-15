
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-red-500/10 to-pink-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-40 w-5 h-5 bg-pink-500 rounded-full animate-bounce delay-300"></div>
      
      {/* Main Content */}
      <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6 font-serif">
          Happy Father's Day
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
          To the most amazing dad in the world
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
