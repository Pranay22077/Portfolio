'use client';

import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pranay22077/",
    icon: "💼",
    description: "Professional networking"
  },
  {
    name: "GitHub",
    url: "https://github.com/Pranay22077",
    icon: "🐱",
    description: "Code repositories"
  },
  {
    name: "Twitter",
    url: "https://x.com/Pranay22077",
    icon: "🐦",
    description: "Tech discussions"
  },
  {
    name: "Discord",
    url: "https://discord.com/users/1410226708975456336",
    icon: "🎮",
    description: "Community chat"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/25_pranay_63/",
    icon: "📸",
    description: "Personal updates"
  }
];

const collaborationAreas = [
  {
    icon: "🤖",
    title: "ML/DL Projects",
    description: "Collaboration on Machine Learning & Deep Learning projects"
  },
  {
    icon: "🌐",
    title: "Open Source",
    description: "Open source contributions and community projects"
  },
  {
    icon: "💡",
    title: "Knowledge Sharing",
    description: "Tech discussions & knowledge sharing sessions"
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    description: "Algorithmic challenges and competitive programming"
  }
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      {/* Laser beam effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="laser-beam-diagonal laser-beam-tl-br"></div>
        <div className="laser-beam-diagonal laser-beam-tr-bl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 laser-glow">
              LET'S <span className="text-orange-400">CONNECT</span>
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto laser-line"></div>
            <p className="text-gray-400 mt-4 text-lg">
              💬 Always open to interesting conversations and collaboration!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="laser-card">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="form-input resize-none"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="laser-button w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social Links */}
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Collaboration Areas */}
              <div className="laser-card">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">📧 Reach Out For</h3>
                <div className="space-y-4">
                  {collaborationAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="text-2xl">{area.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white">{area.title}</h4>
                        <p className="text-gray-400 text-sm">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="laser-card">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">🌐 Find Me Online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <div className="text-2xl mb-2">{link.icon}</div>
                      <div className="font-semibold">{link.name}</div>
                      <div className="text-xs text-gray-400">{link.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="laser-card">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">📍 Quick Info</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">🌍</span>
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">🎓</span>
                    <span>B.Tech Mathematics & Computing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">⚡</span>
                    <span>Available for collaborations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="laser-card inline-block">
              <p className="text-gray-400 mb-4">
                ✨ Thanks for visiting! Have a great day! 🌟
              </p>
              <p className="text-sm text-gray-500">
                Made with ❤️ using Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}