import { useState } from "react";

export default function SubmitTestimonial() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    if (!formData.name || !formData.title || !formData.quote) {
      setStatus({ ok: false, msg: "Please fill in all fields." });
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
        setStatus({ ok: true, msg: "Thank you! Your testimonial has been submitted for review." });
        form.reset();
      } else {
        setStatus({ ok: false, msg: "There was an error. Please try again later." });
      }
    } catch (error) {
      // Log error for debugging
      if (import.meta.env.DEV) {
        console.error('Testimonial submission error:', error);
      }
      setStatus({ ok: false, msg: "There was an error. Please try again later." });
    }
  };

  return (
    <section
      id="submit-testimonial"
      className="relative py-16 px-4 transition-opacity duration-1000 text-center"
      aria-labelledby="submit-testimonial-heading"
    >
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10 w-full max-w-xl mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-cyan-500/40 shadow-xl p-8 glass-card">
        <h2 id="submit-testimonial-heading" className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon">Submit a Testimonial</h2>
        <form className="space-y-6" onSubmit={handleSubmit} aria-label="Submit testimonial form">
          <div>
            <label htmlFor="name" className="block text-cyan-200 text-left mb-1 font-medium tracking-wide">Your Name</label>
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
            <label htmlFor="title" className="block text-cyan-200 text-left mb-1 font-medium tracking-wide">Your Title/Company</label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-950/80 border border-cyan-500/30 text-white placeholder:text-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-cyan-400 transition shadow-input backdrop-blur-md"
              aria-label="Your title or company"
              autoComplete="organization"
            />
          </div>
          <div>
            <label htmlFor="quote" className="block text-cyan-200 text-left mb-1 font-medium tracking-wide">Testimonial</label>
            <textarea
              id="quote"
              name="quote"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-950/80 border border-cyan-500/30 text-white placeholder:text-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-cyan-400 transition shadow-input backdrop-blur-md resize-none"
              aria-label="Your testimonial"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 text-zinc-950 font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 border border-cyan-400/40 tracking-wide text-lg drop-shadow-neon"
            aria-label="Submit testimonial"
          >
            Submit
          </button>
          {status && (
            <div className={status.ok ? "text-emerald-400" : "text-red-400"} role="alert">{status.msg}</div>
          )}
        </form>
      </div>
    </section>
  );
}
