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

export default function About() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-20 px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="about-heading"
    >
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-cyan-500/40 shadow-xl p-10 glass-card text-center">
        <h2
          id="about-heading"
          className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon"
          style={{ animationDelay: '0.1s' }}
        >
          <span role="img" aria-label="Developer">👨‍💻</span> About Me
        </h2>
        <div className="max-w-2xl mx-auto text-cyan-200 text-lg leading-relaxed space-y-4" style={{ animationDelay: '0.25s' }}>
          <p>
            I am a <span className="font-bold text-cyan-300">Full Stack Java Developer</span> with 5+ years of experience building enterprise-grade backend systems and scalable microservices.
          </p>
          <p>
            <span className="font-bold text-fuchsia-300">AI Experience:</span> I design and deploy AI-powered features using <span className="font-semibold text-cyan-200">GPT-4</span>, OpenAI API, and LangChain. I have led prompt engineering and integrated LLMs into production systems for automation and analytics.
          </p>
          <p>
            <span className="font-bold text-fuchsia-300">Recent Achievements:</span> Successfully delivered LLM-based automation for financial platforms, improved developer productivity with AI-assisted tools, and contributed to open-source AI projects.
          </p>
          <p>
            My core expertise is in <span className="font-semibold text-cyan-200">Java, Spring Boot, RESTful APIs</span>, and cloud platforms (AWS, GCP). I have worked in healthcare and banking domains, delivering secure, high-availability platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
