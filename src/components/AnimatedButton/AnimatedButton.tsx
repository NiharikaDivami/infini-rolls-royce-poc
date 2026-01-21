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
      <svg className="animated-button__svg" viewBox="0 0 200 70" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M35,1 L165,1 Q199,1 199,35 L199,35 Q199,69 165,69 L35,69 Q1,69 1,35 L1,35 Q1,1 35,1 Z"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
      <span className="animated-button__text">{children}</span>
    </button>
  );
}
