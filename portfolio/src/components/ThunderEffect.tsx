'use client';

import { useEffect, useState } from 'react';

export default function ThunderEffect() {
  const [isLightning, setIsLightning] = useState(false);

  useEffect(() => {
    const triggerLightning = () => {
      setIsLightning(true);
      setTimeout(() => setIsLightning(false), 150);
    };

    // Random laser flash effect
    const interval = setInterval(() => {
      if (Math.random() < 0.08) { // 8% chance every 3 seconds
        triggerLightning();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Laser flash overlay */}
      <div 
        className={`lightning-effect transition-opacity duration-150 ${isLightning ? 'opacity-30' : 'opacity-0'}`}
        style={{ 
          background: 'linear-gradient(45deg, transparent 30%, rgba(251, 146, 60, 0.2) 50%, transparent 70%)'
        }}
      />
      
      {/* Subtle laser background */}
      <div className="absolute inset-0 thunder-bg opacity-40" />
      
      {/* Animated laser lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
      <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-15 animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
      
      {/* Floating laser particles */}
      <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-orange-400 rounded-full animate-pulse laser-particle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-orange-400 rounded-full animate-pulse laser-particle" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/2 left-4/5 w-0.5 h-0.5 bg-orange-400 rounded-full animate-pulse laser-particle" style={{ animationDelay: '1.5s' }}></div>
    </>
  );
}