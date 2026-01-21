'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContentSection.scss';

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sectionClass: string;
  reverse?: boolean;
}

export default function ContentSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  sectionClass,
  reverse = false,
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;

    if (!section || !imageContainer || !image) return;

    // Image expansion animation - starts with padding/border, expands to full width
    gsap.fromTo(
      imageContainer,
      {
        padding: '2rem',
      },
      {
        padding: '0rem',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      image,
      {
        borderRadius: '20px',
        scale: 0.9,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      {
        borderRadius: '0px',
        scale: 1,
        boxShadow: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    // Content fade in
    gsap.fromTo(
      '.content-section__text',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      }
    );

    // Blur previous section
    gsap.to(section, {
      filter: 'blur(8px)',
      scrollTrigger: {
        trigger: section,
        start: 'bottom top',
        end: 'bottom -100',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className={`content-section ${sectionClass}`}>
      <div className={`content-section__container ${reverse ? 'reverse' : ''}`}>
        <div ref={imageContainerRef} className="content-section__image-container">
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            className="content-section__image"
          />
        </div>
        <div className="content-section__text">
          {subtitle && <p className="content-section__subtitle">{subtitle}</p>}
          <h2 className="content-section__title">{title}</h2>
          <p className="content-section__description">{description}</p>
        </div>
      </div>
    </section>
  );
}
