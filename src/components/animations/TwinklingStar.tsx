'use client';

interface TwinklingStarProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function TwinklingStar({
  size = 24,
  color = '#FFBA08',
  delay = 0,
  duration = 2.2,
  className = '',
}: TwinklingStarProps) {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{
        animationName: 'twinkle',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        transformOrigin: 'center',
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs overflow-visible"
        style={{ transformOrigin: 'center' }}
      >
        <polygon
          points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
          fill={color}
        />
      </svg>
    </div>
  );
}
