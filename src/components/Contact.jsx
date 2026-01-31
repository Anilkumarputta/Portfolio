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
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ok: false, msg: "Please fill in all fields." });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email address." });
      return;
    }
    setStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/xykjvywe", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.ok) {
        setStatus({ ok: true, msg: "Thank you! Your message has been sent." });
        form.reset();
      } else {
        setStatus({ ok: false, msg: "There was an error. Please try again later." });
      }
    } catch {
      setStatus({ ok: false, msg: "There was an error. Please try again later." });
    }
  };

  return (
    <section id="contact" ref={ref} className={`bg-slate-800 text-white py-16 px-6 text-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">📞 Contact</h2>
      <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
        <div>
          <label htmlFor="name" className="block text-cyan-200 text-left mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-cyan-200 text-left mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Your email address"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-cyan-200 text-left mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Your message"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          aria-label="Send message"
        >
          Send
        </button>
        {status && (
          <div className={status.ok ? "text-emerald-400" : "text-red-400"} role="alert">{status.msg}</div>
        )}
      </form>
      <div className="mt-8 text-cyan-200">
        <p>
          <span className="font-semibold">Email:</span> <a href="mailto:axputta91@gmail.com" className="hover:text-cyan-400 transition">axputta91@gmail.com</a>
        </p>
        <p className="mt-2">
          <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">linkedin.com/in/anil-putta</a>
        </p>
        <p className="mt-2">
          <span className="font-semibold">GitHub:</span> <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">github.com/Anilkumarputta</a>
        </p>
      </div>
    </section>
  );
}
