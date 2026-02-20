import { useEffect, useState } from "react";
import { Layout } from "./components/common/Layout";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./scenes/home";
import About from "./scenes/about";
import { GlobalStyle } from "./GlobalStyle";
import { motion } from "framer-motion";
import Skills from "./scenes/skills/index";
import Projects from "./scenes/projects/index";
import Contact from "./scenes/contact/index";
import Divider from "./components/common/Divider";
import Footer from "./components/common/Footer";
import Resume from "./scenes/resume";
import Preloader from "./components/common/Preloader";

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
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <motion.div
        viewport={{ margin: "0px 0px -200px 0px", amount: 0.4 }}
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Home />
      </motion.div>

      <Divider />

      <motion.div
        viewport={{ margin: "0px 0px -200px 0px", amount: 0.4 }}
        onViewportEnter={() => setSelectedPage("about")}
      >
        <About />
      </motion.div>

      <Divider />

      <motion.div
        viewport={{ margin: "0px 0px -200px 0px", amount: 0.4 }}
        onViewportEnter={() => setSelectedPage("skills")}
      >
        <Skills />
      </motion.div>

      <Divider />

      <motion.div
        viewport={{ margin: "0px 0px -200px 0px", amount: 0.4 }}
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects />
      </motion.div>

      <Divider />

      <motion.div
        viewport={{ margin: "0px 0px -200px 0px", amount: 0.4 }}
        onViewportEnter={() => setSelectedPage("resume")}
      >
        <Resume />
      </motion.div>

      <Divider />

      <motion.div
        viewport={{ margin: "0px 0px -200px 0px", amount: 0.4 }}
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact />
      </motion.div>

      <Footer />
    </Layout>
  );
}

export default App;
