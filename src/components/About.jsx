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
    <div id="about" ref={ref} className={`bg-slate-900 text-white py-16 px-6 text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x stagger-card" style={{ animationDelay: '0.1s' }} tabIndex={0} aria-label="About Me">👨‍💻 About Me</h2>
      <p className="max-w-3xl mx-auto text-cyan-200 stagger-card" style={{ animationDelay: '0.25s' }} tabIndex={0} aria-label="About Me Description">
        I am a Full Stack Java Developer with over 5 years of experience building
        enterprise-grade backend systems and scalable microservices. My core
        expertise is in Java, Spring Boot, and RESTful API development, with
        strong experience working on cloud platforms like AWS and GCP.
        I have worked in healthcare and banking domains, delivering secure,
        high-availability platforms, and I actively use AI-assisted development
        tools to improve productivity and code quality.
      </p>
    </div>
  );
}
