'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './UnforgettableHeritage.scss';

gsap.registerPlugin(ScrollTrigger);

interface UnforgettableHeritageProps {
  sectionClass?: string;
}

export default function UnforgettableHeritage({ sectionClass }: UnforgettableHeritageProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Blur animation on scroll out
    gsap.to(section, {
      filter: 'blur(8px)',
      scrollTrigger: {
        trigger: section,
        start: 'bottom top',
        end: 'bottom -100',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={`unforgettable-heritage ${sectionClass || ''}`}>
      <div className="content-wrapper">
        <h1 className="title">UNFORGETTABLE HERITAGE</h1>
        
        <p className="intro-text">
          Inside Phantom Centenary, surfaces capture magnificent archival references, rich in detail. Across its canvases, a century of Phantom's story elegantly unfolds.
        </p>

        <p className="description-text">
          The rear seats, developed alongside a fashion atelier, are layered artworks in themselves – combining high-resolution printed textiles, finely drawn linework, and delicate golden embroidery. Over 12 months of development, this process required entirely new inks, finishes, and techniques, culminating in 45 individually crafted panels, perfectly tailored and aligned by hand.
        </p>
      </div>
    </section>
  );
}
