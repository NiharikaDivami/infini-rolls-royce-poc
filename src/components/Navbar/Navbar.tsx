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

    // Navbar scroll animation
    gsap.to(navbar, {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      scrollTrigger: {
        trigger: document.body,
        start: 'top -100',
        end: 'top -101',
        toggleActions: 'play none none reverse',
      },
    });

    // Logo change animation
    gsap.to('.navbar__logo--wordmark', {
      opacity: 0,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -100',
        end: 'top -101',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.to('.navbar__logo--emblem', {
      opacity: 1,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -100',
        end: 'top -101',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__logo--wordmark">ROLLS-ROYCE</div>
          <div className="navbar__logo--emblem">RR</div>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">Discover</li>
          <li className="navbar__menu-item">Features</li>
          <li className="navbar__menu-item">Gallery</li>
          <li className="navbar__menu-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
