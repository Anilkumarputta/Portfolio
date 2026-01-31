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
    } catch {
      setStatus({ ok: false, msg: "There was an error. Please try again later." });
    }
  };

  return (
    <section id="submit-testimonial" className="bg-slate-800 text-white py-12 px-6 text-center transition-opacity duration-1000" aria-labelledby="submit-testimonial-heading">
      <h2 id="submit-testimonial-heading" className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">Submit a Testimonial</h2>
      <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit} aria-label="Submit testimonial form">
        <div>
          <label htmlFor="name" className="block text-cyan-200 text-left mb-1">Your Name</label>
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
          <label htmlFor="title" className="block text-cyan-200 text-left mb-1">Your Title/Company</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Your title or company"
          />
        </div>
        <div>
          <label htmlFor="quote" className="block text-cyan-200 text-left mb-1">Testimonial</label>
          <textarea
            id="quote"
            name="quote"
            rows={4}
            required
            className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Your testimonial"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          aria-label="Submit testimonial"
        >
          Submit
        </button>
        {status && (
          <div className={status.ok ? "text-emerald-400" : "text-red-400"} role="alert">{status.msg}</div>
        )}
      </form>
    </section>
  );
}
