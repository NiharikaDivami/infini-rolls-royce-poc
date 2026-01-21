'use client';

import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ContentSection from '@/components/ContentSection/ContentSection';
import ExpandedSection from '@/components/ExpandSectiom/ExpandedSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        <ContentSection
          sectionClass="section-two"
          title="CENTENARY COLLECTION"
          subtitle="A Legacy Redefined"
          description="Experience the pinnacle of automotive luxury with our exclusive Centenary Collection. Each vehicle is meticulously crafted to embody 100 years of uncompromising excellence and timeless elegance."
          imageSrc="/assets/centenary-background.png"
          imageAlt="Centenary Collection"
        />

        <ExpandedSection
          sectionClass="section-three"
          imageSrc="/assets/expanded-image-background.webp"
          imageAlt="Bespoke Interior"
          reverse={true}
        />

        <ContentSection
          sectionClass="section-four"
          title="UNPARALLELED PERFORMANCE"
          subtitle="Power Meets Grace"
          description="Beneath the elegant exterior lies engineering excellence. The Phantom delivers whisper-quiet power and effortless performance, ensuring every journey is as memorable as the destination."
          imageSrc="/assets/expanded-image-bg.webp"
          imageAlt="Performance Excellence"
        />
      </main>
    </>
  );
}

