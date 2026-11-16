'use client';

interface AnimatedCloudProps {
  size?: number;
  delay?: number;
  duration?: number;
  className?: string;
  color?: string;
  opacity?: number;
}

export default function AnimatedCloud({
  size = 80,
  delay = 0,
  duration = 18,
  className = '',
  color = 'white',
  opacity = 0.95,
}: AnimatedCloudProps) {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{
        animationName: 'drift',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        width: size,
        height: size * 0.6,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs overflow-visible"
        style={{ opacity }}
      >
        <ellipse cx="50" cy="40" rx="40" ry="18" fill={color} />
        <ellipse cx="35" cy="32" rx="22" ry="20" fill={color} />
        <ellipse cx="62" cy="30" rx="20" ry="18" fill={color} />
        <ellipse cx="50" cy="25" rx="18" ry="16" fill={color} />
      </svg>
    </div>
  );
}
