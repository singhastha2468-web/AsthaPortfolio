import { useEffect, useRef, useState } from 'react';

type Ripple = { id: number; x: number; y: number };

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;
    let rippleId = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const hovering = (e.target as HTMLElement).closest('a, button');
      ring.dataset.hover = hovering ? 'true' : 'false';
    };

    const onDown = (e: PointerEvent) => {
      const id = ++rippleId;
      setRipples((list) => [...list, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => setRipples((list) => list.filter((r) => r.id !== id)), 700);
    };

    const loop = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      ring.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        data-hover="false"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-9 w-9 -ml-[18px] -mt-[18px] rounded-full border-2 border-lilac transition-[width,height,margin,background-color] duration-300 data-[hover=true]:-ml-8 data-[hover=true]:-mt-8 data-[hover=true]:h-16 data-[hover=true]:w-16 data-[hover=true]:bg-butter/20 md:block"
      />
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none fixed z-[59] hidden h-10 w-10 animate-ripple rounded-full border-2 border-butter md:block"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
      <div
        className="h-full origin-left bg-gradient-to-r from-lilac via-bubblegum to-butter"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
