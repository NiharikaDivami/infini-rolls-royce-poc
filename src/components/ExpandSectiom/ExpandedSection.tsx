"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ExpandedSection.scss";

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  sectionClass: string;
  reverse?: boolean;
}

export default function ContentSection({
  imageSrc,
  imageAlt,
  sectionClass,
  reverse = false,
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
  if (!sectionRef.current) return;

  const section = sectionRef.current;
  const border = section.querySelector(
    ".content-section__border-frame"
  ) as HTMLElement;

  if (!border) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      // 🔑 start ONLY when fully visible
      start: "bottom bottom",

      // 🔑 total scroll space (3 phases)
      end: "+=900",

      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  /* -------------------------
     PHASE 1 — lock section
     (no animation)
  -------------------------- */
  tl.to({}, { duration: 1 });

  /* -------------------------
     PHASE 2 — animate border
  -------------------------- */
  tl.to(border, {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 198,    
    borderBottomWidth: 0,   
    ease: "power2.out",
    duration: 1,
  });

  /* -------------------------
     PHASE 3 — hold final state
  -------------------------- */
  tl.to({}, { duration: 1 });

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);


  return (
    <section ref={sectionRef}>
      <div className={`content-section__container ${reverse ? "reverse" : ""}`}>
        <div
          ref={imageContainerRef}
          className="content-section__image-container"
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            className="content-section__image"
          />
          <div className="content-section__border-frame" />
        </div>
      </div>
    </section>
  );
}
