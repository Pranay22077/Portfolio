import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Trophy, Award, Target, Star } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export function Achievements() {
  const { ref, isInView } = useInView();

  const achievements = [
    {
      icon: Trophy,
      title: 'SIH\'25 Grand Finalist',
      description: 'Smart India Hackathon 2025 Grand Finalist - Competed at the national level with innovative solutions addressing real-world problems using cutting-edge technology and AI/ML approaches.',
      year: '2025',
      category: 'Competition'
    },
    {
      icon: Star,
      title: 'Dept. Rank 5 as of 2 semesters',
      description: 'Achieved Department Rank 5 in Mathematics & Computing at DTU with a CGPA of 9.5/10.0, demonstrating consistent academic excellence and strong foundation in mathematical and computational concepts.',
      year: '2024',
      category: 'Academic'
    },
    {
      icon: Award,
      title: 'Ex Research Intern @AIMS-DTU',
      description: 'Former Research Intern at AIMS-DTU (AI & Machine Learning Society) where I contributed to cutting-edge research in artificial intelligence, machine learning, and computer vision applications.',
      year: '2024',
      category: 'Research'
    },
    {
      icon: Target,
      title: 'Super Contributor Hacktoberfest\'25',
      description: 'Recognized as Super Contributor in Hacktoberfest 2025 for exceptional contributions to open source projects, demonstrating commitment to collaborative development and community building.',
      year: '2025',
      category: 'Open Source'
    }
  ];

  return (
    <section id="achievements" className="relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center py-32"
        >
          <span className="text-sm tracking-widest text-gray-500 mb-4 block">
            04 / ACHIEVEMENTS
          </span>
          <h2 className="text-5xl md:text-6xl mb-6">Recognition</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* ScrollStack using window scroll */}
      <ScrollStack
        itemDistance={100}
        itemScale={0.05}
        itemStackDistance={30}
        stackPosition="30%"
        baseScale={0.9}
        useWindowScroll={true}
        className="scroll-stack-achievements"
      >
        {achievements.map((achievement, index) => (
          <ScrollStackItem key={achievement.title}>
            <div className="text-white max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-6">
                <div className="achievement-icon p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 flex-shrink-0 hover:border-blue-400/40 transition-all duration-300">
                  <achievement.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {achievement.title}
                      </h3>
                      <span className="achievement-category text-sm text-gray-400 px-3 py-1 border border-white/20 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <span className="text-lg text-gray-300 font-mono flex-shrink-0 ml-4">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {achievement.description}
              </p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}