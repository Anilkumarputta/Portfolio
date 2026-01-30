"use client";

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';
import SocialLinks from '../SocialLinks';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-zinc-800" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative inline-block animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full blur-xl opacity-50 animate-glow" />
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent">
            <Image
              src="/profile-placeholder.png"
              alt="Anil Kumar Putta profile"
              width={160}
              height={160}
              className="rounded-full shadow-2xl w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-700"
              priority
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Anil Kumar Putta</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300">
            Full Stack Java Developer
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Building scalable web applications and microservices with 5+ years of experience in finance, healthcare, and telecom.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={onContactClick}
            className="w-full sm:w-auto"
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="pt-6">
          <SocialLinks />
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="text-primary hover:text-primary-dark transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-3xl" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
