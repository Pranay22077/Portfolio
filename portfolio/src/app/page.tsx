'use client';

import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ThunderEffect from '@/components/ThunderEffect';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white relative overflow-hidden">
      <ThunderEffect />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
