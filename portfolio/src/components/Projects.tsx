'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    title: "AI-Powered Image Generator",
    description: "Built a GAN-based image generation system using PyTorch. Implemented DCGAN architecture for generating high-quality synthetic images.",
    tech: ["Python", "PyTorch", "GANs", "Computer Vision"],
    status: "Completed",
    type: "Machine Learning",
    features: [
      "Custom DCGAN implementation",
      "Real-time image generation",
      "Interactive web interface",
      "Model optimization techniques"
    ]
  },
  {
    title: "Smart Data Analytics Platform",
    description: "Developed a comprehensive data analytics platform with ML-powered insights and real-time visualization capabilities.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    status: "In Progress",
    type: "Full Stack + ML",
    features: [
      "Automated data preprocessing",
      "Predictive analytics models",
      "Interactive dashboards",
      "RESTful API design"
    ]
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive web application for visualizing sorting and graph algorithms. Built to help students understand complex algorithms.",
    tech: ["JavaScript", "React", "D3.js", "Algorithms"],
    status: "Completed",
    type: "Educational Tool",
    features: [
      "Multiple sorting algorithms",
      "Graph traversal visualization",
      "Step-by-step execution",
      "Responsive design"
    ]
  },
  {
    title: "Open Source Contributions",
    description: "Active contributor to various open source projects, focusing on ML libraries and educational resources.",
    tech: ["Python", "Documentation", "Testing", "Community"],
    status: "Ongoing",
    type: "Open Source",
    features: [
      "Bug fixes and improvements",
      "Documentation updates",
      "Feature implementations",
      "Community engagement"
    ]
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('work');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="min-h-screen py-20 relative">
      {/* Laser beam grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="laser-grid"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 laser-glow">
              MY <span className="text-orange-400">PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto laser-line"></div>
            <p className="text-gray-400 mt-4 text-lg">Building scalable solutions & impactful applications</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Cards */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`project-card cursor-pointer transition-all duration-500 ${
                    selectedProject === index ? 'project-card-active' : ''
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-orange-400">{project.title}</h3>
                    <span className={`status-badge ${
                      project.status === 'Completed' ? 'status-completed' :
                      project.status === 'In Progress' ? 'status-progress' : 'status-ongoing'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Project Details */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="laser-card h-full">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-orange-400">
                      {projects[selectedProject].title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {projects[selectedProject].type}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {projects[selectedProject].description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">Key Features</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-orange-400 mr-2">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-orange-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, index) => (
                      <span key={index} className="tech-tag-large">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="laser-button flex-1">
                    View Project
                  </button>
                  <button className="laser-button-outline">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-orange-400">🏆 GitHub Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="achievement-card">
                <div className="text-3xl mb-2">🌟</div>
                <div className="text-2xl font-bold text-orange-400">Level 5</div>
                <div className="text-sm text-gray-400">Hacktoberfest 2025</div>
              </div>
              <div className="achievement-card">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-orange-400">Top 5,668</div>
                <div className="text-sm text-gray-400">Contributors</div>
              </div>
              <div className="achievement-card">
                <div className="text-3xl mb-2">🌳</div>
                <div className="text-2xl font-bold text-orange-400">TreeNation</div>
                <div className="text-sm text-gray-400">Environmental Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}