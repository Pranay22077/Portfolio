import React from 'react';
import './GlassMorphism.css';

interface GlassMorphismProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  blur?: number;
  opacity?: number;
}

export function GlassMorphism({ 
  children, 
  className = '', 
  intensity = 'medium',
  blur = 10,
  opacity = 0.1
}: GlassMorphismProps) {
  const intensityClasses = {
    light: 'glass-light',
    medium: 'glass-medium',
    strong: 'glass-strong'
  };

  return (
    <div 
      className={`glass-morphism ${intensityClasses[intensity]} ${className}`}
      style={{
        '--glass-blur': `${blur}px`,
        '--glass-opacity': opacity
      } as React.CSSProperties}
    >
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
}