interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  label?: string;
  color?: string;
  className?: string;
  rounded?: boolean;
}

export default function ImagePlaceholder({
  width = '100%',
  height = 300,
  label = 'Image',
  color = '#DDF3F1',
  className = '',
  rounded = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center ${rounded ? 'rounded-2xl' : ''} ${className}`}
      style={{
        width,
        height,
        backgroundColor: color,
        minHeight: typeof height === 'number' ? height : undefined,
      }}
    >
      <div className="text-center px-4">
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-2 opacity-40"
          width="40"
          height="40"
        >
          <rect x="4" y="8" width="40" height="32" rx="4" fill="none" stroke="#07194F" strokeWidth="2" />
          <circle cx="16" cy="20" r="4" fill="none" stroke="#07194F" strokeWidth="2" />
          <path d="M4,36 L14,24 L22,32 L30,22 L44,36" fill="none" stroke="#07194F" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
          {label}
        </p>
      </div>
    </div>
  );
}
