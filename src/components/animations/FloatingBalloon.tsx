'use client';

interface FloatingBalloonProps {
  color?: string;
  delay?: number;
  duration?: number;
  size?: number;
  className?: string;
  swayVariant?: 1 | 2 | 3;
}

const defaultColors = ['#FF3F68', '#FFBA08', '#08BFC1', '#A75CE2'];

export default function FloatingBalloon({
  color,
  delay = 0,
  duration = 5,
  size = 36,
  className = '',
  swayVariant = 1,
}: FloatingBalloonProps) {
  const balloonColor = color || defaultColors[0];
  const animName = `float-balloon-${swayVariant}`;
  const heightRatio = 86 / 44; // Proportional balloon + string viewBox ratio

  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{
        animationName: animName,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        transformOrigin: '50% 100%',
        width: size,
        height: size * heightRatio,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 44 86"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-xs"
      >
        {/* Balloon Body */}
        <ellipse cx="22" cy="22" rx="17" ry="20" fill={balloonColor} />

        {/* Glossy Balloon Highlight */}
        <ellipse cx="16" cy="15" rx="5" ry="7" fill="white" opacity="0.32" />

        {/* Balloon Knot securely attached at bottom center (22, 42) */}
        <polygon points="19,45 25,45 22,42" fill={balloonColor} />

        {/* Natural Balloon String attached seamlessly to knot base */}
        <path
          d="M22,45 C20,56 25,68 22,84"
          fill="none"
          stroke={balloonColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
