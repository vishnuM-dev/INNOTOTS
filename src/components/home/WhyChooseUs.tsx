import { Heart, Gamepad2, Palette, Users, Sparkles, TrendingUp } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const reasons = [
  {
    id: 1,
    title: 'Caring Environment',
    description: 'A warm, safe and deeply nurturing sanctuary where every child feels valued, respected and individually loved.',
    icon: Heart,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    id: 2,
    title: 'Play-Based Education',
    description: 'Learning through play ensures children develop curiosity, fine motor skills and logic joyfully at their natural pace.',
    icon: Gamepad2,
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
  {
    id: 3,
    title: 'Creative Classrooms',
    description: 'Bright, stimulating spaces packed with sensory materials, book corners and craft centers to spark daily imagination.',
    icon: Palette,
    color: '#A75CE2',
    bg: '#F7F0FD',
  },
  {
    id: 4,
    title: 'Social & Emotional Growth',
    description: 'Group games, sharing circles and collaborative projects help children build genuine empathy and friendship skills.',
    icon: Users,
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    id: 5,
    title: 'Age-Appropriate Milestones',
    description: 'Every activity is thoughtfully calibrated to the cognitive, emotional and physical development of each age tier.',
    icon: Sparkles,
    color: '#572A8D',
    bg: '#F4EFF9',
  },
  {
    id: 6,
    title: 'Individual Attention',
    description: 'Low student-to-educator ratios ensure our teachers can celebrate your child\'s unique strengths and support their journey.',
    icon: TrendingUp,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-[#F4FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            badge="The InnoTots Difference"
            badgeColor="#572A8D"
            badgeBg="#F4EFF9"
            title="Why Choose InnoTots?"
            subtitle="We go above and beyond to make every little learner's preschool years filled with magic, security and growth."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.07}>
              <AnimatedCard
                className="bg-white rounded-3xl p-6 sm:p-7 h-full flex flex-col sm:flex-row items-start gap-4 shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xs"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  <item.icon size={26} />
                </div>
                <div className="flex-1">
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
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
