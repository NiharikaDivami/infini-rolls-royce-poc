'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = navRef.current;
    if (!navbar) return;

    // Change navbar background when section-two comes into view
    gsap.to(navbar, {
      background: 'linear-gradient(0deg, transparent 15%, rgba(0, 0, 0, .25))',
      scrollTrigger: {
        trigger: '.section-two',
        start: 'top bottom',
        end: 'top top',
        scrub: 0.1,
      },
    });

    gsap.to(navbar, {
      height: '60px',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'top -200',
        scrub: 0.1,
      },
    });

    // Animate the line position and opacity
    gsap.to('.navbar::after', {
      '--line-opacity': 0,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'top -200',
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;
          const lineElement = document.querySelector('.navbar::after');
          if (navbar) {
            // Move line from 120px to 100px (only 20px movement)
            const newTop = 120 - (progress * 20);
            navbar.style.setProperty('--line-top', `${newTop}px`);
            navbar.style.setProperty('--line-opacity', String(1 - progress));
          }
        },
      },
    });

    // Logo wordmark fade out smoothly
    gsap.to('.navbar__logo--wordmark', {
      opacity: 0,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'top -100',
        scrub: 0.1,
      },
    });

    // Logo emblem fade in and scale down smoothly
    gsap.to('.navbar__logo--emblem', {
      opacity: 1,
      scale: 0.8,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'top -200',
        scrub: 0.1,
      },
    });
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img 
            src="/assets/rolls-royce-logo2.svg" 
            alt="Rolls-Royce" 
            className="navbar__logo--wordmark"
          />
          <img 
            src="/assets/rolls-royce-logo.svg" 
            alt="Rolls-Royce Spirit of Ecstasy" 
            className="navbar__logo--emblem"
          />
        </div>
        <div className="navbar__left">
          <button className="navbar__menu-btn">
            <span className="navbar__menu-icon"></span>
            <span className="navbar__menu-icon"></span>
            <span className="navbar__menu-icon"></span>
          </button>
          <span className="navbar__menu-text">MENU</span>
        </div>
        <div className="navbar__right">
          <button className="navbar__dealer-btn">
            <span className="navbar__search-icon">🔍</span>
            <span className="navbar__dealer-text">FIND A DEALER</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
