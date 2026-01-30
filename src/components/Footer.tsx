"use client";

import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-zinc-900 dark:bg-black text-zinc-300 py-12 mt-20">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="text-2xl" size={24} />
      </button>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 gradient-text">
              Anil Kumar Putta
            </h3>
            <p className="text-sm leading-relaxed">
              Full Stack Java Developer passionate about building scalable, beautiful web applications that make a difference.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Anilkumarputta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="text-xl" size={20} />
              </a>
              <a
                href="http://linkedin.com/in/anil-putta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-xl" size={20} />
              </a>
            </div>
            <p className="text-sm">
              <a
                href="mailto:anilkumarputta01@gmail.com"
                className="hover:text-primary transition-colors"
              >
                anilkumarputta01@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Anil Kumar Putta. Built with ❤️ using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
