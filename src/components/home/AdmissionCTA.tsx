import PlayfulButton from '@/components/animations/PlayfulButton';
import FloatingShape from '@/components/animations/FloatingShape';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AdmissionCTA() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: '#572A8D' }}
    >
      {/* Decorative shapes */}
      <FloatingShape shape="circle" color="#FFBA08" size={80} delay={0} className="absolute -top-10 -left-10 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="star" color="#FF3F68" size={60} delay={1} className="absolute top-10 right-20 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#08BFC1" size={100} delay={0.5} className="absolute -bottom-10 right-10 pointer-events-none" opacity={0.15} />
      <FloatingShape shape="triangle" color="#DDF3F1" size={50} delay={2} className="absolute bottom-10 left-1/4 pointer-events-none" opacity={0.15} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollReveal>
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#DDF3F1', fontFamily: 'var(--font-nunito)' }}
          >
            🎉 Admissions Open
          </span>

          <h2
            className="text-3xl md:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            A Happy Beginning Starts Here!
          </h2>

          <p
            className="text-lg mb-8 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-nunito)' }}
          >
            Discover a joyful learning journey for your little one.
          </p>

          <PlayfulButton
            href="/admissions-contact"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base"
            style={{ backgroundColor: '#FFBA08', color: '#07194F', fontFamily: 'var(--font-nunito)' }}
          >
            Enquire Now
          </PlayfulButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
