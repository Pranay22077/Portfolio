import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Trophy, Star, Award, Users, GitBranch } from 'lucide-react';
import GradualBlur from './GradualBlur';

export function Recognition() {
  const { ref, isInView } = useInView();

  const recognitions = [
    {
      icon: Trophy,
      title: 'SIH\'25 Grand Finalist',
      description: 'Smart India Hackathon 2025 Grand Finalist',
      category: 'Competition',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-400/30',
    },
    {
      icon: Star,
      title: 'Dept. Rank 5',
      description: 'Department Rank 5 as of 2 semesters in Mathematics & Computing',
      category: 'Academic',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/30',
    },
    {
      icon: Award,
      title: 'Ex Research Intern @AIMS-DTU',
      description: 'Former Research Intern at AIMS-DTU (AI & Machine Learning Society)',
      category: 'Research',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30',
    },
    {
      icon: GitBranch,
      title: 'Super Contributor Hacktoberfest\'25',
      description: 'Super Contributor in Hacktoberfest 2025 - Open Source Excellence',
      category: 'Open Source',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-400/30',
    },
  ];

  return (
    <section id="recognition" className="relative pt-8 pb-32 px-6" ref={ref}>
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
            <span className="text-sm tracking-widest text-gray-500 mb-4 block">
              06 / RECOGNITION
            </span>
            <h2 className="text-5xl md:text-6xl mb-6">Achievements & Recognition</h2>
            <div className="w-20 h-px bg-white/20" />
          </div>

          {/* Recognition Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${recognition.color} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />
                
                {/* Main card */}
                <div className={`relative backdrop-blur-xl bg-black/60 border ${recognition.borderColor} rounded-xl p-8 group-hover:bg-black/70 transition-all duration-500 overflow-hidden`}>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${recognition.color} opacity-20`} />
                    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-50`} />
                    <div className={`absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-current to-transparent opacity-50`} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 ${recognition.bgColor} border ${recognition.borderColor} rounded-lg group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}>
                        <recognition.icon className={`w-8 h-8 bg-gradient-to-r ${recognition.color} bg-clip-text text-transparent`} />
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 ${recognition.bgColor} border ${recognition.borderColor} rounded-full`}>
                          <span className={`text-sm font-medium bg-gradient-to-r ${recognition.color} bg-clip-text text-transparent`}>
                            {recognition.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className={`text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:${recognition.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                        {recognition.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {recognition.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full bg-gradient-to-r ${recognition.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: '100%' } : { width: 0 }}
                              transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                            />
                          </div>
                          <span className={`text-xs font-medium bg-gradient-to-r ${recognition.color} bg-clip-text text-transparent`}>
                            Achieved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${recognition.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`} />
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