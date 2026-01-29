'use client';

import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ContentSection from '@/components/ContentSection/ContentSection';
import ExpandedSection from '@/components/ExpandSectiom/ExpandedSection';
import UnforgettableHeritage from '@/components/UnforgettableHeritage/UnforgettableHeritage';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        
        <img
          src="/assets/two.png"
          alt="Rolls Royce"
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto' }}
        />
        
        

        <ExpandedSection
          sectionClass="section-three"
          imageSrc="/assets/three.png"
          imageAlt="Bespoke Interior"
          reverse={true}
          backgroundColor="#000"
        />
          <img
          src="/assets/four.png"
          alt="Rolls Royce"
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto' }}
        />
        

        {/* <UnforgettableHeritage sectionClass="section-four" /> */}

        <ExpandedSection
          sectionClass="section-five"
          imageSrc="/assets/five.png"
          imageAlt="Phantom Centenary Interior"
          reverse={false}
          backgroundColor="#000"
        />
      </main>
    </>
  );
}

