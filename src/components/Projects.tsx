import { motion } from 'motion/react';
import { useInView } from './useInView';
import ChromaGrid, { ChromaItem } from './ChromaGrid';

export function Projects() {
  const { ref, isInView } = useInView();

  const projects: ChromaItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      title: 'AI-Powered Image Generator',
      subtitle: 'GAN-based image generation system using PyTorch with DCGAN architecture for high-quality synthetic images.',
      handle: 'Python • PyTorch • GANs',
      borderColor: '#ffffff',
      gradient: 'linear-gradient(145deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'Smart Data Analytics Platform',
      subtitle: 'Comprehensive data analytics with ML-powered insights and interactive dashboards.',
      handle: 'Python • TensorFlow • React',
      borderColor: '#ffffff',
      gradient: 'linear-gradient(180deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077'
    },
    {
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
      title: 'Algorithm Visualizer',
      subtitle: 'Interactive web app for visualizing sorting and graph algorithms with step-by-step execution.',
      handle: 'JavaScript • React • D3.js',
      borderColor: '#ffffff',
      gradient: 'linear-gradient(165deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077'
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      title: 'Machine Learning Model Hub',
      subtitle: 'Collection of ML models for classification, regression, and clustering with documentation.',
      handle: 'Python • Scikit-Learn • NumPy',
      borderColor: '#ffffff',
      gradient: 'linear-gradient(195deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077'
    },
    {
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop',
      title: 'Deep Learning Research',
      subtitle: 'Research on advanced neural network architectures for image classification.',
      handle: 'PyTorch • Keras • Research',
      borderColor: '#ffffff',
      gradient: 'linear-gradient(225deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077'
    },
    {
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop',
      title: 'Open Source Contributions',
      subtitle: 'Active contributor to ML libraries, educational resources, and community projects.',
      handle: 'Python • Documentation • Community',
      borderColor: '#ffffff',
      gradient: 'linear-gradient(135deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077'
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <span className="text-sm tracking-widest text-gray-500 mb-4 block">03 / PROJECTS</span>
            <h2 className="text-5xl md:text-6xl mb-6">Featured Work</h2>
            <div className="w-20 h-px bg-white/20" />
          </div>

          <ChromaGrid 
            items={projects}
            radius={350}
            columns={3}
            damping={0.4}
            fadeOut={0.5}
          />
        </motion.div>
      </div>
    </section>
  );
}
