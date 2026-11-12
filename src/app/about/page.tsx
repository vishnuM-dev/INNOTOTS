import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import VisionMission from '@/components/about/VisionMission';
import Philosophy from '@/components/about/Philosophy';
import TeachingApproach from '@/components/about/TeachingApproach';
import LearningEnvironment from '@/components/about/LearningEnvironment';
import CoreValues from '@/components/about/CoreValues';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import WaveDivider from '@/components/animations/WaveDivider';

export const metadata: Metadata = {
  title: 'About Us | InnoTots Preschool',
  description: 'Learn about InnoTots Preschool — our story, vision, mission, educational philosophy, learning environment and core values.',
  openGraph: {
    title: 'About Us | InnoTots Preschool',
    description: 'Discover our story, values and commitment to nurturing every little learner at InnoTots Preschool.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <AboutHero />

      {/* 2. Introduction to InnoTots */}
      <AboutIntro />
      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />

      {/* 3. Our Vision & 4. Our Mission */}
      <VisionMission />
      <WaveDivider color="#ffffff" bgColor="#F4FAF9" />

      {/* 5. Educational Philosophy */}
      <Philosophy />
      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />

      {/* 6. Our Teaching Approach */}
      <TeachingApproach />
      <WaveDivider color="#ffffff" bgColor="#F4FAF9" />

      {/* 7. Learning Environment */}
      <LearningEnvironment />
      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />

      {/* 8. Our Core Values */}
      <CoreValues />
      <WaveDivider color="#572A8D" bgColor="#F4FAF9" />

      {/* 9. Admissions CTA */}
      <AdmissionCTA />
      <WaveDivider color="#DDF3F1" bgColor="#572A8D" />
    </>
  );
}
