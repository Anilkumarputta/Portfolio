import { projects } from "../data/projects";
import { useEffect, useRef, useState } from "react";

function useScrollFadeIn() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return [ref, visible];
}

export default function Projects() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <section ref={ref} id="projects" className={`bg-slate-800 text-white py-16 px-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">💡 Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="bg-slate-900 border border-slate-700 p-6 rounded-lg shadow-lg flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl stagger-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* GitHub icon removed */}
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <p className="text-cyan-200 mt-2">{p.desc}</p>
            <p className="text-sm mt-2 text-cyan-400">{p.tech}</p>
            <nav className="mt-4 space-x-4" aria-label={`${p.name} links`}>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-violet-400 transition">GitHub</a>
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-emerald-400 transition">Live</a>
            </nav>
          </article>
        ))}
      </div>
    </section>
  );
}
