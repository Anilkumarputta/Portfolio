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
    <section
      ref={ref}
      className={`relative py-20 px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="blog-heading"
    >
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 id="blog-heading" className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon">📝 Articles</h2>
        <div className="space-y-8">
          {[{
            title: "How I Built a Modern Web Calculator in JavaScript",
            desc: "Explains UI design, keyboard handling, and state logic.",
            link: "https://medium.com/your-link",
            linkText: "Read Article →",
            linkClass: "neon-link"
          }, {
            title: "How Spring Boot Microservices Work in Real Projects",
            desc: "Based on my enterprise experience.",
            link: "https://dev.to/your-link",
            linkText: "Read Article →",
            linkClass: "neon-link"
          }].map((article, idx) => (
            <div
              key={article.title}
              className="bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-xl p-8 flex items-center gap-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl glass-card group relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
              tabIndex={0}
              aria-label={article.title}
            >
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition" />
              <div>
                <h3 className="font-bold text-cyan-300 text-lg mb-2 drop-shadow-neon">{article.title}</h3>
                <p className="text-cyan-200 text-base leading-relaxed">{article.desc}</p>
                <a
                  href={article.link}
                  target="_blank"
                  className={article.linkClass}
                  rel="noopener noreferrer"
                >
                  {article.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
