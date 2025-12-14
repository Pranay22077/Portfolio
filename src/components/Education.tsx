import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { GraduationCap, BookOpen, Code, Award, ExternalLink } from 'lucide-react';
import GradualBlur from './GradualBlur';
import ElectricBorder from './ElectricBorder';

export function Education() {
  const { ref, isInView } = useInView();

  const education = [
    {
      degree: 'Bachelor of Technology in Mathematics & Computing',
      institution: 'Delhi Technological University (DTU)',
      duration: '2024 - 2028',
      gpa: '9.5 / 10.0 (till 2nd semester only)',
      highlights: [
        'Specializing in Machine Learning, Deep Learning, and Computer Vision',
        'Research Intern at 5G Lab, AIMS-DTU, and Applied Mathematics Dept.',
        'Active member of AIMS-DTU (AI Society) and MACS-DTU (Math Society)',
      ],
    },
    {
      degree: 'Higher Secondary Education (XII - CBSE)',
      institution: 'Aristotle Public School',
      duration: '2022 - 2024',
      gpa: '93.4%',
      highlights: [
        'Physics, Chemistry, Mathematics with Computer Science',
        'Strong foundation in mathematical concepts and analytical thinking',
        'Developed interest in programming and computational mathematics',
      ],
    },
    {
      degree: 'Secondary Education (X - CBSE)',
      institution: 'Sachdeva Public School',
      duration: '2020 - 2022',
      gpa: '97.2%',
      highlights: [
        'Excellent academic performance with distinction in all subjects',
        'Strong foundation in Science and Mathematics',
        'Developed analytical and problem-solving skills',
      ],
    },
  ];

  const certifications = [
    {
      icon: BookOpen,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University, DeepLearning.AI',
      year: '2024',
      link: 'https://www.coursera.org/specializations/machine-learning-introduction'
    },
    {
      icon: Code,
      title: 'Deep Learning Specialization',
      issuer: 'Stanford University, DeepLearning.AI',
      year: '2024',
      link: 'https://www.coursera.org/specializations/deep-learning'
    },
    {
      icon: BookOpen,
      title: 'GANs Specialization (Complete)',
      issuer: 'DeepLearning.AI',
      year: '2024',
      link: 'https://www.coursera.org/specializations/generative-adversarial-networks-gans'
    },
    {
      icon: Code,
      title: 'C/C++ Programming Language',
      issuer: 'Coursera',
      year: '2024',
      link: 'https://www.coursera.org/learn/c-plus-plus-a'
    },
    {
      icon: BookOpen,
      title: 'Data Structures & Algorithms',
      issuer: 'GeeksforGeeks',
      year: '2024',
      link: 'https://www.geeksforgeeks.org/courses/dsa-self-paced'
    },
  ];

  return (
    <section id="education" className="relative pt-8 pb-32 px-6" ref={ref}>
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
              05 / EDUCATION
            </span>
            <h2 className="text-5xl md:text-6xl mb-6">Academic Journey</h2>
            <div className="w-20 h-px bg-white/20" />
          </div>

          {/* Education Timeline */}
          <div className="space-y-12 mb-20">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ElectricBorder 
                  color="#60A5FA" 
                  speed={1.2} 
                  chaos={0.5} 
                  thickness={2}
                  style={{ borderRadius: 8 }}
                >
                  <div className="p-8 backdrop-blur-sm bg-black/40">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className="p-3 border border-white/20">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl mb-2">{edu.degree}</h3>
                          <p className="text-gray-500">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
                        <p className="text-sm">GPA: {edu.gpa}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 text-sm text-gray-500">
                      {edu.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="w-1 h-1 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ElectricBorder>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl">Certifications</h3>
            </div>
            
            {/* Premium Certification Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                    title={`View ${cert.title} certificate`}
                  >
                    {/* Animated border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
                    
                    {/* Main card */}
                    <div className="relative backdrop-blur-xl bg-black/60 border border-white/10 rounded-xl p-8 group-hover:border-blue-400/40 transition-all duration-500 group-hover:bg-black/70 overflow-hidden">
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20" />
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 backdrop-blur-sm">
                          <cert.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                        <div className="text-right flex flex-col items-end gap-2">
                          <div className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full">
                            <span className="text-sm font-medium text-blue-400">{cert.year}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                          {cert.issuer}
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="pt-4">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: '100%' } : { width: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                              />
                            </div>
                            <span className="text-xs text-blue-400 font-medium">Certified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
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