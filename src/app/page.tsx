'use client';

import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import PhantomCentenary from '@/components/PhantomCentenary/PhantomCentenary';
import ContentSection from '@/components/ContentSection/ContentSection';
import ExpandedSection from '@/components/ExpandSectiom/ExpandedSection';
import UnforgettableHeritage from '@/components/UnforgettableHeritage/UnforgettableHeritage';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        <PhantomCentenary
          sectionClass="section-two"
          backgroundImage="/assets/centenary-background.png"
        />

        <ExpandedSection
          sectionClass="section-three"
          imageSrc="/assets/expanded-image-background.webp"
          imageAlt="Bespoke Interior"
          reverse={true}
          backgroundColor="#000"
        />

        <UnforgettableHeritage sectionClass="section-four" />

        <ExpandedSection
          sectionClass="section-five"
          imageSrc="/assets/expanded-image-bg.webp"
          imageAlt="Phantom Centenary Interior"
          reverse={false}
          backgroundColor="#fff"
        />
      </main>
    </>
  );
}

