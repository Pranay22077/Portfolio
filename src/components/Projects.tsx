import { motion } from 'framer-motion';
import { useInView } from './useInView';
import ChromaGrid, { ChromaItem } from './ChromaGrid';

export function Projects() {
  const { ref, isInView } = useInView();

  const projects: ChromaItem[] = [
    {
      image: '',
      title: 'YOLOv8 Architecture from Scratch',
      subtitle: 'Complete implementation of YOLOv8 object detection architecture built from ground up.',
      handle: 'Python • PyTorch • Computer Vision',
      borderColor: '#60A5FA',
      gradient: 'linear-gradient(145deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077/YOLOv8-architecture-from-scratch'
    },
    {
      image: '',
      title: 'OceanEYE TaxaFormer',
      subtitle: 'Advanced marine species classification system using transformer architecture for ocean research.',
      handle: 'TypeScript • Machine Learning • Ocean Tech',
      borderColor: '#60A5FA',
      gradient: 'linear-gradient(180deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077/OceanEYE-s-TaxaFormer'
    },
    {
      image: '',
      title: 'Fashion Virtual Try-On',
      subtitle: 'AI-powered virtual fashion try-on system using deep learning and computer vision techniques.',
      handle: 'Python • Deep Learning • Fashion Tech',
      borderColor: '#60A5FA',
      gradient: 'linear-gradient(165deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077/Fashion-Virtual-Try-On'
    },
    {
      image: '',
      title: 'Image Super-Resolution',
      subtitle: 'Advanced image enhancement using deep learning models for high-quality image upscaling.',
      handle: 'Python • GANs • Image Processing',
      borderColor: '#60A5FA',
      gradient: 'linear-gradient(195deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077/Image-Super-Resolution'
    },
    {
      image: '',
      title: 'Hand Movement Recognition',
      subtitle: 'Real-time hand gesture recognition system using computer vision and machine learning.',
      handle: 'Python • OpenCV • ML',
      borderColor: '#60A5FA',
      gradient: 'linear-gradient(225deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077/Hand-Movement_Recognition'
    },
    {
      image: '',
      title: 'Lane Mapping using OpenCV',
      subtitle: 'Autonomous vehicle lane detection and mapping system using computer vision algorithms.',
      handle: 'Python • OpenCV • Autonomous Systems',
      borderColor: '#60A5FA',
      gradient: 'linear-gradient(135deg, #1a1a1a, #000)',
      url: 'https://github.com/Pranay22077/Lane-Mapping-using-OpenCV'
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
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
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
