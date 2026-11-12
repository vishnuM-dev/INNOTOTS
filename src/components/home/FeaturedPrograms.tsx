import Link from 'next/link';
import { programs } from '@/data/programs';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CheckCircle } from 'lucide-react';

export default function FeaturedPrograms() {
  return (
    <section className="py-20" style={{ backgroundColor: '#DDF3F1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Programs"
            subtitle="Age-appropriate programs crafted to give every child the best start in life."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {programs.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 0.1}>
              <AnimatedCard className="bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                <ImagePlaceholder
                  label={program.name}
                  color={program.color + '25'}
                  height={180}
                  rounded={false}
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                      {program.name}
                    </h3>
                    <Badge color={program.color}>{program.ageRange}</Badge>
                  </div>
                  <p className="text-xs font-semibold mb-2" style={{ color: program.color, fontFamily: 'var(--font-nunito)' }}>
                    {program.tagline}
                  </p>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#555', fontFamily: 'var(--font-nunito)' }}>
                    {program.description}
                  </p>
                  <ul className="space-y-1 mb-5">
                    {program.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs" style={{ fontFamily: 'var(--font-nunito)', color: '#444' }}>
                        <CheckCircle size={12} style={{ color: program.color, flexShrink: 0 }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programs"
                    className="inline-block text-center px-4 py-2 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: program.color, fontFamily: 'var(--font-nunito)' }}
                  >
                    Learn More
                  </Link>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
