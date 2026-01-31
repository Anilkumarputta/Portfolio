
import { testimonials } from "../data/testimonials";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const intervalRef = useRef();

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [paused, total]);

  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4"
      aria-labelledby="testimonials-heading"
    >
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 id="testimonials-heading" className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon">4ac Testimonials</h2>
        <div 
          className="flex flex-col items-center"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onFocus={handlePause}
          onBlur={handleResume}
          tabIndex={0}
        >
          <blockquote
            className="bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center glass-card group relative overflow-hidden transition-transform duration-500 animate-fade-in"
            key={index}
            aria-live="polite"
          >
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition" />
            <p className="text-cyan-200 italic mb-4 text-lg leading-relaxed">“{testimonials[index].quote}”</p>
            <footer className="text-cyan-300 font-semibold text-base drop-shadow-neon">{testimonials[index].name}</footer>
            <div className="text-cyan-400 text-sm">{testimonials[index].title}</div>
          </blockquote>
          <div className="flex gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full bg-zinc-900/80 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-800/40 hover:text-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full bg-zinc-900/80 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-800/40 hover:text-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
            >
              &#8594;
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-fuchsia-400 shadow-neon' : 'bg-cyan-900 border border-cyan-500/30'} transition`}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIndex(i); }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
