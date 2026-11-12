import { Heart, Gamepad2, Palette, Users, Star, TrendingUp } from 'lucide-react';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

const reasons = [
  {
    id: 1,
    title: 'Caring Environment',
    description: 'A warm, safe and nurturing space where every child feels valued, respected and loved.',
    icon: Heart,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
  {
    id: 2,
    title: 'Play-Based Education',
    description: 'Learning through play ensures children develop naturally and joyfully at their own pace.',
    icon: Gamepad2,
    color: '#FFBA08',
    bg: '#FFFBEC',
  },
  {
    id: 3,
    title: 'Creative Classrooms',
    description: 'Vibrant, stimulating spaces designed to spark curiosity and inspire creative thinking.',
    icon: Palette,
    color: '#A75CE2',
    bg: '#F7F0FD',
  },
  {
    id: 4,
    title: 'Social Development',
    description: 'Group activities and collaborative play help children build friendships and social skills.',
    icon: Users,
    color: '#08BFC1',
    bg: '#F0FAFA',
  },
  {
    id: 5,
    title: 'Age-Appropriate Activities',
    description: 'Every activity is carefully matched to developmental milestones for each age group.',
    icon: Star,
    color: '#572A8D',
    bg: '#F4EFF9',
  },
  {
    id: 6,
    title: 'Individual Growth Focus',
    description: "We celebrate every child's unique strengths and support their personal journey of growth.",
    icon: TrendingUp,
    color: '#FF3F68',
    bg: '#FFF0F3',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Why Choose InnoTots?"
            subtitle="We go above and beyond to make every child's preschool experience truly special."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reasons.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <AnimatedCard
                className="rounded-2xl p-6 h-full flex gap-4"
                style={{ backgroundColor: item.bg, border: `1px solid ${item.color}20` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: item.color + '20' }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
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
