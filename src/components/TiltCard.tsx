import { useState, type CSSProperties, type ReactNode, type PointerEvent } from 'react';

type TiltCardProps = { children: ReactNode; className?: string };

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setStyle({
      transform: `perspective(800px) rotateX(${(0.5 - py) * 14}deg) rotateY(${(px - 0.5) * 14}deg)`,
      '--mx': `${px * 100}%`,
      '--my': `${py * 100}%`,
    } as CSSProperties);
  };

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={() => setStyle({})}
      className={`group relative transition-transform duration-300 ease-out ${className}`}
      style={style}
    >
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgb(255 255 255 / 0.16), transparent 55%)' }}
      />
    </div>
  );
}
