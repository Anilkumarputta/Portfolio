// Simple dark mode toggle button
"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="fixed top-4 right-4 z-50 rounded-full bg-zinc-200 dark:bg-zinc-800 p-2 shadow hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
}
