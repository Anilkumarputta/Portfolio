"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Button from './ui/Button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass dark:glass-dark shadow-lg py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Anil Kumar Putta
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary'
                      : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="secondary"
                  icon={<Download size={16} />}
                  href="/resume.pdf"
                  className="min-w-[120px]"
                >
                  Resume
                </Button>
                <Button
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="min-w-[120px]"
                >
                  Contact
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-zinc-700 dark:text-zinc-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 right-0 bottom-0 w-64 glass dark:glass-dark p-6 animate-slide-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-primary text-white'
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="space-y-3 pt-2">
                <Button
                  fullWidth
                  variant="secondary"
                  icon={<Download size={18} />}
                  href="/resume.pdf"
                >
                  Resume
                </Button>
                <Button
                  fullWidth
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
