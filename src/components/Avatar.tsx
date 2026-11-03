import { useEffect, useState, type CSSProperties } from 'react';
import { Sparkles, Star, Heart, type LucideIcon } from 'lucide-react';
import { AVATAR_SRC } from '@/data/portfolio';

const BURST: { dx: string; dy: string; Icon: LucideIcon }[] = [
  { dx: '-120px', dy: '-90px', Icon: Star },
  { dx: '0px', dy: '-130px', Icon: Sparkles },
  { dx: '120px', dy: '-90px', Icon: Heart },
  { dx: '150px', dy: '0px', Icon: Star },
  { dx: '120px', dy: '90px', Icon: Sparkles },
  { dx: '0px', dy: '130px', Icon: Heart },
  { dx: '-120px', dy: '90px', Icon: Star },
  { dx: '-150px', dy: '0px', Icon: Sparkles },
];

export default function Avatar() {
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [jumps, setJumps] = useState(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setLook({
        x: Math.max(-1, Math.min(1, (e.clientX / window.innerWidth) * 2 - 1)),
        y: Math.max(-1, Math.min(1, (e.clientY / window.innerHeight) * 2 - 1)),
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setJumps((n) => n + 1)}
      aria-label="Make Astha jump"
      className="relative mx-auto block aspect-square w-full max-w-md cursor-pointer"
    >
      <div className="absolute inset-4 animate-blob bg-lilac/40" />
      <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-lilac/40" />

      <div
        className="absolute inset-8 transition-transform duration-300 ease-out"
        style={{ transform: `perspective(900px) rotateX(${-look.y * 10}deg) rotateY(${look.x * 14}deg)` }}
      >
        <div className="animate-float h-full w-full">
          <div key={jumps} className={`h-full w-full ${jumps ? 'animate-hop' : ''}`}>
            <div className="relative h-full w-full overflow-hidden rounded-full bg-violet shadow-2xl ring-8 ring-ink">
              <img
                src={AVATAR_SRC}
                alt="Illustrated 3D avatar of Astha Singh"
                draggable={false}
                className="h-full w-full scale-[1.3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {jumps > 0 && (
        <div key={jumps} className="pointer-events-none absolute left-1/2 top-1/2">
          {BURST.map(({ dx, dy, Icon }, i) => (
            <Icon
              key={i}
              className="absolute left-0 top-0 -ml-3 -mt-3 h-6 w-6 animate-burst text-butter"
              style={{ '--dx': dx, '--dy': dy } as CSSProperties}
            />
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute -right-2 top-4 animate-wiggle rounded-full bg-butter px-4 py-2 text-sm font-bold text-ink shadow-lg">
        Hi, I'm Astha!
      </div>
      <div className="pointer-events-none absolute -left-2 bottom-10 flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-lilac text-ink shadow-md">
        <Sparkles className="h-6 w-6" />
      </div>
    </button>
  );
}
