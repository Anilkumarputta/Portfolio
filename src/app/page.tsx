
import DarkModeToggle from "../components/DarkModeToggle";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";

function Footer() {
  return (
    <footer className="w-full py-4 bg-white/80 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center mt-8">
      <div className="flex gap-6 mb-1">
        <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          <img src="/github-mark.svg" alt="GitHub" className="w-5 h-5" />
          GitHub
        </a>
        <a href="http://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-700 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
      <span className="text-xs text-zinc-400">&copy; {new Date().getFullYear()} Anil Kumar Putta</span>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-zinc-900 dark:via-black dark:to-zinc-800 px-4 scroll-smooth">
      <DarkModeToggle />
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-8 py-16 w-full max-w-xl animate-fade-in">
        <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-gradient-border">
          <img
            src="/profile-placeholder.png"
            alt="Anil Kumar Putta profile"
            className="rounded-full shadow-lg w-32 h-32 object-cover border-4 border-white dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-700"
          />
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center">Hi, I'm Anil Kumar Putta</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 text-center max-w-md">
          Full Stack Java Developer with 5+ years of experience building scalable web apps and microservices for finance, healthcare, and telecom. I love creating clean, secure, and high-performance solutions.
        </p>
        <a
          href="#projects"
          className="mt-4 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          See My Work
        </a>
        <SocialLinks />
      </section>

      <div className="w-full flex justify-center my-8">
        <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-fade-in" />
      </div>
      {/* About Section */}
      <section id="about" className="w-full max-w-2xl bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-8 mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">About Me</h2>
        <p className="text-zinc-700 dark:text-zinc-200 mb-2">
          <span className="font-semibold">Email:</span> anilkumarputta01@gmail.com<br />
          <span className="font-semibold">Phone:</span> +1 (669) 232-3551<br />
          <span className="font-semibold">LinkedIn:</span> <a href="http://linkedin.com/in/anil-putta" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">anil-putta</a>
        </p>
        <p className="text-zinc-700 dark:text-zinc-200">
          I specialize in Java, Spring Boot, Angular, React, and cloud platforms like AWS and Azure. My experience covers backend, frontend, DevOps, and cloud deployments. I enjoy solving complex problems and delivering value to users.
        </p>
      </section>

      <div className="w-full flex justify-center my-8">
        <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-fade-in" />
      </div>
      {/* Projects Section */}
      <section id="projects" className="w-full max-w-2xl mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* SmartCalc */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="SmartCalc" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">SmartCalc</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A JavaScript calculator app with advanced features. Built with a focus on usability and clean code.</p>
            <a href="https://github.com/Anilkumarputta/SmartCalc" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
          {/* Project1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="Project1" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">Project1</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A web project using HTML. Demonstrates front-end skills and project structure.</p>
            <a href="https://github.com/Anilkumarputta/Project1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
          {/* calculator2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="calculator2" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">calculator2</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Extension for calculator MAUI example. Built in C#.</p>
            <a href="https://github.com/Anilkumarputta/calculator2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
          {/* calc-prj2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="calc-prj2" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">calc-prj2</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">A C# calculator project. Focuses on core calculation logic and UI.</p>
            <a href="https://github.com/Anilkumarputta/calc-prj2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
          {/* calc-proj3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="calc-proj3" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">calc-proj3</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Calculator project with history feature. Built in C#.</p>
            <a href="https://github.com/Anilkumarputta/calc-proj3" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
          {/* calc-history1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="calc-history1" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">calc-history1</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">C# calculator with history tracking. Demonstrates state management.</p>
            <a href="https://github.com/Anilkumarputta/calc-history1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
          {/* calculator-4 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <img src="/project-placeholder.png" alt="calculator-4" className="w-full h-32 object-cover rounded mb-3 bg-zinc-200 dark:bg-zinc-700" />
            <h3 className="text-lg font-semibold mb-1">calculator-4</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">Forked calculator project. Explores C# and open-source collaboration.</p>
            <a href="https://github.com/Anilkumarputta/calculator-4" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center my-8">
        <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-fade-in" />
      </div>
      {/* Contact Section */}
      <ContactForm />
      <Footer />
    </main>
  );
}
// ...existing code...
