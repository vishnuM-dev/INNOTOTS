interface FloatingBalloonProps {
  color?: string;
  delay?: number;
  duration?: number;
  size?: number;
  className?: string;
}

const colors = ['#FF3F68', '#FFBA08', '#08BFC1', '#A75CE2'];

export default function FloatingBalloon({
  color,
  delay = 0,
  duration = 4,
  size = 32,
  className = '',
}: FloatingBalloonProps) {
  const balloonColor = color || colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        animationName: 'float',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        width: size,
        height: size * 1.3,
      }}
    >
      <svg viewBox="0 0 40 55" xmlns="http://www.w3.org/2000/svg" width={size} height={size * 1.3}>
        <ellipse cx="20" cy="20" rx="16" ry="18" fill={balloonColor} />
        <ellipse cx="14" cy="12" rx="4" ry="5" fill="white" opacity="0.3" />
        <line x1="20" y1="38" x2="20" y2="55" stroke={balloonColor} strokeWidth="1.5" />
        <path d="M18,38 Q22,42 20,46 Q18,42 22,38" fill={balloonColor} opacity="0.6" />
      </svg>
    </div>
  );
}
