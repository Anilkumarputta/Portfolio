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

function Projects() {
  const [ref, visible] = useScrollFadeIn();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(projects);
  const cardRefs = useRef([]);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      projects.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.tech.toLowerCase().includes(q)
      )
    );
  }, [query]);

  // 3D tilt effect
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
      };
      const handleMouseLeave = () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      };
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [filtered]);

  return (
    <section
      ref={ref}
      id="projects"
      className={`relative py-20 px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="projects-heading"
    >
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10">
        <h2 id="projects-heading" className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon">💡 Projects</h2>
        <div className="flex justify-center mb-10">
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects by name, tech, or description..."
            className="w-full max-w-md px-5 py-3 rounded-xl bg-zinc-900/80 border border-cyan-500/30 text-cyan-100 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 shadow-lg transition"
            aria-label="Search projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.length === 0 ? (
            <p className="col-span-2 text-center text-cyan-300 text-lg">No projects found.</p>
          ) : (
            filtered.map((p, i) => (
              <article
                key={i}
                ref={el => cardRefs.current[i] = el}
                className="bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-xl p-8 flex flex-col items-start transition-transform duration-300 hover:shadow-2xl glass-card group relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.15}s` }}
                tabIndex={0}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none z-10" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition" />
                <h3 className="text-2xl font-bold text-white drop-shadow-neon relative z-20">{p.name}</h3>
                <p className="text-cyan-200 mt-3 text-base relative z-20">{p.desc}</p>
                <p className="text-sm mt-3 text-cyan-400 font-mono relative z-20">{p.tech}</p>
                <nav className="mt-6 flex gap-6 relative z-20" aria-label={`${p.name} links`}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link"
                  >
                    Live
                  </a>
                </nav>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
