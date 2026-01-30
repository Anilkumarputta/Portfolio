"use client";

import { 
  Coffee,
  Leaf,
  Atom,
  Code2,
  Server,
  Cloud,
  Container,
  Boxes,
  Database,
  Binary,
  FileCode,
  Braces,
  GitBranch
} from 'lucide-react';
import Card from '../ui/Card';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'text-blue-500',
    skills: [
      { name: 'React', icon: Atom, level: 90 },
      { name: 'Angular', icon: Code2, level: 85 },
      { name: 'TypeScript', icon: FileCode, level: 88 },
    ]
  },
  {
    title: 'Backend',
    color: 'text-green-500',
    skills: [
      { name: 'Java', icon: Coffee, level: 95 },
      { name: 'Spring Boot', icon: Leaf, level: 92 },
      { name: 'Node.js', icon: Server, level: 85 },
      { name: 'Python', icon: Braces, level: 80 },
    ]
  },
  {
    title: 'DevOps & Cloud',
    color: 'text-orange-500',
    skills: [
      { name: 'AWS', icon: Cloud, level: 88 },
      { name: 'Docker', icon: Container, level: 90 },
      { name: 'Kubernetes', icon: Boxes, level: 82 },
      { name: 'Git', icon: GitBranch, level: 92 },
    ]
  },
  {
    title: 'Databases',
    color: 'text-purple-500',
    skills: [
      { name: 'MySQL', icon: Database, level: 90 },
      { name: 'PostgreSQL', icon: Database, level: 88 },
      { name: 'MongoDB', icon: Binary, level: 85 },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <Card
            key={category.title}
            className="space-y-4 animate-slide-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className={`text-xl font-bold ${category.color} mb-4`}>
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className={`text-3xl ${category.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
