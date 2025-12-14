import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import DecryptedText from './DecryptedText';
import TrueFocus from './TrueFocus';
import VariableProximity from './VariableProximity';

export function Hero() {
  const [text, setText] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const fullText = 'PRANAY';
  const fullSubtitle = 'AI/ML Enthusiast • Problem Solver • Mathematics & Computing Student';
  const containerRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <div className="inline-block px-4 py-2 rounded-full mb-8 backdrop-blur-sm bg-black/30 border border-white/20">
              <span className="text-sm tracking-widest">📍 New Delhi, India 🇮🇳</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse text-white/80">_</span>
          </h1>

          <div className="space-y-6 mb-12">
            <div className="text-xl md:text-2xl text-gray-300 min-h-[2rem]">
              <DecryptedText 
                text={subtitle}
                speed={30}
                maxIterations={8}
                animateOn="view"
                className="text-cyan-400"
                encryptedClassName="text-gray-500"
              />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400/40"></div>
              <div className="text-white/60 text-sm font-mono">
                <TrueFocus 
                  sentence="CRAFTING THE FUTURE WITH CODE"
                  separator=" "
                  blurAmount={3}
                  borderColor="#00bcd4"
                  glowColor="rgba(0, 188, 212, 0.6)"
                  animationDuration={0.8}
                  pauseBetweenAnimations={2}
                />
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-400/40"></div>
            </div>
            <div className="text-gray-400 text-lg">
              <VariableProximity
                label="B.Tech Mathematics & Computing | Open Source Contributor"
                fromFontVariationSettings="'wght' 300, 'opsz' 12"
                toFontVariationSettings="'wght' 700, 'opsz' 20"
                containerRef={containerRef}
                radius={80}
                falloff="gaussian"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16">
            <a
              href="https://github.com/Pranay22077"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-sm border-2 border-white/30 hover:border-white/60"
              aria-label="GitHub"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranay22077/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-sm border-2 border-white/30 hover:border-white/60"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:pranay@example.com"
              className="p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-sm border-2 border-white/30 hover:border-white/60"
              aria-label="Email"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#projects" 
              className="px-8 py-3 border-2 border-white/60 text-white hover:bg-white hover:text-black transition-all duration-300 font-mono tracking-wider"
            >
              VIEW PROJECTS
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/90 text-black font-semibold hover:bg-white transition-all duration-300 font-mono tracking-wider"
            >
              LET'S CONNECT
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" />
      

    </section>
  );
}
