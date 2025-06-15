
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const FamilyMessages = () => {
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

    const element = document.getElementById('family-messages');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const messages = [
    {
      name: "Mom",
      message: "You've been the rock of our family for so many years. Your love and dedication never go unnoticed. Happy Father's Day to my amazing husband!",
      color: "from-rose-400 to-pink-600"
    },
    {
      name: "Sarah",
      message: "Dad, you taught me to be strong, independent, and kind. Thank you for being my first hero and biggest supporter. Love you!",
      color: "from-purple-400 to-violet-600"
    },
    {
      name: "Michael",
      message: "Thanks for teaching me how to throw a ball, fix things, and most importantly, how to be a good person. You're the best dad ever!",
      color: "from-blue-400 to-indigo-600"
    },
    {
      name: "Emma",
      message: "Dad, your jokes might be terrible, but your hugs are the best in the world. Thank you for always making me feel safe and loved.",
      color: "from-green-400 to-emerald-600"
    },
    {
      name: "Grandma",
      message: "Watching you become such a wonderful father has been one of my greatest joys. You make our family so proud every single day.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      name: "Uncle Tom",
      message: "Brother, you've always been an inspiration. The way you care for your family is something we all admire. Happy Father's Day!",
      color: "from-teal-400 to-cyan-600"
    }
  ];

  return (
    <section id="family-messages" className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Messages from the Family
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {messages.map((msg, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 delay-${index * 150} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${msg.color} flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white font-bold text-lg">{msg.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-white">{msg.name}</h3>
                <p className="text-gray-300 text-center leading-relaxed italic">"{msg.message}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMessages;
