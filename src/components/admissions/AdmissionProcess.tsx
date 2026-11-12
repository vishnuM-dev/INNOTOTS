import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  { number: 1, title: 'Enquire', description: 'Fill out our enquiry form or call us. We\'ll share program details and answer your questions.', color: '#FF3F68' },
  { number: 2, title: 'Visit & Interaction', description: 'Schedule a school visit so your child can experience the InnoTots environment firsthand.', color: '#FFBA08' },
  { number: 3, title: 'Registration', description: 'Complete the registration process with our friendly team. We keep it simple and straightforward.', color: '#08BFC1' },
  { number: 4, title: 'Welcome Aboard!', description: 'Your little one officially joins the InnoTots family. The adventure begins here!', color: '#A75CE2' },
];

export default function AdmissionProcess() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Admission Process"
            subtitle="Four simple steps to start your child's InnoTots journey."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-10 left-0 right-0 h-0.5"
            style={{ backgroundColor: '#DDF3F1', zIndex: 0 }}
          />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Number circle */}
                <div
                  className="w-20 h-20 rounded-full flex flex-col items-center justify-center mb-4 shadow-lg text-white"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-xs opacity-80 font-semibold" style={{ fontFamily: 'var(--font-nunito)' }}>Step</span>
                  <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>{step.number}</span>
                </div>

                {/* Connecting arrow for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-9 text-gray-300 z-20">›</div>
                )}

                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}>
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
