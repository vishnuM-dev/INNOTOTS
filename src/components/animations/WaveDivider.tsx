interface WaveDividerProps {
  color?: string;
  bgColor?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  color = '#DDF3F1',
  bgColor = 'transparent',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-12 md:h-16 block"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
