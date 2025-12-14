import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Code2, Cpu, Lightbulb } from 'lucide-react';
import GradualBlur from './GradualBlur';

export function About() {
  const { ref, isInView } = useInView();

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code following best practices',
    },
    {
      icon: Cpu,
      title: 'Problem Solver',
      description: 'Analytical thinking to tackle complex algorithmic challenges',
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner',
      description: 'Adaptable to new technologies and frameworks rapidly',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
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
          <div className="mb-16">
            <span className="text-sm tracking-widest text-gray-500 mb-4 block">01 / ABOUT</span>
            <h2 className="text-5xl md:text-6xl mb-6">Who I Am</h2>
            <div className="w-20 h-px bg-white/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I'm a third-year BTech student majoring in Computer Science, driven by a passion for
                technology and innovation. My journey in programming started in high school, and since
                then, I've been captivated by the endless possibilities of software development.
              </p>
              <p>
                Currently, I'm focusing on full-stack web development and machine learning, working on
                projects that solve real-world problems. I believe in continuous learning and staying
                updated with the latest industry trends.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Beyond coding, I'm an active participant in hackathons and coding competitions,
                constantly challenging myself to think creatively and work efficiently under pressure.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, reading tech
                blogs, or exploring new frameworks and tools to expand my skill set.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-white/20 p-8 hover:border-white/50 transition-all group backdrop-blur-sm bg-black/30"
              >
                <item.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
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