import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 40,
  stackPosition = '25%',
  scaleEndPosition = '15%',
  baseScale = 0.9,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const stackPositionPx = (parseFloat(stackPosition) / 100) * windowHeight;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + scrollTop;
      
      // Calculate when card should start stacking
      const triggerPoint = cardTop - stackPositionPx;
      const progress = Math.max(0, Math.min(1, (scrollTop - triggerPoint) / (windowHeight * 0.8)));
      
      // Smooth the progress to reduce jitter
      const smoothProgress = progress * progress * (3 - 2 * progress); // Smoothstep function
      
      // Calculate transforms with smoother values
      const scale = Math.max(0.6, 1 - (smoothProgress * (1 - baseScale - (i * itemScale))));
      const translateY = Math.round(smoothProgress * (i * itemStackDistance));
      const opacity = Math.max(0.4, 1 - (smoothProgress * i * 0.08));
      
      // Apply transforms with rounded values to prevent sub-pixel jitter
      const transform = `translate3d(0, ${translateY}px, 0) scale(${Math.round(scale * 100) / 100})`;
      
      card.style.transform = transform;
      card.style.opacity = (Math.round(opacity * 100) / 100).toString();
      card.style.zIndex = (100 - i).toString();
    });
  }, [itemScale, itemStackDistance, stackPosition, baseScale]);

  const lastScrollTime = useRef(0);
  
  const handleScroll = useCallback(() => {
    const now = performance.now();
    
    // Throttle to 60fps max
    if (now - lastScrollTime.current < 16) return;
    
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      updateCardTransforms();
      lastScrollTime.current = now;
      rafRef.current = null;
    });
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    // Initialize cards
    cards.forEach((card, i) => {
      card.style.marginBottom = `${itemDistance}px`;
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform, opacity';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.zIndex = (100 - i).toString();
    });

    // Use native scroll event for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial update
    updateCardTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [itemDistance, handleScroll, updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;