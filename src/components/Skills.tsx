import { Image as ImageIcon, Layers, LayoutGrid, Megaphone, Package, PenTool, Palette, Smartphone, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionTitle from '@/components/SectionTitle';
import TiltCard from '@/components/TiltCard';

type Skill = { title: string; text: string; Icon: LucideIcon };

const skills: Skill[] = [
  { title: 'Graphic Design', text: 'Layouts, colour and type that feel intentional.', Icon: Palette },
  { title: 'Logo Design', text: 'Simple, memorable marks built to work at any size.', Icon: PenTool },
  { title: 'Poster Design', text: 'Bold, eye-catching compositions that stop people in their tracks.', Icon: Megaphone },
  { title: 'Social Media Design', text: 'Scroll-stopping posts made for every feed.', Icon: Smartphone },
  { title: 'Canva', text: 'Fast, on-brand templates with quick turnarounds.', Icon: Layers },
  { title: 'Adobe Photoshop', text: 'Retouching, compositing and rich visual effects.', Icon: ImageIcon },
  { title: 'Figma', text: 'Clean layouts and interface-ready design.', Icon: LayoutGrid },
  { title: 'Packaging Design', text: 'Boxes, labels and pouches that look good on the shelf.', Icon: Package },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-night/60 px-6 py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-10 h-72 w-72 animate-blob bg-violet/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle eyebrow="What I do" title="My creative skills" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={(i % 4) * 100}>
              <TiltCard className="h-full">
                <div className="h-full rounded-3xl bg-ink p-7 ring-1 ring-white/10 transition duration-500 hover:-translate-y-2 hover:bg-violet/20 hover:ring-lilac/50 hover:shadow-2xl hover:shadow-violet/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac text-ink transition duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-butter">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-paper">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
