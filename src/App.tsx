import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';
import BubbleMenu from './components/BubbleMenu';
import GradientText from './components/GradientText';
import SimpleStars from './components/SimpleStars';

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden min-h-screen">
      {/* Simple Stars Background */}
      <SimpleStars count={150} speed={0.5} />

      <div className="relative z-10">
        <BubbleMenu 
          logo={<GradientText className="text-lg font-bold">&lt;PRANAY/&gt;</GradientText>}
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Recognition />
        <Contact />
      </div>
    </div>
  );
}
