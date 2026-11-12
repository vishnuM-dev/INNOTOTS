import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  color?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  color = '#07194F',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-8 md:mb-12', center ? 'text-center' : '', className)}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3"
        style={{ fontFamily: 'var(--font-fredoka)', color }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{
            fontFamily: 'var(--font-nunito)',
            color: '#555',
            margin: center ? '0 auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="mt-3 h-1 w-16 rounded-full"
        style={{
          backgroundColor: '#FF3F68',
          margin: center ? '12px auto 0' : '12px 0 0',
        }}
      />
    </div>
  );
}
