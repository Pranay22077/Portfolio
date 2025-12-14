import { motion } from 'framer-motion';
import { useInView } from './useInView';
import GradualBlur from './GradualBlur';
import MagicBento from './MagicBento';

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative py-32 px-6 bg-white/[0.02]" ref={ref}>
      <GradualBlur
        target="parent"
        position="top"
        height="6rem"
        strength={1.5}
        divCount={5}
        curve="ease-out"
        opacity={1}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 text-center">
            <span className="text-sm tracking-widest text-gray-500 mb-4 block">02 / SKILLS</span>
            <h2 className="text-5xl md:text-6xl mb-6">Tech Stack</h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={8}
              glowColor="96, 165, 250"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={1.5}
        divCount={5}
        curve="ease-in"
        opacity={1}
      />
    </section>
  );
}