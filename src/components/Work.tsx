import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import ProjectLightbox from '@/components/ProjectLightbox';
import Reveal from '@/components/Reveal';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data/portfolio';

export default function Work() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle eyebrow="Selected works" title="Projects I'm proud of" />

      <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {projects.map((project, i) => (
          <Reveal key={project.src} delay={(i % 3) * 100} className="mb-6 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open ${project.title} preview`}
              className="group relative block w-full overflow-hidden rounded-3xl bg-night text-left ring-1 ring-white/10 transition duration-500 hover:-translate-y-1.5 hover:rotate-[0.5deg] hover:shadow-2xl hover:shadow-violet/40 hover:ring-bubblegum/50"
            >
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                className="w-full transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-ink/0 p-5 transition duration-500 group-hover:bg-ink/75">
                <div className="translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-xl text-paper">{project.title}</p>
                  <p className="mt-1 text-sm text-butter">{project.category}</p>
                </div>
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-butter text-ink opacity-0 shadow-lg transition duration-500 group-hover:rotate-90 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {activeIndex !== null && (
        <ProjectLightbox
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
