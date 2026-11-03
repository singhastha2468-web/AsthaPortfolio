import { Lightbulb, Palette, Sparkles } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import SectionTitle from '@/components/SectionTitle';
import TiltCard from '@/components/TiltCard';

const approach = [
  {
    Icon: Lightbulb,
    title: 'Idea first',
    text: 'Every piece starts with a clear message, so the visual always has a job to do.',
  },
  {
    Icon: Palette,
    title: 'Colour with intent',
    text: 'Dreamy pastels and bold accents chosen to set the mood, not just to decorate.',
  },
  {
    Icon: Sparkles,
    title: 'Details that delight',
    text: 'Typography, texture and small surprises that make people stop and look twice.',
  },
];

const interests = ['Typography', 'Colour theory', 'Illustration', 'Retro textures', 'Playful layouts'];

const stats: { to?: number; suffix?: string; text?: string; label: string }[] = [
  { to: 2, suffix: '+', label: 'Years experience' },
  { to: 50, suffix: '+', label: 'Design projects' },
  { text: '∞', label: 'Ideas sketched' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle eyebrow="About me" title="Design with a heart and a plan" />

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="font-display text-2xl leading-snug text-paper md:text-3xl">
            I'm Astha, a graphic designer who loves turning little ideas into bold, joyful visuals.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-paper/70">
            From logos and posters to social media posts and packaging, I design work that feels personal and looks polished on every screen. I like visuals that feel warm, a little retro and full of character.
          </p>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-lilac">Current interests</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-lilac/30 bg-night px-4 py-1.5 text-sm text-paper transition duration-300 hover:-translate-y-0.5 hover:border-butter hover:text-butter"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-butter">
                  {stat.to !== undefined ? <CountUp to={stat.to} suffix={stat.suffix} /> : stat.text}
                </p>
                <p className="mt-1 text-sm text-paper/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5 md:col-span-5">
          {approach.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <TiltCard>
                <div className="group flex gap-5 rounded-3xl bg-night p-6 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:ring-bubblegum/40 hover:shadow-xl hover:shadow-violet/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bubblegum text-ink transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-paper">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">{text}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
