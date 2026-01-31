import { skillCategories } from "../data/skills";
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

export default function Skills() {
  const [ref, visible] = useScrollFadeIn();
  // Example skill levels (out of 100) for demo; adjust as needed
  const skillLevels = {
    Java: 95, Spring: 90, Python: 85, 'Spring Boot': 90, 'REST APIs': 92, Microservices: 88,
    React: 95, Angular: 80, 'Next.js': 85, HTML: 98, CSS: 97, JavaScript: 96,
    MySQL: 90, PostgreSQL: 88, Oracle: 80, MongoDB: 85, DynamoDB: 75,
    AWS: 85, GCP: 75, Docker: 90, Kubernetes: 80, Jenkins: 85, Git: 95,
    LLMs: 80, 'GPT-4': 85, LangChain: 75, 'OpenAI API': 80, 'Hugging Face': 70, 'Prompt Engineering': 80, 'AI Integration': 85, 'Github Copilot': 90
  };
  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-20 px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="skills-heading"
    >
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10">
        <h2 id="skills-heading" className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon">🛠️ Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {skillCategories.map((category, idx) => (
            <article
              key={category.title}
              className="bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl glass-card group relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition" />
              <h3 className="font-bold text-cyan-300 text-lg mb-4 drop-shadow-neon">{category.title}</h3>
              <ul className="w-full flex flex-col gap-4">
                {category.skills.split(',').map(skill => {
                  const s = skill.trim();
                  const level = skillLevels[s] || 70;
                  return (
                    <li key={s} className="w-full text-left">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-cyan-200 text-base font-medium">{s}</span>
                        <span className="text-cyan-400 text-xs font-mono">{level}%</span>
                      </div>
                      <div className="w-full h-3 bg-zinc-800/60 rounded-full overflow-hidden">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 shadow-neon transition-all duration-1000"
                          style={{ width: visible ? `${level}%` : '0%' }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
