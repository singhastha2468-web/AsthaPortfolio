import { Flower2, Paintbrush, Shapes, Sparkles, Star } from 'lucide-react';
import type { CSSProperties } from 'react';

type FloatingItem = {
  Icon: typeof Star;
  position: CSSProperties;
  className: string;
  duration: string;
  delay: string;
};

const items: FloatingItem[] = [
  { Icon: Star, position: { top: '6%', left: '46%' }, className: 'h-10 w-10 fill-butter text-butter', duration: '5s', delay: '0s' },
  { Icon: Paintbrush, position: { top: '18%', left: '2%' }, className: 'h-12 w-12 text-bubblegum', duration: '7s', delay: '1s' },
  { Icon: Flower2, position: { bottom: '14%', left: '8%' }, className: 'h-12 w-12 text-peach', duration: '6s', delay: '2s' },
  { Icon: Sparkles, position: { top: '48%', right: '-2%' }, className: 'h-10 w-10 text-lilac', duration: '8s', delay: '0.5s' },
  { Icon: Shapes, position: { bottom: '6%', right: '18%' }, className: 'h-9 w-9 text-lilac/80', duration: '6.5s', delay: '1.5s' },
  { Icon: Star, position: { top: '62%', left: '-1%' }, className: 'h-7 w-7 fill-bubblegum text-bubblegum', duration: '4.5s', delay: '2.5s' },
];

export default function FloatingObjects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
      {items.map(({ Icon, position, className, duration, delay }, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{ ...position, animationDuration: duration, animationDelay: delay }}
        >
          <Icon className={className} strokeWidth={1.5} />
        </div>
      ))}
      <div className="absolute left-[30%] top-[70%] h-6 w-6 animate-float rounded-full bg-bubblegum/80" style={{ animationDelay: '1s' }} />
      <div className="absolute right-[30%] top-[12%] h-5 w-5 rotate-45 animate-float rounded-sm bg-lilac" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[22%] left-[40%] h-12 w-12 animate-float rounded-full border-4 border-butter/80" style={{ animationDelay: '2s' }} />
    </div>
  );
}
