'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BorderButton from '@/components/BorderButton/BorderButton';
import './PhantomCentenary.scss';

gsap.registerPlugin(ScrollTrigger);

interface PhantomCentenaryProps {
  backgroundImage: string;
  sectionClass: string;
}

export default function PhantomCentenary({
  backgroundImage,
  sectionClass,
}: PhantomCentenaryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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
    <section 
      ref={sectionRef} 
      className={`phantom-centenary ${sectionClass}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="phantom-centenary__overlay"></div>
      <div ref={contentRef} className="phantom-centenary__content">
        <h1 className="phantom-centenary__main-title">PHANTOM</h1>
        <h2 className="phantom-centenary__subtitle">CENTENARY</h2>
        
        <p className="phantom-centenary__specs">
          NEDC * combined: CO2 emissions: 345 g/km; Fuel consumption: 18.7 mpg / 15.1 l/100km. WLTP # combined: CO2 emissions: 353-365 g/km; Fuel consumption: 17.4-18.1 mpg / 15.6-16.2 l/100km.
        </p>
        
        <p className="phantom-centenary__description">
          For a century, Phantom has shaped the very language of luxury. As this peerless nameplate celebrates its 100th anniversary, the Rolls-Royce Bespoke Collective presents its magnum opus: Phantom Centenary Private Collection.
        </p>
        
        <p className="phantom-centenary__description">
          As the most complex and intricately crafted Private Collection to date, the history of Phantom is woven through every thread and etched into every surface of the collection's 25 motor cars.
        </p>
        
        <p className="phantom-centenary__description">
          This is a statement that honours Phantom's legacy, defines its present, and projects the principles that will shape the model's next 100 years and beyond.
        </p>
        
        <BorderButton variant="draw meet" className="phantom-centenary__cta">
          CRAFT YOUR VISION
        </BorderButton>
      </div>
    </section>
  );
}
