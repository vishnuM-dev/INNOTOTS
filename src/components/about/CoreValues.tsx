import { Heart, Palette, Compass, Star, Users, Smile } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const values = [
  { title: 'Kindness', description: 'We teach and model kindness in every interaction, creating a culture of care and compassion.', color: '#FF3F68', bg: '#FFF0F3', icon: Heart },
  { title: 'Creativity', description: 'We celebrate imagination and encourage children to express themselves freely and boldly.', color: '#A75CE2', bg: '#F7F0FD', icon: Palette },
  { title: 'Curiosity', description: 'Questions are welcomed and wonder is celebrated as the engine of all learning.', color: '#FFBA08', bg: '#FFFBEC', icon: Compass },
  { title: 'Confidence', description: 'We build self-belief by celebrating every child\'s achievements and unique strengths.', color: '#08BFC1', bg: '#F0FAFA', icon: Star },
  { title: 'Respect', description: 'We treat every child, family and community member with dignity, care and genuine respect.', color: '#07194F', bg: '#EEF0F8', icon: Users },
  { title: 'Joyful Learning', description: 'Learning should be a joyful adventure — and at InnoTots, we make sure it always is.', color: '#572A8D', bg: '#F4EFF9', icon: Smile },
];

export default function CoreValues() {
  return (
    <section className="py-20" style={{ backgroundColor: '#DDF3F1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Core Values"
            subtitle="The values that guide everything we do at InnoTots Preschool."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <AnimatedCard
                className="rounded-2xl p-6 h-full"
                style={{ backgroundColor: value.bg, border: `2px solid ${value.color}25` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: value.color + '20' }}
                  >
                    <value.icon size={24} style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                  {value.description}
                </p>
                <div className="mt-4 h-1 w-10 rounded-full" style={{ backgroundColor: value.color }} />
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
