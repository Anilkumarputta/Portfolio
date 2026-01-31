import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../utils/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_ITEMS.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20" : "bg-transparent"
      }`}
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent hover:scale-105 transition-transform drop-shadow-neon tracking-wide"
          >
            Anil Kumar
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center" role="menubar" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`neon-link text-lg px-2 py-1 rounded transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-cyan-400 border-b-2 border-cyan-400 drop-shadow-neon" : "text-cyan-200 hover:text-fuchsia-400"
                }`}
                aria-label={item.label}
                tabIndex={0}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden neon-icon-btn focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl" role="menu" aria-label="Mobile navigation">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-xl neon-link text-lg transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-cyan-400 bg-zinc-900 drop-shadow-neon" : "text-cyan-200 hover:text-fuchsia-400 hover:bg-zinc-900"
                }`}
                aria-label={item.label}
                tabIndex={0}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
