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

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Navigation />
      <main id="main-content">
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
