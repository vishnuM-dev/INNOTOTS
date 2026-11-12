import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import VisionMission from '@/components/about/VisionMission';
import Philosophy from '@/components/about/Philosophy';
import TeachingApproach from '@/components/about/TeachingApproach';
import CoreValues from '@/components/about/CoreValues';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import WaveDivider from '@/components/animations/WaveDivider';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us | InnoTots Preschool',
  description: 'Learn about InnoTots Preschool — our story, vision, mission, educational philosophy and core values.',
  openGraph: {
    title: 'About Us | InnoTots Preschool',
    description: 'Discover our story, values and commitment to nurturing every little learner at InnoTots Preschool.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <WaveDivider color="#DDF3F1" />
      {/* Intro section */}
      <section className="py-16" style={{ backgroundColor: '#DDF3F1' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#444' }}>
              InnoTots Preschool is a place where little ones take their first steps into the world of learning. We believe deeply that the early years shape a lifetime, and we are committed to making those years filled with joy, exploration and love.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <WaveDivider color="#ffffff" />
      <Philosophy />
      <WaveDivider color="#ffffff" flip />
      <TeachingApproach />
      <WaveDivider color="#DDF3F1" />
      <CoreValues />
      <WaveDivider color="#572A8D" />
      <AdmissionCTA />
    </>
  );
}
