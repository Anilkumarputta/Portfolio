"use client";

import { Star } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    quote: "Anil is a top-tier developer who delivers robust solutions and is a pleasure to work with.",
    name: "Priya S.",
    title: "Tech Lead, Citi",
    rating: 5
  },
  {
    quote: "His attention to detail and passion for clean code made a huge impact on our project.",
    name: "Rahul M.",
    title: "Manager, Express Scripts",
    rating: 5
  },
  {
    quote: "Anil's mentorship helped me grow from a junior to a confident full stack developer.",
    name: "Samantha T.",
    title: "Software Engineer, US Bank",
    rating: 5
  },
  {
    quote: "He brings energy and creativity to every team meeting. Highly recommended!",
    name: "Vikram P.",
    title: "Product Owner, DXC Technologies",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What People <span className="gradient-text">Say</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Testimonials from colleagues and clients I&apos;ve worked with
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            className="space-y-4 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-xl text-amber-400 fill-amber-400" size={20} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-zinc-700 dark:text-zinc-300 italic text-lg leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </blockquote>

            {/* Author */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="font-semibold text-zinc-800 dark:text-zinc-200">
                {testimonial.name}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {testimonial.title}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
