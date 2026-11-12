import type { Program } from '@/types';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Badge from '@/components/ui/Badge';
import PlayfulButton from '@/components/animations/PlayfulButton';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CheckCircle } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  reverse?: boolean;
}

export default function ProgramCard({ program, reverse = false }: ProgramCardProps) {
  return (
    <ScrollReveal>
      <div
        className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center bg-white rounded-3xl p-8 shadow-sm`}
        style={{ border: `2px solid ${program.color}20` }}
      >
        {/* Image */}
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <div className="relative">
            <ImagePlaceholder
              label={program.name}
              color={program.color + '20'}
              height={320}
              className="w-full"
            />
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
            >
              {program.name}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <Badge color={program.color} className="mb-3">{program.ageRange}</Badge>
          <h2 className="text-3xl font-semibold mb-2" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
            {program.name}
          </h2>
          <p className="text-sm font-semibold mb-4" style={{ color: program.color, fontFamily: 'var(--font-nunito)' }}>
            {program.tagline}
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
            {program.description}
          </p>
          <ul className="space-y-2 mb-6">
            {program.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#444' }}>
                <CheckCircle size={16} style={{ color: program.color, flexShrink: 0 }} />
                {h}
              </li>
            ))}
          </ul>
          <PlayfulButton
            href="/admissions-contact"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold"
            style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
          >
            Enquire to Enrol
          </PlayfulButton>
        </div>
      </div>
    </ScrollReveal>
  );
}
