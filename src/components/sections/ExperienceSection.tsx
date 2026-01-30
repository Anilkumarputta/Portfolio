"use client";

import { Building2, Calendar } from 'lucide-react';
import Card from '../ui/Card';

const timeline = [
  { 
    year: "2025–Present", 
    role: "Full Stack Developer", 
    company: "Citi",
    description: "Leading development of KYC onboarding dashboard with React and Spring Boot",
    tech: ["React", "Spring Boot", "AWS", "PostgreSQL"]
  },
  { 
    year: "2023–2025", 
    role: "Full Stack Developer", 
    company: "Express Scripts",
    description: "Built healthcare analytics platform serving 100K+ users",
    tech: ["Angular", "Java", "Docker", "MongoDB"]
  },
  { 
    year: "2022–2023", 
    role: "Full Java Stack Developer", 
    company: "US Bank",
    description: "Developed secure banking microservices with 99.9% uptime",
    tech: ["Java", "Spring", "Kubernetes", "MySQL"]
  },
  { 
    year: "2022", 
    role: "Full Java Stack Developer", 
    company: "DXC Technologies",
    description: "Maintained enterprise telecom applications",
    tech: ["Java", "React", "AWS"]
  },
  { 
    year: "2020–2021", 
    role: "Java Developer", 
    company: "Value Labs",
    description: "Started career building scalable backend services",
    tech: ["Java", "Spring Boot", "SQL"]
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          My professional journey in building world-class applications
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white dark:border-zinc-900 shadow-lg hidden md:block z-10" />

              <Card className="ml-0 md:ml-20 hover:shadow-2xl transition-all duration-300" hover>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                      <Calendar size={16} />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Building2 size={20} />
                    <span>{item.company}</span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
