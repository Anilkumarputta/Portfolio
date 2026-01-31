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

export default function Hero() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <div id="hero" ref={ref} className={`min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Avatar image removed */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
        👋 Anil Kumar
      </h1>
      <h2 className="text-xl mt-2 text-cyan-400">
        Java Full Stack Developer
      </h2>

      <p className="mt-4 max-w-xl text-cyan-200">
        4+ years of experience building backend systems using Java & Spring Boot,
        and modern web apps using React & Angular.
      </p>

      <div className="mt-6 space-x-4">
          <a href="#projects" className="inline-block bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform duration-200">
            🚀 View Projects
          </a>
          <a href="/resume.pdf" className="inline-block border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-bold hover:bg-cyan-500 hover:text-black active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform duration-200">
            📄 Download Resume
          </a>
      </div>
    </div>
  );
}
