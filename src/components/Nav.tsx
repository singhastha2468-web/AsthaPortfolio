import { useEffect, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-1 z-40 transition duration-500 ${
        scrolled || open ? 'bg-ink/90 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" onClick={close} className="group flex items-center gap-2 font-display text-xl text-paper">
          <Sparkles className="h-5 w-5 text-butter transition duration-500 group-hover:rotate-180" />
          Astha Singh
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="group relative py-1 text-paper/80 transition hover:text-paper">
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-bubblegum transition duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-full p-2 text-paper transition hover:bg-violet/40 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-white/10 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-4 py-3 font-display text-2xl text-paper transition hover:bg-violet/30"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
