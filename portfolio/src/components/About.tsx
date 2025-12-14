'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 relative">
      {/* Laser beam divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 laser-glow">
              ABOUT <span className="text-orange-400">ME</span>
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto laser-line"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="code-block">
                <div className="code-header">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">pranay.js</span>
                </div>
                <div className="code-content">
                  <pre className="text-sm md:text-base">
{`const pranay = {
  pronouns: "he/him",
  location: "New Delhi, India 🇮🇳",
  education: "B.Tech. Mathematics & Computing",
  currentFocus: [
    "🧠 Machine Learning & Deep Learning",
    "🤖 GANs & Generative Models", 
    "🌐 Open Source Contributions",
    "⚡ Data Structures & Algorithms"
  ],
  lifePhilosophy: "To Do it again Tomorrow 🚀"
};`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="laser-card">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">🎯 Journey Milestones</h3>
                <div className="space-y-4">
                  <div className="milestone">
                    <span className="milestone-marker">+</span>
                    <span>🎓 Started coding in Year 1</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-marker">+</span>
                    <span>🤖 Fell in love with ML/AI</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-marker">+</span>
                    <span>🌟 Active OSS contributor</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-marker">+</span>
                    <span>📈 Deepening ML/DL expertise</span>
                  </div>
                  <div className="milestone">
                    <span className="milestone-marker">+</span>
                    <span>🚀 Chasing what inspires me!</span>
                  </div>
                </div>
              </div>

              <div className="laser-card">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">🎯 Current Goals</h3>
                <p className="text-gray-300 leading-relaxed">
                  Making meaningful impact through technology by building scalable solutions 
                  and contributing to the open source community. Always learning, always growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}