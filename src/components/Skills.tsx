import { motion } from 'motion/react';
import { useInView } from './useInView';
import GradualBlur from './GradualBlur';

export function Skills() {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Redux', 'Motion'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Django', 'Flask', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase'],
    },
    {
      category: 'ML/AI',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
    },
  ];

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
          <div className="mb-16">
            <span className="text-sm tracking-widest text-gray-500 mb-4 block">02 / SKILLS</span>
            <h2 className="text-5xl md:text-6xl mb-6">Tech Stack</h2>
            <div className="w-20 h-px bg-white/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="border border-white/20 p-8 hover:border-white/50 transition-all backdrop-blur-sm bg-black/40"
              >
                <h3 className="text-xl mb-6 tracking-wide">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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