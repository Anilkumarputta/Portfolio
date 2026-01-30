"use client";

import Image from 'next/image';
import { ExternalLink, Code } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const projects = [
  {
    title: "KYC Onboarding Dashboard",
    description: "A real-time onboarding and analytics dashboard for Citi, built with React, Angular, and Spring Boot. Features secure authentication, data visualization, and seamless user experience.",
    image: "/project1-placeholder.png",
    tags: ["React", "Angular", "Spring Boot", "AWS"],
    github: "https://github.com/Anilkumarputta/Project1",
    featured: true,
  },
  {
    title: "TaskFlow Pro",
    description: "A productivity app for managing tasks and deadlines, built with React, Node.js, and MongoDB. Used by 500+ users with real-time collaboration features.",
    image: "/project2-placeholder.png",
    tags: ["React", "Node.js", "MongoDB", "Docker"],
    github: "https://github.com/Anilkumarputta/TaskFlowPro",
    featured: false,
  },
  {
    title: "HealthTrackr",
    description: "A health dashboard for tracking fitness and nutrition, featuring real-time charts and personalized insights powered by AI.",
    image: "/project3-placeholder.png",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/Anilkumarputta/HealthTrackr",
    featured: false,
  },
  {
    title: "SmartCalc",
    description: "A JavaScript calculator app with advanced features including scientific calculations and history tracking. Built with a focus on usability and clean code.",
    image: "/project-placeholder.png",
    tags: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Anilkumarputta/SmartCalc",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A selection of projects I&apos;ve built that showcase my skills and passion
        </p>
      </div>

      {/* Featured Project */}
      {projects.filter(p => p.featured).map((project, index) => (
        <Card
          key={project.title}
          className="mb-12 overflow-hidden animate-scale-in"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge
                variant="warning"
                size="md"
                className="absolute top-4 right-4"
              >
                ⭐ Featured
              </Badge>
            </div>

            <div className="flex flex-col justify-center space-y-4 p-4">
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                {project.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={<ExternalLink size={18} />}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View Project
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  icon={<Code size={18} />}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.filter(p => !p.featured).map((project, index) => (
          <Card
            key={project.title}
            className="overflow-hidden group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            hover
          >
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink size={16} />}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<Code size={16} />}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  Code
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                {project.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="neutral" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
