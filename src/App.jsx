import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import GithubStats from "./components/GithubStats";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GithubStats />
      <Contact />
      <footer className="text-center text-gray-400 py-6">
        © 2026 Anil Kumar. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;
