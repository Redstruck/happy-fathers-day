import { useState, useEffect } from "react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToMemories = () => {
    const photosSection = document.getElementById('photo-grid');
    if (photosSection) {
      photosSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Professional Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-slate-600/10 animate-gradient"></div>
      
      {/* Sophisticated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({
        length: 15
      }).map((_, i) => <div key={i} className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/30 to-violet-400/30 rounded-full animate-float-particle" style={{
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/20 rounded-full animate-float" style={{
      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
    }}></div>
      
      
      {/* Main Content */}
      <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
      transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
    }}>
        <h1 className="text-6xl md:text-8xl font-bold text-gradient-animated mb-6 font-serif animate-text-reveal">
          Happy Father's Day
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 font-inter">
          To the most amazing dad in the world
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-violet-400 to-slate-400 mx-auto rounded-full animate-gradient"></div>
        
        {/* Professional Call to Action */}
        <div className="mt-12">
          <button onClick={scrollToMemories} className="neumorphism px-8 py-4 rounded-2xl text-slate-200 font-medium transition-all duration-300 hover:scale-105 magnetic-hover">
            Explore Memories
          </button>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full relative">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-violet-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;