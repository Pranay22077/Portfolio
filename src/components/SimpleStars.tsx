import React, { useEffect, useRef } from 'react';
import './SimpleStars.css';

interface SimpleStarsProps {
  count?: number;
  speed?: number;
}

const SimpleStars: React.FC<SimpleStarsProps> = ({ count = 100, speed = 0.5 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      // Random size
      const size = Math.random() * 3 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      // Random animation delay
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      container.appendChild(star);
    }

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const stars = container.querySelectorAll('.star');
      const rect = container.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width;
      const mouseY = (e.clientY - rect.top) / rect.height;

      stars.forEach((star, index) => {
        const element = star as HTMLElement;
        const starX = parseFloat(element.style.left) / 100;
        const starY = parseFloat(element.style.top) / 100;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
        );
        
        if (distance < 0.1) {
          element.style.opacity = '1';
          element.style.transform = 'scale(1.5)';
        } else {
          element.style.opacity = '0.6';
          element.style.transform = 'scale(1)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count, speed]);

  return <div ref={containerRef} className="simple-stars" />;
};

export default SimpleStars;