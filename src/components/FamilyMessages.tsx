import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const FamilyMessages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    const element = document.getElementById('family-messages');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const messages = [
    {
      name: "Mom",
      message: "Thank you for being a great father to my kids. You are a great support system I have",
      color: "from-blue-400/20 to-violet-400/20"
    },
    {
      name: "Sarah",
      message: "Dad, you taught me to be strong, independent, and kind. Thank you for being my first hero and biggest supporter. Love you!",
      color: "from-violet-400/20 to-purple-400/20"
    },
    {
      name: "Michael",
      message: "Thanks for teaching me how to throw a ball, fix things, and most importantly, how to be a good person. You're the best dad ever!",
      color: "from-blue-400/20 to-cyan-400/20"
    },
    {
      name: "Emma",
      message: "Dad, your jokes might be terrible, but your hugs are the best in the world. Thank you for always making me feel safe and loved.",
      color: "from-emerald-400/20 to-green-400/20"
    },
    {
      name: "Mom",
      message: "Thank you for doing everything you do for us. It makes our lives worth living. Your attention to small details and the care we get from you is heartwarming.",
      color: "from-amber-400/20 to-orange-400/20"
    },
    {
      name: "Uncle Tom",
      message: "Brother, you've always been an inspiration. The way you care for your family is something we all admire. Happy Father's Day!",
      color: "from-teal-400/20 to-cyan-400/20"
    }
  ];

  return (
    <section id="family-messages" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 text-gradient-animated transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Messages from the Family
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {messages.map((msg, index) => (
            <Card key={index} className={`glassmorphism border-0 transition-all duration-1000 delay-${index * 150} hover:scale-105 magnetic-hover group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="ripple absolute inset-0"></div>
                
                <h3 className="text-xl font-semibold text-center mb-4 text-slate-200">{msg.name}</h3>
                <p className="text-slate-300 text-center leading-relaxed italic">"{msg.message}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMessages;
