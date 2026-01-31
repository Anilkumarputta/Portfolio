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
    <section id="contact" ref={ref} className={`bg-slate-800 text-white py-16 px-6 text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">📞 Contact</h2>
      <address className="not-italic">
        <p className="text-cyan-200">
          <a href="mailto:axputta91@gmail.com" className="hover:text-cyan-400 transition">axputta91@gmail.com</a>
        </p>
        <p className="text-cyan-200 mt-2">
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a href="https://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">linkedin.com/in/anil-putta</a>
        </p>
        <p className="text-cyan-200 mt-2">
          <span className="font-semibold">GitHub:</span>{" "}
          <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">github.com/Anilkumarputta</a>
        </p>
      </address>
    </section>
  );
}
