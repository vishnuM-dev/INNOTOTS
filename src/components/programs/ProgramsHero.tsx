import Link from 'next/link';
import FloatingShape from '@/components/animations/FloatingShape';
import Badge from '@/components/ui/Badge';
import { programs } from '@/data/programs';

export default function ProgramsHero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #FFFBEC 0%, #DDF3F1 100%)' }}
    >
      <FloatingShape shape="circle" color="#FFBA08" size={80} delay={0} className="absolute top-8 right-8 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="star" color="#FF3F68" size={50} delay={1} className="absolute bottom-8 left-8 pointer-events-none" opacity={0.2} />
      <FloatingShape shape="circle" color="#A75CE2" size={60} delay={0.5} className="absolute top-20 left-16 pointer-events-none" opacity={0.1} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Breadcrumb */}
        <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-nunito)', color: '#666' }}>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: '#FF3F68' }}>Programs & Activities</li>
          </ol>
        </nav>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
          style={{ fontFamily: 'var(--font-fredoka)', color: '#07194F' }}
        >
          Programs & Activities
        </h1>
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-nunito)', color: '#555' }}
        >
          Thoughtfully designed programs for every stage of early childhood, from playful beginnings to school readiness.
        </p>

        {/* Program tab preview */}
        <div className="flex flex-wrap justify-center gap-3">
          {programs.map((p) => (
            <Badge key={p.id} color={p.color} className="text-sm px-4 py-2">
              {p.name} · {p.ageRange}
            </Badge>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
