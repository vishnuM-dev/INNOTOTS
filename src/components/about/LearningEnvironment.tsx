import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCard from '@/components/animations/AnimatedCard';
import { ShieldCheck, Palette, BookOpen, Sun, Sparkles } from 'lucide-react';

const environmentFeatures = [
  {
    title: 'Safe & Hygienic Classrooms',
    description: 'Bright, child-proofed spaces with rounded child-safe furniture, natural ventilation and rigorous daily cleanliness standards.',
    icon: ShieldCheck,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    title: 'Sensory Play & Art Zones',
    description: 'Dedicated stations with sensory bins, water play tables, non-toxic clays and open craft materials that invite spontaneous creation.',
    icon: Palette,
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
  {
    title: 'Sunny Story & Reading Nooks',
    description: 'Cozy, pillow-filled quiet corners with low-height bookshelves filled with diverse picture books to encourage peaceful reading rituals.',
    icon: BookOpen,
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    title: 'Secure Outdoor Play Area',
    description: 'Safe outdoor play turf with balance beams, mini climbing gyms and tricycle tracks where children enjoy fresh air and motor development.',
    icon: Sun,
    color: '#A75CE2',
    bg: '#F7F0FD',
  },
];

export default function LearningEnvironment() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="Thoughtfully Designed"
            badgeColor="#08BFC1"
            badgeBg="#F0FAFA"
            title="Our Learning Environment"
            subtitle="Spaces crafted to feel warm like a home and stimulating like a world of wonder."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {environmentFeatures.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <AnimatedCard
                className="bg-white rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div>
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 shadow-2xs"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    <item.icon size={26} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#07194F] mb-2"
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-gray-600"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="h-1.5 w-10 rounded-full" style={{ backgroundColor: item.color }} />
                  <Sparkles size={14} className="text-gray-300" />
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

