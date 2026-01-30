"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let&apos;s talk!
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Form */}
        <Card className="md:col-span-3 animate-slide-up">
          <form
            action={`mailto:anilkumarputta01@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0AFrom: ${email}`}
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            <Button type="submit" size="lg" fullWidth>
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <Card className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6">
              Contact Information
            </h3>

            <a
              href="mailto:anilkumarputta01@gmail.com"
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-xl text-primary" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Email</div>
                <div className="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-primary transition-colors">
                  anilkumarputta01@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+16692323551"
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="text-xl text-secondary" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Phone</div>
                <div className="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-secondary transition-colors">
                  +1 (669) 232-3551
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="text-xl text-accent" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Location</div>
                <div className="font-medium text-zinc-800 dark:text-zinc-200">
                  San Francisco Bay Area, CA
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Connect with me</div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Anilkumarputta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <Github className="text-2xl" size={24} />
                </a>
                <a
                  href="http://linkedin.com/in/anil-putta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <Linkedin className="text-2xl" size={24} />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
