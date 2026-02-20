import { lazy, Suspense, useEffect, useState } from "react";
import { Layout } from "./components/common/Layout";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./scenes/home";
import { GlobalStyle } from "./GlobalStyle";
import { motion } from "framer-motion";
import Divider from "./components/common/Divider";
import Footer from "./components/common/Footer";
import Preloader from "./components/common/Preloader";
import ScrollProgress from "./components/common/ScrollProgress";
import SectionFallback from "./components/common/SectionFallback";
import { sectionRevealVariants } from "./utils/motion";

const About = lazy(() => import("./scenes/about"));
const Skills = lazy(() => import("./scenes/skills"));
const Projects = lazy(() => import("./scenes/projects"));
const Resume = lazy(() => import("./scenes/resume"));
const Contact = lazy(() => import("./scenes/contact"));

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [preloaderActive, setPreloaderActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderActive(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = preloaderActive ? "hidden" : "";
    document.body.style.height = preloaderActive ? "100vh" : "";

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [preloaderActive]);

  return (
    <Layout>
      <GlobalStyle />
      <Preloader active={preloaderActive} />
      <ScrollProgress activeSection={selectedPage} />
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={sectionRevealVariants}
        viewport={{ margin: "0px 0px -180px 0px", amount: 0.28 }}
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Home />
      </motion.div>

      <Divider />

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={sectionRevealVariants}
        viewport={{ margin: "0px 0px -180px 0px", amount: 0.28 }}
        onViewportEnter={() => setSelectedPage("about")}
      >
        <Suspense fallback={<SectionFallback label="Loading about section" />}>
          <About />
        </Suspense>
      </motion.div>

      <Divider />

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        variants={sectionRevealVariants}
        viewport={{ margin: "0px 0px -180px 0px", amount: 0.28 }}
        onViewportEnter={() => setSelectedPage("skills")}
      >
        <Suspense fallback={<SectionFallback label="Loading skills section" />}>
          <Skills />
        </Suspense>
      </motion.div>

      <Divider />

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        variants={sectionRevealVariants}
        viewport={{ margin: "0px 0px -180px 0px", amount: 0.28 }}
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Suspense fallback={<SectionFallback label="Loading projects section" />}>
          <Projects />
        </Suspense>
      </motion.div>

      <Divider />

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={sectionRevealVariants}
        viewport={{ margin: "0px 0px -180px 0px", amount: 0.28 }}
        onViewportEnter={() => setSelectedPage("resume")}
      >
        <Suspense fallback={<SectionFallback label="Loading resume section" />}>
          <Resume />
        </Suspense>
      </motion.div>

      <Divider />

      <motion.div
        custom={5}
        initial="hidden"
        whileInView="visible"
        variants={sectionRevealVariants}
        viewport={{ margin: "0px 0px -180px 0px", amount: 0.28 }}
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Suspense fallback={<SectionFallback label="Loading contact section" />}>
          <Contact />
        </Suspense>
      </motion.div>

      <Footer />
    </Layout>
  );
}

export default App;
