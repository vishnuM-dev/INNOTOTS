import { Lightbulb, Users, Smile, Compass, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const pillars = [
  { icon: Lightbulb, title: 'Learning Through Play', text: 'Play is the natural language of early childhood. Every game, story and playful challenge becomes a rich learning moment.', color: '#FFBA08', bg: '#FFFBEC' },
  { icon: Compass, title: 'Curiosity & Exploration', text: 'We encourage children to ask "why", touch, build and discover the world with genuine excitement.', color: '#08BFC1', bg: '#F0FAFA' },
  { icon: Smile, title: 'Social & Emotional Growth', text: 'Understanding feelings, practicing sharing and forming friendships are core to our everyday community culture.', color: '#FF3F68', bg: '#FFF0F3' },
  { icon: Users, title: 'Community & Belonging', text: 'Every child and family belongs here. We build an inclusive village where every unique background is embraced.', color: '#A75CE2', bg: '#F7F0FD' },
];

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <SectionHeading
                badge="What We Believe"
                badgeColor="#572A8D"
                badgeBg="#F4EFF9"
                title="Our Educational Philosophy"
                subtitle="We believe every child is born a natural thinker and explorer. Our role is to create the loving conditions for that genius to unfold."
              />

              <p className="text-base leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'var(--font-nunito)' }}>
                At InnoTots, we follow a holistic, child-centered approach rooted in the timeless truth that young children learn best through active hands-on exploration and joyful connection.
              </p>

              <p className="text-base leading-relaxed text-gray-700" style={{ fontFamily: 'var(--font-nunito)' }}>
                We mindfully balance structured learning with spontaneous free play, group collaboration with personal discovery, and foundational academic readiness with deep emotional well-being.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: 4 Pillar Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-2xs" style={{ backgroundColor: p.bg, color: p.color }}>
                        <p.icon size={22} />
                      </div>
                      <h4 className="font-semibold text-lg text-[#07194F] mb-2" style={{ fontFamily: 'var(--font-fredoka)' }}>
                        {p.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600" style={{ fontFamily: 'var(--font-nunito)' }}>
                        {p.text}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                      <div className="h-1 w-10 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="text-[11px] font-bold text-gray-400">Pillar 0{i + 1}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
