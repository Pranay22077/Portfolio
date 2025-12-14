import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Code2, Cpu, Lightbulb } from 'lucide-react';
import LaserFlow from './LaserFlow';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-0" ref={ref}>
      {/* LaserFlow Effect - Zero gap from LET'S CONNECT button */}
      <div className="relative z-20" style={{height: '200vh', marginTop: '0'}}>
        <LaserFlow 
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#60A5FA"
          wispDensity={1.2}
          fogIntensity={0.6}
          wispIntensity={6.0}
          flowSpeed={0.4}
        />
      </div>
      
      {/* Content Box positioned seamlessly at laser beam end - complete overlap */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6" style={{marginTop: '-100vh'}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
        <div className="bg-black/80 backdrop-blur-lg border-2 border-white/30 rounded-3xl p-12 text-center">
          <span className="text-sm tracking-widest text-gray-400 mb-4 block">01 / ABOUT</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Who I Am</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            <p>
              I'm a second-year <span className="text-white font-semibold">Mathematics & Computer Science</span> undergraduate, driven by a passion for
              technology and innovation. My programming journey started in college, and since
              then, I've been captivated by the endless possibilities of software development.
            </p>
            <p>
              Currently, I'm focusing on <span className="text-white font-semibold">open source contributions</span> and <span className="text-white font-semibold">machine learning</span>, working on
              projects that solve real-world problems. I believe in continuous learning and staying
              updated with the latest industry trends and technologies.
            </p>
            <p>
              As a <span className="text-white font-semibold">SIH'25 Grand Finalist</span>, I'm an active participant in <span className="text-white font-semibold">hackathons</span> and <span className="text-white font-semibold">coding competitions</span>,
              constantly challenging myself to think creatively and work efficiently under pressure.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="px-6 py-3 bg-blue-500/10 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/20 transition-colors">Open Source</span>
            <span className="px-6 py-3 bg-blue-500/10 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/20 transition-colors">Machine Learning</span>
            <span className="px-6 py-3 bg-blue-500/10 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/20 transition-colors">Data Structures & Algorithms</span>
            <span className="px-6 py-3 bg-blue-500/10 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/20 transition-colors">GenAI</span>
          </div>

          {/* Highlights integrated into the same box */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center group"
              >
                <item.icon className="w-8 h-8 mb-4 mx-auto group-hover:scale-110 transition-transform text-white" />
                <h3 className="text-xl mb-3 text-white font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}