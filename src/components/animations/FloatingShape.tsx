interface FloatingShapeProps {
  shape?: 'circle' | 'star' | 'triangle';
  color?: string;
  size?: number;
  delay?: number;
  className?: string;
  opacity?: number;
}

export default function FloatingShape({
  shape = 'circle',
  color = '#FF3F68',
  size = 30,
  delay = 0,
  className = '',
  opacity = 0.3,
}: FloatingShapeProps) {
  const style = {
    animationName: 'float',
    animationDuration: '5s',
    animationDelay: `${delay}s`,
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    opacity,
  };

  if (shape === 'circle') {
    return (
      <div className={`inline-block ${className}`} style={style}>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      </div>
    );
  }

  if (shape === 'triangle') {
    return (
      <div className={`inline-block ${className}`} style={style}>
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <polygon points="20,2 38,38 2,38" fill={color} />
        </svg>
      </div>
    );
  }

  // star
  return (
    <div className={`inline-block ${className}`} style={style}>
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill={color} />
      </svg>
    </div>
  );
}
