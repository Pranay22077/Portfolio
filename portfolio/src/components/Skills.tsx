'use client';

import { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 90, color: "from-blue-400 to-yellow-400" },
      { name: "Java", level: 85, color: "from-red-400 to-orange-400" },
      { name: "C++", level: 80, color: "from-blue-500 to-purple-500" },
      { name: "JavaScript", level: 75, color: "from-yellow-400 to-orange-400" },
      { name: "MATLAB", level: 70, color: "from-orange-400 to-red-400" }
    ]
  },
  {
    title: "ML/DL Frameworks",
    icon: "🤖",
    skills: [
      { name: "TensorFlow", level: 85, color: "from-orange-400 to-red-400" },
      { name: "PyTorch", level: 80, color: "from-red-400 to-pink-400" },
      { name: "Scikit-Learn", level: 90, color: "from-blue-400 to-green-400" },
      { name: "Keras", level: 85, color: "from-red-500 to-pink-500" },
      { name: "OpenCV", level: 75, color: "from-green-400 to-blue-400" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🔧",
    skills: [
      { name: "Git/GitHub", level: 90, color: "from-gray-400 to-black" },
      { name: "Docker", level: 70, color: "from-blue-400 to-cyan-400" },
      { name: "Jupyter", level: 95, color: "from-orange-400 to-yellow-400" },
      { name: "Linux", level: 80, color: "from-yellow-400 to-orange-400" },
      { name: "VS Code", level: 95, color: "from-blue-400 to-purple-400" }
    ]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            const newAnimatedSkills: {[key: string]: number} = {};
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                newAnimatedSkills[skill.name] = skill.level;
              });
            });
            setAnimatedSkills(newAnimatedSkills);
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      {/* Laser beam effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="laser-beam-vertical laser-beam-left"></div>
        <div className="laser-beam-vertical laser-beam-right"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 laser-glow">
              TECH <span className="text-orange-400">STACK</span>
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto laser-line"></div>
            <p className="text-gray-400 mt-4 text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`laser-card transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-bold text-orange-400">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress bg-gradient-to-r ${skill.color}`}
                          style={{ 
                            width: `${animatedSkills[skill.name] || 0}%`,
                            transition: 'width 1s ease-out',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-orange-400">🔭 Currently Exploring</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Deep Learning Architectures",
                "GANs & Generative Models", 
                "Computer Vision",
                "Natural Language Processing",
                "Reinforcement Learning"
              ].map((topic, index) => (
                <div 
                  key={topic}
                  className={`learning-tag transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}