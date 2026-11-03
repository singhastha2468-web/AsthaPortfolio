import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import AmbientBackground from '@/components/AmbientBackground';
import { CustomCursor, ScrollProgress } from '@/components/Cursor';

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-paper">
      <AmbientBackground />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer className="relative z-10 bg-ink py-8 text-center text-sm text-paper/60">
        Designed and built by Astha Singh
      </footer>
    </div>
  );
}

export default App;
