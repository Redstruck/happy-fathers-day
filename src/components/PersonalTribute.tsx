
import { useState, useEffect } from "react";

const PersonalTribute = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('personal-tribute');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="personal-tribute" className="py-20 px-4 min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-violet-400/30 to-indigo-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A Personal Message
          </h2>
          
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=600&fit=crop"
                alt="Dad and family"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="text-lg leading-relaxed text-gray-300">
                <p className="mb-6">
                  Dear Dad,
                </p>
                <p className="mb-6">
                  Thank you for always being there for me. Thank you for pushing me to do better. Thank you for showing me how to stay determined and strong-willed when things get tough.
                </p>
                <p className="mb-6">
                  Thank you for believing in me even when I didn’t. You’ve taught me that change isn’t always easy, but it’s always worth it.
                </p>
                <p className="mb-6">
                  Thank you for encouraging (and sometimes forcing) me to step into things I was unsure about and helping me grow through them. Thank you for always guiding me with your strength and support.
                </p>
                <p className="mb-6">
                  Thank you for teaching me the value of discipline, even when I didn’t want to hear it or follow it. Thank you for being patient when I made mistakes and for reminding me to keep going. 
                </p>
                <p className="mb-6">
                  Thank you for making time for us, no matter how busy life got. Thank you for being someone I can always count on, someone I trust, and someone I look up to every day. Thank you for being yourself. Happy Father's day.
                </p>
                <p className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  With my love,<br />
                  Your grateful child
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTribute;
