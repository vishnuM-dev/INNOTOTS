import ScrollReveal from '@/components/animations/ScrollReveal';
import { Eye, Target } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: 'linear-gradient(135deg, #F0FAFA 0%, #DDF3F1 100%)', borderLeft: '4px solid #08BFC1' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#08BFC120' }}>
                <Eye size={28} style={{ color: '#08BFC1' }} />
              </div>
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                Our Vision
              </h2>
              <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#444' }}>
                To nurture confident, curious and creative learners who explore the world with joy, compassion and an unquenchable love for discovery.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={0.1}>
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: 'linear-gradient(135deg, #FFF0F3 0%, #FFE0E8 100%)', borderLeft: '4px solid #FF3F68' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#FF3F6820' }}>
                <Target size={28} style={{ color: '#FF3F68' }} />
              </div>
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                Our Mission
              </h2>
              <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#444' }}>
                To provide a safe, stimulating and joyful environment where every child thrives through play, creativity and care — building the strongest possible foundation for life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
