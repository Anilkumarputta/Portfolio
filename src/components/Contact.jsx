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

export default function Contact() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <div ref={ref} className={`bg-slate-800 text-white py-16 px-6 text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x" tabIndex={0} aria-label="Contact">📞 Contact</h2>
      <p className="text-cyan-200" tabIndex={0} aria-label="Email">axputta91@gmail.com</p>
      <p className="text-cyan-200" tabIndex={0} aria-label="LinkedIn">LinkedIn: linkedin.com/in/anil-putta</p>
      <p className="text-cyan-200" tabIndex={0} aria-label="GitHub">GitHub: github.com/Anilkumarputta</p>
    </div>
  );
}
