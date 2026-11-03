import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '@/data/portfolio';

type ProjectLightboxProps = {
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const navButton =
  'absolute rounded-full border border-white/20 bg-night/70 p-3 text-paper transition duration-300 hover:scale-110 hover:bg-violet';

export default function ProjectLightbox({ index, onClose, onNavigate }: ProjectLightboxProps) {
  const total = projects.length;
  const project = projects[index];

  const prev = () => onNavigate((index - 1 + total) % total);
  const next = () => onNavigate((index + 1) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % total);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, total, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-12"
      onClick={onClose}
    >
      <div className="relative flex max-h-full max-w-5xl animate-zoom-in flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          key={project.src}
          src={project.src}
          alt={project.title}
          className="max-h-[78vh] max-w-full animate-zoom-in rounded-2xl object-contain shadow-2xl"
        />
        <div className="mt-5 text-center">
          <p className="font-display text-xl text-paper">{project.title}</p>
          <p className="mt-1 text-sm text-butter">
            {project.category} · {index + 1} / {total}
          </p>
        </div>
      </div>

      <button type="button" onClick={onClose} aria-label="Close preview" className={`${navButton} right-4 top-4 md:right-8 md:top-8`}>
        <X className="h-5 w-5" />
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous project" className={`${navButton} left-2 top-1/2 -translate-y-1/2 md:left-6`}>
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next project" className={`${navButton} right-2 top-1/2 -translate-y-1/2 md:right-6`}>
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
