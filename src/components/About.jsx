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
    <section id="about" ref={ref} className={`bg-slate-900 text-white py-16 px-6 text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x stagger-card" style={{ animationDelay: '0.1s' }}>👨‍💻 About Me</h2>
      <p className="max-w-3xl mx-auto text-cyan-200 stagger-card" style={{ animationDelay: '0.25s' }}>
        I am a Full Stack Java Developer with 5+ years of experience building enterprise-grade backend systems and scalable microservices.<br />
        <b>AI Experience:</b> I design and deploy AI-powered features using GPT-4, OpenAI API, and LangChain. I have led prompt engineering and integrated LLMs into production systems for automation and analytics.<br />
        <b>Recent Achievements:</b> Successfully delivered LLM-based automation for financial platforms, improved developer productivity with AI-assisted tools, and contributed to open-source AI projects.<br />
        My core expertise is in Java, Spring Boot, RESTful APIs, and cloud platforms (AWS, GCP). I have worked in healthcare and banking domains, delivering secure, high-availability platforms.
      </p>
    </section>
  );
}
