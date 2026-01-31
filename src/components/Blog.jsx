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

export default function Blog() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <div ref={ref} className={`bg-slate-800 py-16 px-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold text-center mb-10 text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">📝 Articles</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {[{
          title: "How I Built a Modern Web Calculator in JavaScript",
          desc: "Explains UI design, keyboard handling, and state logic.",
          link: "https://medium.com/your-link",
          linkText: "Read Article →",
          linkClass: "text-cyan-400 hover:text-violet-400 transition"
        }, {
          title: "How Spring Boot Microservices Work in Real Projects",
          desc: "Based on my enterprise experience.",
          link: "https://dev.to/your-link",
          linkText: "Read Article →",
          linkClass: "text-cyan-400 hover:text-emerald-400 transition"
        }].map((article, idx) => (
          <div
            key={article.title}
            className="bg-slate-900 border border-slate-700 p-4 rounded shadow-lg flex items-center gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl stagger-card"
            style={{ animationDelay: `${idx * 0.15}s` }}
            tabIndex={0}
            aria-label={article.title}
          >
            {/* Icons removed */}
            <div>
              <h3 className="font-bold text-cyan-400">{article.title}</h3>
              <p className="text-cyan-200 text-sm">{article.desc}</p>
              <a
                href={article.link}
                target="_blank"
                className={article.linkClass}
              >
                {article.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
