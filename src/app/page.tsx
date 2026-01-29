"use client";
import DarkModeToggle from "../components/DarkModeToggle";
import SocialLinks from "../components/SocialLinks";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Analytics from "./components/Analytics";
import Image from "next/image";

const blogPosts = [
  {
    title: "How to Build a Modern Portfolio with Next.js & Tailwind",
    summary: "A step-by-step guide to creating a beautiful, fast, and responsive developer portfolio using the latest tools.",
    url: "https://dev.to/anilkumarputta/modern-portfolio-nextjs-tailwind"
  },
  {
    title: "Scaling Microservices with Spring Boot & Kubernetes",
    summary: "Lessons learned from deploying Java microservices in production with Docker and K8s.",
    url: "https://dev.to/anilkumarputta/spring-boot-kubernetes"
  },
  {
    title: "My Favorite Productivity Tools for Developers",
    summary: "A roundup of tools and tips that help me code faster and stay organized.",
    url: "https://dev.to/anilkumarputta/productivity-tools"
  },
  {
    title: "How I Designed a Scalable Notification System",
    summary: "Behind the scenes of building a robust notification microservice for a fintech platform.",
    url: "https://dev.to/anilkumarputta/scalable-notification-system"
  },
  {
    title: "Lessons from Migrating to AWS Lambda",
    summary: "What I learned moving legacy workloads to serverless and how it changed our deployment pipeline.",
    url: "https://dev.to/anilkumarputta/aws-lambda-migration"
  }
];

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "React", icon: "⚛️" },
  { name: "Angular", icon: "🅰️" },
  { name: "Node.js", icon: "🟩" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "SQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
];

const testimonials = [
  {
    quote: "Anil is a top-tier developer who delivers robust solutions and is a pleasure to work with.",
    name: "Priya S.",
    title: "Tech Lead, Citi"
  },
  {
    quote: "His attention to detail and passion for clean code made a huge impact on our project.",
    name: "Rahul M.",
    title: "Manager, Express Scripts"
  },
  {
    quote: "Anil’s mentorship helped me grow from a junior to a confident full stack developer.",
    name: "Samantha T.",
    title: "Software Engineer, US Bank"
  },
  {
    quote: "He brings energy and creativity to every team meeting. Highly recommended!",
    name: "Vikram P.",
    title: "Product Owner, DXC Technologies"
  }
];

const timeline = [
  { year: "2025–Present", role: "Full Stack Developer", company: "Citi" },
  { year: "2023–2025", role: "Full Stack Developer", company: "Express Scripts" },
  { year: "2022–2023", role: "Full Java Stack Developer", company: "US Bank" },
  { year: "2022", role: "Full Java Stack Developer", company: "DXC Technologies" },
  { year: "2020–2021", role: "Java Developer", company: "Value Labs" },
];

function Footer() {
  return (
    <footer className="w-full py-4 bg-white/80 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center mt-8">
      <div className="flex gap-6 mb-1">
        <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          <Image src="/github-mark.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" loading="lazy" />
          GitHub
        </a>
        <a href="http://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5" loading="lazy" />
          LinkedIn
        </a>
      </div>
      <span className="text-xs text-zinc-400">&copy; {new Date().getFullYear()} Anil Kumar Putta</span>
    </footer>
  );
}


export default function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <Analytics />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-zinc-900 dark:via-black dark:to-zinc-800 px-4 scroll-smooth">
        <DarkModeToggle aria-label="Toggle dark mode" />
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 py-16 w-full max-w-xl animate-slide-up">
          <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-gradient-border">
            <Image
              src="/profile-placeholder.png"
              alt="Anil Kumar Putta profile"
              width={128}
              height={128}
              className="rounded-full shadow-lg w-32 h-32 object-cover border-4 border-white dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-700"
              priority
            />
          </div>
          <Image
            src="/hero-illustration.svg"
            alt="Decorative hero illustration"
            width={320}
            height={180}
            className="w-full max-w-md mt-2 mb-2"
            aria-hidden="true"
            loading="lazy"
          />
          <h1 className="text-4xl font-bold text-center rainbow-text animate-rainbow">Hi, I'm Anil Kumar Putta</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 text-center max-w-md">
            Full Stack Java Developer with 5+ years of experience building scalable web apps and microservices for finance, healthcare, and telecom. I love creating clean, secure, and high-performance solutions.
          </p>
          <a
            href="#projects"
            className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary-dark transition focus:outline-none focus:ring-4 focus:ring-primary-light"
            aria-label="Jump to Projects section"
          >
            See My Work
          </a>
          <SocialLinks />
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-fade-in" />
        </div>
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full opacity-80 animate-fade-in" />
        </div>
        {/* Skills Section */}
        <section id="skills" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-300">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg p-4 w-24 hover:scale-105 transition-transform border-2 border-pink-200 dark:border-pink-700">
                <span className="text-3xl mb-1">{skill.icon}</span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full opacity-80 animate-fade-in" />
        </div>
        {/* Experience Timeline Section */}
        <section id="timeline" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-300">Experience</h2>
          <ol className="relative border-l-4 border-blue-300 dark:border-blue-700 ml-4">
            {timeline.map(item => (
              <li key={item.year} className="mb-8 ml-6">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 rounded-full text-white font-bold shadow-lg">{item.year[0]}</span>
                <div className="bg-white/90 dark:bg-zinc-900/90 rounded-lg shadow p-4">
                  <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300">{item.role}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">{item.company}</p>
                  <span className="text-xs text-zinc-400">{item.year}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full opacity-80 animate-fade-in" />
        </div>
        {/* Testimonials Section */}
        <section id="testimonials" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-300">Testimonials</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white/90 dark:bg-zinc-900/90 rounded-xl shadow-lg p-6 flex-1 border-2 border-blue-200 dark:border-blue-700 hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
                <p className="italic text-lg text-zinc-700 dark:text-zinc-200 mb-2">“{t.quote}”</p>
                <span className="block font-semibold text-blue-700 dark:text-blue-300">{t.name}</span>
                <span className="block text-xs text-zinc-400">{t.title}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full opacity-80 animate-fade-in" />
        </div>
        <section id="about" className="w-full max-w-2xl bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-8 mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-200 mb-2">
            <span className="font-semibold">Email:</span> anilkumarputta01@gmail.com<br />
            <span className="font-semibold">Phone:</span> +1 (669) 232-3551<br />
            <span className="font-semibold">LinkedIn:</span> <a href="http://linkedin.com/in/anil-putta" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">anil-putta</a>
          </p>
          <p className="text-zinc-700 dark:text-zinc-200 mb-2">
            <span className="font-semibold">A little about me:</span> I’m a passionate developer who loves building things that make a difference. My favorite part of coding is turning ideas into real, useful products. I enjoy collaborating, learning new tech, and sharing what I know.
          </p>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 mb-2">
            <li>Favorite Tech: React, Spring Boot, Docker, AWS, TypeScript</li>
            <li>Fun Fact: I once built a chatbot that helps people find healthy recipes!</li>
            <li>Dream: To lead a team building impactful products for millions</li>
          </ul>
          <a href="/resume.pdf" download className="inline-block mt-4 px-6 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary-dark transition focus:outline-none focus:ring-4 focus:ring-primary-light" aria-label="Download Resume PDF">Download Resume</a>
        </section>

        {/* Hobbies/Interests Section */}
        <section id="hobbies" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-300">Hobbies & Interests</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg p-4 w-28 hover:scale-105 transition-transform border-2 border-green-200 dark:border-green-700">
              <span className="text-3xl mb-1">🎸</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Guitar</span>
            </div>
            <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg p-4 w-28 hover:scale-105 transition-transform border-2 border-green-200 dark:border-green-700">
              <span className="text-3xl mb-1">🏸</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Badminton</span>
            </div>
            <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg p-4 w-28 hover:scale-105 transition-transform border-2 border-green-200 dark:border-green-700">
              <span className="text-3xl mb-1">📚</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Reading</span>
            </div>
            <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg p-4 w-28 hover:scale-105 transition-transform border-2 border-green-200 dark:border-green-700">
              <span className="text-3xl mb-1">🌏</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Travel</span>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 rounded-full opacity-80 animate-fade-in" />
        </div>

        {/* Now Section */}
        <section id="now" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-orange-300">Now</h2>
          <div className="bg-white/90 dark:bg-zinc-900/90 rounded-xl shadow-lg p-6 border-2 border-orange-200 dark:border-orange-700">
            <p className="text-zinc-700 dark:text-zinc-200 mb-2">Currently, I’m learning more about cloud-native architectures and building side projects with Next.js and AI APIs. I’m also mentoring junior developers and contributing to open source.</p>
            <span className="text-xs text-orange-500 dark:text-orange-300">Last updated: January 2026</span>
          </div>
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-fade-in" />
        </div>
        {/* Projects Section */}
        <section id="projects" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* TaskFlow Pro */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project2-placeholder.png" alt="TaskFlow Pro" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">TaskFlow Pro</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A productivity app for managing tasks and deadlines, built with React, Node.js, and MongoDB. Used by 500+ users.</p>
              <a href="https://github.com/Anilkumarputta/TaskFlowPro" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* HealthTrackr */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project3-placeholder.png" alt="HealthTrackr" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">HealthTrackr</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A health dashboard for tracking fitness and nutrition, featuring real-time charts and personalized insights.</p>
              <a href="https://github.com/Anilkumarputta/HealthTrackr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* SmartCalc */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project-placeholder.png" alt="SmartCalc" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">SmartCalc</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A JavaScript calculator app with advanced features. Built with a focus on usability and clean code.</p>
              <a href="https://github.com/Anilkumarputta/SmartCalc" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* Project1 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project-placeholder.png" alt="Project1" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">Project1</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A web project using HTML. Demonstrates front-end skills and project structure.</p>
              <a href="https://github.com/Anilkumarputta/Project1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* calculator2 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project-placeholder.png" alt="calculator2" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">calculator2</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Extension for calculator MAUI example. Built in C#.</p>
              <a href="https://github.com/Anilkumarputta/calculator2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* calc-prj2 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project-placeholder.png" alt="calc-prj2" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">calc-prj2</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A C# calculator project. Focuses on core calculation logic and UI.</p>
              <a href="https://github.com/Anilkumarputta/calc-prj2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* calc-proj3 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project-placeholder.png" alt="calc-proj3" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">calc-proj3</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Calculator project with history feature. Built in C#.</p>
              <a href="https://github.com/Anilkumarputta/calc-proj3" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* calc-history1 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
              <Image src="/project-placeholder.png" alt="calc-history1" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">calc-history1</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">C# calculator with history tracking. Demonstrates state management.</p>
              <a href="https://github.com/Anilkumarputta/calc-history1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
            {/* calculator-4 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
              <Image src="/project-placeholder.png" alt="calculator-4" width={320} height={128} className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
              <h3 className="text-lg font-semibold mb-1">calculator-4</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Forked calculator project. Explores C# and open-source collaboration.</p>
              <a href="https://github.com/Anilkumarputta/calculator-4" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-fade-in" />
        </div>
        {/* Featured Project Section */}
        <section id="featured" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-yellow-600 dark:text-yellow-300">Featured Project</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center bg-gradient-to-tr from-pink-200 via-blue-200 to-yellow-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 rounded-xl shadow-2xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
            <Image src="/project1-placeholder.png" alt="Featured Project" width={160} height={160} className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-white dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-700" loading="lazy" />
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">KYC Onboarding Dashboard</h3>
              <p className="text-zinc-700 dark:text-zinc-200 mb-2">A real-time onboarding and analytics dashboard for Citi, built with React, Angular, and Spring Boot. Features secure authentication, data visualization, and seamless user experience.</p>
              <a href="https://github.com/Anilkumarputta/Project1" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-6 py-2 rounded-full bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-600 transition">View Project</a>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full opacity-80 animate-fade-in" />
        </div>
        {/* Blog/Articles Preview Section */}
        <section id="blog" className="w-full max-w-2xl mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-300">Blog & Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map(post => (
              <a key={post.title} href={post.url} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/90 dark:bg-zinc-900/90 rounded-xl shadow-lg p-4 border-2 border-pink-200 dark:border-pink-700 hover:scale-105 active:scale-95 transition-transform duration-200 hover:shadow-2xl">
                <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-1">{post.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">{post.summary}</p>
                <span className="text-xs text-pink-500 dark:text-pink-300 mt-auto">Read More →</span>
              </a>
            ))}
          </div>
        </section>
        <div className="w-full flex justify-center my-8">
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full opacity-80 animate-fade-in" />
        </div>

        {/* Contact Section */}
        <div className="flex justify-center my-8">
          <button
            onClick={() => setShowContact(true)}
            className="px-8 py-3 rounded-full bg-highlight text-white font-semibold shadow hover:bg-highlight-dark transition text-lg animate-fade-in focus:outline-none focus:ring-4 focus:ring-highlight-light"
            aria-label="Open contact form"
          >
            Contact Me
          </button>
        </div>
        {showContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-2 right-2 text-zinc-400 hover:text-highlight-dark text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-highlight-light"
                aria-label="Close contact form"
              >
                ×
              </button>
              <ContactForm />
            </div>
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}
