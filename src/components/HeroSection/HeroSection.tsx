'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.scss';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Blur effect on scroll
    gsap.to(hero, {
      filter: 'blur(8px)',
      scrollTrigger: {
        trigger: '.section-two',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__background">
        <img
          src="/assets/BannerCarImage.webp"
          alt="Rolls-Royce Phantom Centenary"
          className="hero__image"
        />
      </div>
    </section>
  );
}
