'use client';

import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import PhantomCentenary from '@/components/PhantomCentenary/PhantomCentenary';
import ContentSection from '@/components/ContentSection/ContentSection';
import ExpandedSection from '@/components/ExpandSectiom/ExpandedSection';

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

