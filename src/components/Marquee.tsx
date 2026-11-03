import { Star } from 'lucide-react';

const items = ['Logo design', 'Posters', 'Social media', 'Branding', 'Packaging', 'Illustration'];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-butter py-5 text-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap font-display text-2xl italic">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8">
            {item}
            <Star className="h-4 w-4 fill-violet text-violet" />
          </span>
        ))}
      </div>
      <div className="mt-2 flex w-max animate-marquee-reverse items-center whitespace-nowrap font-sans text-sm font-bold uppercase tracking-[0.4em] text-violet">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="pr-10">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
