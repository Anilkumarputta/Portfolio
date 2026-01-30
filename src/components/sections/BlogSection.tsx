"use client";

import { Clock, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const blogPosts = [
  {
    title: "How to Build a Modern Portfolio with Next.js & Tailwind",
    summary: "A step-by-step guide to creating a beautiful, fast, and responsive developer portfolio using the latest tools.",
    url: "https://dev.to/anilkumarputta/modern-portfolio-nextjs-tailwind",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Web Development"
  },
  {
    title: "Scaling Microservices with Spring Boot & Kubernetes",
    summary: "Lessons learned from deploying Java microservices in production with Docker and K8s.",
    url: "https://dev.to/anilkumarputta/spring-boot-kubernetes",
    date: "Dec 10, 2025",
    readTime: "12 min read",
    category: "Backend"
  },
  {
    title: "My Favorite Productivity Tools for Developers",
    summary: "A roundup of tools and tips that help me code faster and stay organized.",
    url: "https://dev.to/anilkumarputta/productivity-tools",
    date: "Nov 22, 2025",
    readTime: "6 min read",
    category: "Productivity"
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Latest <span className="gradient-text">Articles</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Sharing knowledge and insights from my development journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card hover className="h-full flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <Badge variant="primary" size="sm">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between pt-4 mt-auto">
                  <span className="text-xs text-zinc-500">{post.date}</span>
                  <div className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                    <span className="text-sm">Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
