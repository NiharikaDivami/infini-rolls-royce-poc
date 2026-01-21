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

    // Initial fade in animation
    gsap.from('.hero__content', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: 'power3.out',
    });

    // Blur effect on scroll
    gsap.to(hero, {
      filter: 'blur(8px)',
      scale: 1.1,
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
          src="/assets/hero-background.png"
          alt="Rolls-Royce Phantom"
          className="hero__image"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">PHANTOM CENTENARY</h1>
        <p className="hero__subtitle">A PRIVATE COLLECTION</p>
        <p className="hero__description">
          Celebrating 100 years of automotive excellence with unparalleled luxury and craftsmanship
        </p>
        <button className="hero__cta">Explore Collection</button>
      </div>
    </section>
  );
}
