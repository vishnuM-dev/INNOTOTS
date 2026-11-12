import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import LearningApproach from '@/components/home/LearningApproach';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import SchoolEnvironment from '@/components/home/SchoolEnvironment';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import ContactPreview from '@/components/home/ContactPreview';
import WaveDivider from '@/components/animations/WaveDivider';

export const metadata: Metadata = {
  title: 'InnoTots Preschool | Little Minds, Big Dreams',
  description: 'InnoTots Preschool — A joyful, play-based preschool offering Playgroup, Nursery, LKG and UKG programs for children aged 1.5 to 5.5 years.',
  openGraph: {
    title: 'InnoTots Preschool | Little Minds, Big Dreams',
    description: 'A joyful preschool where every little mind is nurtured with love, creativity and the magic of play-based learning.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />
      <LearningApproach />
      <WaveDivider color="#ffffff" bgColor="#F4FAF9" />
      <FeaturedPrograms />
      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />
      <WhyChooseUs />
      <WaveDivider color="#ffffff" bgColor="#F4FAF9" />
      <SchoolEnvironment />
      <WaveDivider color="#572A8D" bgColor="#ffffff" />
      <AdmissionCTA />
      <WaveDivider color="#ffffff" bgColor="#572A8D" />
      <ContactPreview />
      <WaveDivider color="#DDF3F1" bgColor="#ffffff" />
    </>
  );
}
