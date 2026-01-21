'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './AnimatedButton.scss';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({ children, className = '' }: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const path = pathRef.current;

    if (!button || !path) return;

    const l = path.getTotalLength();
    gsap.set(path, { strokeDasharray: l });

    const tl = gsap.timeline({ paused: true })
      .fromTo(path, 0.6, { strokeDashoffset: l }, { strokeDashoffset: 0 });

    timelineRef.current = tl;

    const handleMouseEnter = () => tl.timeScale(1).play();
    const handleMouseLeave = () => tl.timeScale(3).reverse();

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, []);

  return (
    <button ref={buttonRef} className={`animated-button ${className}`}>
      <svg className="animated-button__svg" viewBox="0 0 180 60" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M10,10 L170,10 L170,50 L10,50 Z"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <span className="animated-button__text">{children}</span>
    </button>
  );
}
