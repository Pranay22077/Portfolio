import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import SimpleStars from './components/SimpleStars';

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Simple Stars Background */}
      <SimpleStars count={150} speed={0.5} />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
