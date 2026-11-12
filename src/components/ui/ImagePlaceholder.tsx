import { cn } from '@/lib/utils';
import { Sparkles, Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  label?: string;
  category?: string;
  color?: string;
  className?: string;
  rounded?: boolean;
}

export default function ImagePlaceholder({
  width = '100%',
  height = 300,
  label = 'InnoTots Preschool',
  category,
  color = '#DDF3F1',
  className = '',
  rounded = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none transition-all duration-300',
        rounded ? 'rounded-2xl md:rounded-3xl' : '',
        className
      )}
      style={{
        width,
        height,
        backgroundColor: color,
        minHeight: typeof height === 'number' ? height : undefined,
      }}
    >
      {/* Subtle decorative background pattern */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/30 blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs">
        <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-xs flex items-center justify-center mb-3 text-[#07194F]">
          <Camera size={22} className="opacity-75" />
        </div>
        {category && (
          <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/70 text-[#07194F] mb-1.5" style={{ fontFamily: 'var(--font-nunito)' }}>
            {category}
          </span>
        )}
        <p className="text-xs sm:text-sm font-bold text-[#07194F] leading-snug" style={{ fontFamily: 'var(--font-fredoka)' }}>
          {label}
        </p>
        <span className="text-[11px] text-gray-500 mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-nunito)' }}>
          <Sparkles size={10} className="text-[#FFBA08]" />
          <span>InnoTots Moments</span>
        </span>
      </div>
    </div>
  );
}
