import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: string;
  textColor?: string;
  className?: string;
}

export default function Badge({
  children,
  color = '#FF3F68',
  textColor = 'white',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${className}`}
      style={{ backgroundColor: color, color: textColor, fontFamily: 'var(--font-nunito)' }}
    >
      {children}
    </span>
  );
}
