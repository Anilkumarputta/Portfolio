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

export default function Experience() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <div ref={ref} className={`bg-slate-900 text-white py-16 px-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">💼 Experience</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {["Citi – Full Stack Developer", "Express Scripts – Full Stack Developer", "US Bank – Java Developer", "DXC Technologies – Java Developer"].map((role, idx) => (
          <div
            key={role}
            className="bg-slate-800 border border-slate-700 p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl stagger-card"
            style={{ animationDelay: `${idx * 0.15}s` }}
            tabIndex={0}
            aria-label={role}
          >
            {/* Icons removed */}
            <div>
              <h3 className="font-bold text-cyan-400">{role}</h3>
              <p className="text-cyan-200">
                {role === "Citi – Full Stack Developer" && "Built Java microservices for enterprise financial platforms, improved system reliability, and integrated LLM-based automation."}
                {role === "Express Scripts – Full Stack Developer" && "Developed healthcare backend services for claims processing and high-volume transaction systems."}
                {role === "US Bank – Java Developer" && "Built secure banking APIs and optimized database performance."}
                {role === "DXC Technologies – Java Developer" && "Modernized enterprise Java systems and improved CI/CD pipelines."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
