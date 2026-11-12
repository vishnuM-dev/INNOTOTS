interface AnimatedCloudProps {
  size?: number;
  delay?: number;
  className?: string;
  color?: string;
}

export default function AnimatedCloud({
  size = 80,
  delay = 0,
  className = '',
  color = 'white',
}: AnimatedCloudProps) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{
        animationName: 'drift',
        animationDuration: '6s',
        animationDelay: `${delay}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
      }}
    >
      <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" width={size} height={size * 0.6}>
        <ellipse cx="50" cy="40" rx="40" ry="18" fill={color} />
        <ellipse cx="35" cy="32" rx="22" ry="20" fill={color} />
        <ellipse cx="62" cy="30" rx="20" ry="18" fill={color} />
        <ellipse cx="50" cy="25" rx="18" ry="16" fill={color} />
      </svg>
    </div>
  );
}
