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
    } catch (error) {
      // Log error for debugging
      if (import.meta.env.DEV) {
        console.error('Contact form submission error:', error);
      }
      setStatus({ ok: false, msg: "There was an error. Please try again later." });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Futuristic blurred neon background shapes */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[320px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-60 animate-blob" />
      </div>
      <div className="relative z-10 w-full max-w-xl mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-cyan-500/40 shadow-xl p-8 glass-card">
        <h2
          id="contact-heading"
          className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon"
        >
          <span role="img" aria-label="Contact">📞</span> Contact
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-cyan-200 text-left mb-1 font-medium tracking-wide">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-950/80 border border-cyan-500/30 text-white placeholder:text-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-cyan-400 transition shadow-input backdrop-blur-md"
              aria-label="Your name"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-cyan-200 text-left mb-1 font-medium tracking-wide">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-950/80 border border-cyan-500/30 text-white placeholder:text-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-cyan-400 transition shadow-input backdrop-blur-md"
              aria-label="Your email address"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-cyan-200 text-left mb-1 font-medium tracking-wide">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-950/80 border border-cyan-500/30 text-white placeholder:text-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-cyan-400 transition shadow-input backdrop-blur-md resize-none"
              aria-label="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 text-zinc-950 font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 border border-cyan-400/40 tracking-wide text-lg drop-shadow-neon"
            aria-label="Send message"
          >
            Send
          </button>
          {status && (
            <div className={status.ok ? "text-emerald-400" : "text-red-400"} role="alert">{status.msg}</div>
          )}
        </form>
        <div className="mt-10 text-cyan-200 text-sm text-left space-y-2">
          <p>
            <span className="font-semibold">Email:</span> <a href="mailto:axputta91@gmail.com" className="hover:text-fuchsia-400 underline underline-offset-2 transition">axputta91@gmail.com</a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 underline underline-offset-2 transition">linkedin.com/in/anil-putta</a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span> <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 underline underline-offset-2 transition">github.com/Anilkumarputta</a>
          </p>
        </div>
      </div>
    </section>
  );
}
