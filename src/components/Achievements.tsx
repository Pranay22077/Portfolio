import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Trophy, Award, Target, Star } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export function Achievements() {
  const { ref, isInView } = useInView();

  const achievements = [
    {
      icon: Trophy,
      title: 'First Place - Smart India Hackathon 2024',
      description: 'Led a team of 6 to develop an AI-powered healthcare solution that won first place in the national competition. Our solution focused on early disease detection using machine learning algorithms.',
      year: '2024',
      category: 'Competition'
    },
    {
      icon: Award,
      title: 'Google Code Jam - Round 3 Qualifier',
      description: 'Ranked in top 500 globally in competitive programming. Solved complex algorithmic problems under time pressure, demonstrating strong problem-solving skills.',
      year: '2024',
      category: 'Programming'
    },
    {
      icon: Star,
      title: 'Best Innovation Award',
      description: 'Inter-college tech fest recognition for developing a blockchain-based voting system that ensures transparency and security in digital elections.',
      year: '2023',
      category: 'Innovation'
    },
    {
      icon: Target,
      title: 'ACM ICPC Regional Finalist',
      description: 'Competed at regional level in prestigious programming contest. Collaborated with team members to solve challenging algorithmic problems.',
      year: '2023',
      category: 'Competition'
    },
    {
      icon: Trophy,
      title: 'MLH Fellowship',
      description: 'Selected for Major League Hacking Open Source Fellowship. Contributed to major open source projects and collaborated with developers worldwide.',
      year: '2023',
      category: 'Fellowship'
    },
    {
      icon: Award,
      title: 'Dean\'s List Recognition',
      description: 'Academic excellence award for maintaining 9.2+ GPA throughout multiple semesters. Recognized for consistent high performance in Mathematics & Computing.',
      year: '2022-2024',
      category: 'Academic'
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
          <div className="w-20 h-px bg-white/20 mx-auto" />
        </motion.div>
      </div>

      {/* ScrollStack using window scroll */}
      <ScrollStack
        itemDistance={120}
        itemScale={0.04}
        itemStackDistance={40}
        stackPosition="25%"
        scaleEndPosition="15%"
        baseScale={0.92}
        useWindowScroll={true}
        className="scroll-stack-achievements"
      >
        {achievements.map((achievement, index) => (
          <ScrollStackItem key={achievement.title}>
            <div className="text-white max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-6">
                <div className="achievement-icon p-4 border border-white/30 rounded-lg bg-white/5 flex-shrink-0">
                  <achievement.icon className="w-8 h-8" />
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