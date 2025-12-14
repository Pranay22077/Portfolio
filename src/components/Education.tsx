import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, BookOpen, Code } from 'lucide-react';
import GradualBlur from './GradualBlur';

export function Education() {
  const { ref, isInView } = useInView();

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology (IIT)',
      duration: '2021 - 2025',
      gpa: '9.2 / 10.0',
      highlights: [
        'Specialized in Machine Learning and Data Science',
        'Teaching Assistant for Data Structures & Algorithms',
        'Member of Technical Society and Coding Club',
      ],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Delhi Public School',
      duration: '2019 - 2021',
      gpa: '95.4%',
      highlights: [
        'Computer Science and Mathematics Major',
        'School Topper in Computer Science',
        'Led Programming Club and organized coding workshops',
      ],
    },
  ];

  const certifications = [
    {
      icon: Code,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024',
    },
    {
      icon: BookOpen,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford Online',
      year: '2023',
    },
    {
      icon: Code,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      year: '2023',
    },
    {
      icon: BookOpen,
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      year: '2023',
    },
  ];

  return (
    <section id="education" className="relative py-32 px-6" ref={ref}>
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
                className="border border-white/20 p-8 hover:border-white/50 transition-all backdrop-blur-sm bg-black/40"
              >
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
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-white/20 p-6 hover:border-white/50 transition-all group backdrop-blur-sm bg-black/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-white/20 group-hover:bg-white/5 transition-all">
                      <cert.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1 group-hover:text-gray-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-500 mb-1">{cert.issuer}</p>
                      <p className="text-xs text-gray-600">{cert.year}</p>
                    </div>
                  </div>
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