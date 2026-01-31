
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import GithubStats from "./components/GithubStats";
import Testimonials from "./components/Testimonials";
import SubmitTestimonial from "./components/SubmitTestimonial";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      {loading && <Loader />}
      <Navigation />
      <main id="main-content" style={{ opacity: loading ? 0.2 : 1, pointerEvents: loading ? 'none' : 'auto', filter: loading ? 'blur(2px)' : 'none', transition: 'opacity 0.5s, filter 0.5s' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <SubmitTestimonial />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
