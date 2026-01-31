import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-900 text-white py-16 px-6" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">💬 Testimonials</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-slate-800 border border-slate-700 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <p className="text-cyan-200 italic mb-4">“{t.quote}”</p>
            <footer className="text-cyan-400 font-semibold">{t.name}</footer>
            <div className="text-cyan-300 text-sm">{t.title}</div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
