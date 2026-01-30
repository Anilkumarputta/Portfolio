"use client";

import { Mail, Phone, Download, Linkedin } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Passionate developer who loves building things that make a difference
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <Card className="space-y-6 animate-slide-up">
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
            Get In Touch
          </h3>
          
          <div className="space-y-4">
            <a
              href="mailto:anilkumarputta01@gmail.com"
              className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors group"
            >
              <Mail className="text-2xl text-primary group-hover:scale-110 transition-transform" size={24} />
              <span>anilkumarputta01@gmail.com</span>
            </a>
            
            <a
              href="tel:+16692323551"
              className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors group"
            >
              <Phone className="text-2xl text-primary group-hover:scale-110 transition-transform" size={24} />
              <span>+1 (669) 232-3551</span>
            </a>
            
            <a
              href="http://linkedin.com/in/anil-putta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors group"
            >
              <Linkedin className="text-2xl text-primary group-hover:scale-110 transition-transform" size={24} />
              <span>linkedin.com/in/anil-putta</span>
            </a>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              icon={<Download size={18} />}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Anil_Kumar_Putta_Resume.pdf';
                link.click();
              }}
              fullWidth
            >
              Download Resume
            </Button>
          </div>
        </Card>

        {/* About Content Card */}
        <Card className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
            My Story
          </h3>
          
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I&apos;m a passionate developer who loves building things that make a difference. 
            My favorite part of coding is turning ideas into real, useful products. 
            I enjoy collaborating, learning new tech, and sharing what I know.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold">Favorite Tech:</span> React, Spring Boot, Docker, AWS, TypeScript
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold">Fun Fact:</span> I once built a chatbot that helps people find healthy recipes!
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold">Dream:</span> To lead a team building impactful products for millions
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
