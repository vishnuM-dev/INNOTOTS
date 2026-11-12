import Link from 'next/link';
import FloatingShape from '@/components/animations/FloatingShape';
import TwinklingStar from '@/components/animations/TwinklingStar';

export default function AdmissionsHero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #F7F0FD 0%, #DDF3F1 100%)' }}
    >
      <FloatingShape shape="star" color="#FFBA08" size={60} delay={0} className="absolute top-8 right-10 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#FF3F68" size={80} delay={1} className="absolute bottom-8 left-8 pointer-events-none" opacity={0.1} />
      <TwinklingStar size={28} color="#A75CE2" delay={0.5} className="absolute top-12 left-16 pointer-events-none" />
      <TwinklingStar size={20} color="#08BFC1" delay={1.3} className="absolute bottom-16 right-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#666' }}>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: '#572A8D' }}>Admissions & Contact</li>
          </ol>
        </nav>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
          style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}
        >
          Begin Your Child&apos;s Happy Learning Journey
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}
        >
          Taking the first step is easy. Reach out and we&apos;ll guide you through every part of the admission process.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
