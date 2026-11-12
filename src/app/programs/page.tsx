import type { Metadata } from 'next';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramCard from '@/components/programs/ProgramCard';
import ActivitiesSection from '@/components/programs/ActivitiesSection';
import DailySchedule from '@/components/programs/DailySchedule';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import WaveDivider from '@/components/animations/WaveDivider';
import { programs } from '@/data/programs';

export const metadata: Metadata = {
  title: 'Programs & Activities | InnoTots Preschool',
  description: 'Explore InnoTots Preschool programs: Playgroup, Nursery, LKG and UKG — crafted for children aged 1.5 to 5.5 years.',
  openGraph: {
    title: 'Programs & Activities | InnoTots Preschool',
    description: 'Age-appropriate programs for every stage of early childhood at InnoTots Preschool.',
  },
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      <WaveDivider color="#F4FAF9" bgColor="#ffffff" />
      <ActivitiesSection />
      <WaveDivider color="#ffffff" bgColor="#F4FAF9" />
      <DailySchedule />
      <WaveDivider color="#572A8D" bgColor="#ffffff" />
      <AdmissionCTA />
      <WaveDivider color="#DDF3F1" bgColor="#572A8D" />
    </>
  );
}
