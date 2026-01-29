// Simple contact form (no backend, uses mailto)
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex flex-col gap-4 bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-8 max-w-xl mx-auto mt-8"
      action={`mailto:anilkumarputta01@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0AFrom: ${email}`}
      method="POST"
      encType="text/plain"
    >
      <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">Contact Me</h2>
      <input
        className="rounded p-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="rounded p-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        className="rounded p-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        rows={4}
      />
      <button
        type="submit"
        className="mt-2 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
}
