import { Linkedin, Mail, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/data/portfolio';
import Magnetic from '@/components/Magnetic';
import SplitText from '@/components/SplitText';

const socials = [{ label: 'LinkedIn', Icon: Linkedin, href: LINKEDIN_URL }];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-night px-6 py-28 text-paper">
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-10 h-56 w-56 animate-blob bg-violet/30 blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 animate-blob bg-bubblegum/20 blur-2xl" />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-bubblegum">Contact</p>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
          <SplitText text="Have an idea? Let's create something beautiful." />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
          Tell me about your project, brand or event. I would love to help bring it to life.
        </p>

        <div className="mt-10">
          <Magnetic>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 rounded-full bg-butter px-8 py-4 text-base font-medium text-ink shadow-xl shadow-butter/20 transition duration-300 hover:bg-bubblegum"
            >
              <Mail className="h-5 w-5 transition group-hover:rotate-12" />
              Say hello
              <Sparkles className="h-4 w-4 transition group-hover:scale-125" />
            </a>
          </Magnetic>
        </div>
        <p className="mt-4 text-sm text-paper/70">{CONTACT_EMAIL}</p>

        <div className="mt-12 flex justify-center gap-4">
          {socials.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-lilac/40 text-lilac transition duration-300 hover:-translate-y-1 hover:bg-lilac hover:text-ink"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
