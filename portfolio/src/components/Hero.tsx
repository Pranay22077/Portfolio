'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const fullText = 'PRANAY';
  const fullSubtitle = 'AI/ML Enthusiast • Problem Solver • Mathematics & Computing Student';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        // Start subtitle animation
        let subIndex = 0;
        const subTimer = setInterval(() => {
          setSubtitle(fullSubtitle.slice(0, subIndex));
          subIndex++;
          if (subIndex > fullSubtitle.length) {
            clearInterval(subTimer);
          }
        }, 50);
      }
    }, 200);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Laser beam effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="laser-beam laser-beam-1"></div>
        <div className="laser-beam laser-beam-2"></div>
        <div className="laser-beam laser-beam-3"></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <span className="text-orange-400 text-lg font-mono">✨ Welcome to</span>
        </div>
        
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 glitch laser-glow"
          data-text={text}
        >
          {text}
          <span className="animate-pulse text-orange-400">_</span>
        </h1>
        
        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-gray-300 min-h-[2rem]">
            {subtitle}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
            <span className="text-orange-400 text-sm font-mono">CRAFTING THE FUTURE WITH CODE</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
          <p className="text-gray-400 text-lg">
            📍 New Delhi, India 🇮🇳 | 🎓 B.Tech Mathematics & Computing
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#work" 
            className="px-8 py-3 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 font-mono laser-button"
          >
            VIEW PROJECTS
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-orange-400 text-black hover:bg-orange-500 transition-all duration-300 font-mono laser-button"
          >
            LET'S CONNECT
          </a>
        </div>
      </div>
      
      {/* Floating laser particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse laser-particle"></div>
      <div className="absolute bottom-32 right-32 w-1 h-1 bg-orange-400 rounded-full animate-pulse laser-particle" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-0.5 h-16 bg-gradient-to-b from-orange-400 to-transparent opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-0.5 h-12 bg-gradient-to-b from-orange-400 to-transparent opacity-40"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}