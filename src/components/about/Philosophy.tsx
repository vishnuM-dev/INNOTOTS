import { Lightbulb, Users, Smile, Compass } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const pillars = [
  { icon: Lightbulb, title: 'Learning Through Play', text: 'Play is the language of childhood. Every game, every story and every creative act is a learning opportunity.', color: '#FFBA08' },
  { icon: Compass, title: 'Curiosity & Exploration', text: 'We encourage children to ask questions, investigate the world and embrace the wonder of discovery.', color: '#08BFC1' },
  { icon: Smile, title: 'Social & Emotional Growth', text: 'Understanding feelings, building friendships and developing empathy are core pillars of our approach.', color: '#FF3F68' },
  { icon: Users, title: 'Community & Belonging', text: 'Every child belongs here. We build a community of care where differences are celebrated.', color: '#A75CE2' },
];

export default function Philosophy() {
  return (
    <section className="py-20" style={{ backgroundColor: '#DDF3F1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <SectionHeading
              title="Our Educational Philosophy"
              subtitle="We believe every child is a natural learner. Our role is to create the conditions for that learning to flourish."
            />
            <p className="text-base leading-relaxed mb-6" style={{ color: '#444', fontFamily: 'var(--font-nunito)' }}>
              At InnoTots, we follow a holistic, child-centered philosophy rooted in the understanding that young children learn best through hands-on exploration, meaningful relationships and joyful experiences.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#444', fontFamily: 'var(--font-nunito)' }}>
              We balance structured learning with free play, individual pursuits with collaborative activities, and academic preparation with emotional well-being — because we know that the whole child matters.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: p.color + '20' }}>
                    <p.icon size={20} style={{ color: p.color }} />
                  </div>
                  <h4 className="font-semibold mb-2 text-base" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
