import { useState, type ReactNode, type PointerEvent } from 'react';

type MagneticProps = { children: ReactNode; strength?: number };

export default function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    });
  };

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      className="inline-block transition-transform duration-300 ease-out"
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {children}
    </div>
  );
}
