import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Avatar from '@/components/Avatar';
import FloatingObjects from '@/components/FloatingObjects';
import Magnetic from '@/components/Magnetic';

const NAME = 'Astha Singh';

function SpinningBadge() {
  return (
    <div className="absolute -left-4 bottom-4 hidden h-32 w-32 items-center justify-center md:-left-10 md:flex">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow text-butter" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-current font-sans text-[11px] font-bold uppercase tracking-[0.22em]">
          <textPath href="#badge-circle">Graphic designer • visual creative •</textPath>
        </text>
      </svg>
      <Star className="absolute h-7 w-7 fill-bubblegum text-bubblegum" />
    </div>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let letterIndex = 0;

  return (
    <header className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pt-36">
      <FloatingObjects />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="animate-zoom-in text-xs font-bold uppercase tracking-[0.3em] text-lilac">Hello, I'm</p>
          <h1 className="mt-4 font-display text-6xl leading-[1.05] text-paper md:text-7xl lg:text-8xl" aria-label={NAME}>
            {NAME.split(' ').map((word) => (
              <span key={word} className="mr-[0.25em] inline-block whitespace-nowrap last:mr-0">
                {[...word].map((ch) => {
                  const delay = 200 + letterIndex * 70;
                  letterIndex += 1;
                  return (
                    <span
                      key={`${word}-${letterIndex}`}
                      aria-hidden="true"
                      className="animate-letter inline-block transition-colors duration-300 hover:text-butter"
                      style={{ animationDelay: `${delay}ms` }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <p
            className="animate-zoom-in animate-shimmer mt-6 bg-gradient-to-r from-lilac via-bubblegum to-butter bg-clip-text font-display text-2xl italic text-transparent md:text-3xl"
            style={{ animationDelay: '700ms' }}
          >
            Graphic Designer &amp; Visual Creative
          </p>
          <p className="animate-zoom-in mt-3 text-base text-paper/60" style={{ animationDelay: '800ms' }}>
            Turning little ideas into big visual stories.
          </p>
          <div className="animate-zoom-in mt-10 flex flex-wrap justify-center gap-4 md:justify-start" style={{ animationDelay: '900ms' }}>
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-paper shadow-lg shadow-violet/30 transition duration-300 hover:bg-butter hover:text-ink"
              >
                Explore my work
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-lilac/60 px-7 py-3.5 text-sm font-medium text-lilac transition duration-300 hover:border-bubblegum hover:bg-bubblegum hover:text-ink"
              >
                Let's connect
              </a>
            </Magnetic>
          </div>
        </div>

        <div style={{ transform: `translateY(${scrollY * -0.12}px)` }} className="relative will-change-transform">
          <Avatar />
          <SpinningBadge />
        </div>
      </div>
    </header>
  );
}
