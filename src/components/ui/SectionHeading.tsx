import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: string;
  badgeBg?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  color?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeColor = '#FF3F68',
  badgeBg = '#FFF0F3',
  title,
  subtitle,
  center = false,
  color = '#07194F',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-8 md:mb-12', center ? 'text-center' : 'text-left', className)}>
      {badge && (
        <div className={cn('inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs', center ? 'mx-auto' : '')}
          style={{ backgroundColor: badgeBg, color: badgeColor, fontFamily: 'var(--font-nunito)' }}
        >
          <span>{badge}</span>
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-3"
        style={{ fontFamily: 'var(--font-fredoka)', color }}
      >
        {title}
      </h2>
      <div
        className="h-1.5 w-14 rounded-full mb-4"
        style={{
          backgroundColor: badgeColor || '#FF3F68',
          marginLeft: center ? 'auto' : '0',
          marginRight: center ? 'auto' : '0',
        }}
      />
      {subtitle && (
        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed text-gray-600"
          style={{
            fontFamily: 'var(--font-nunito)',
            marginLeft: center ? 'auto' : '0',
            marginRight: center ? 'auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
