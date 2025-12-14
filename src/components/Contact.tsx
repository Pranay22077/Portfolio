import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import GradualBlur from './GradualBlur';

export function Contact() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.johnson@example.com',
      link: 'mailto:alex.johnson@example.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
    },
  ];

  const social = [
    { icon: Github, label: 'GitHub', link: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', link: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-white/[0.02]" ref={ref}>
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
            <span className="text-sm tracking-widest text-gray-500 mb-4 block">06 / CONTACT</span>
            <h2 className="text-5xl md:text-6xl mb-6">Get In Touch</h2>
            <div className="w-20 h-px bg-white/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 border border-white/20">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-gray-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {social.map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/20 hover:bg-white/10 transition-all hover:scale-110"
                      aria-label={platform.label}
                    >
                      <platform.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="text-2xl mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-3 focus:border-white/50 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-3 focus:border-white/50 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-3 focus:border-white/50 outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all tracking-wide backdrop-blur-sm"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-32 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>© 2024 Alex Johnson. Built with React & Motion.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}