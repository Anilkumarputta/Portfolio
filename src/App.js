import { useEffect, useState } from "react";
import { Layout } from "./components/common/Layout";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./scenes/home";
import About from "./scenes/about";
import { GlobalStyle } from "./GlobalStyle";
import { motion } from 'framer-motion';
import Skills from './scenes/skills/index';
import Projects from './scenes/projects/index';
import Contact from './scenes/contact/index';
import Divider from "./components/common/Divider";

function App() {
  const [language, setLanguage] = useState("en");
  const [selectedPage, setSelectedPage] = useState(window.localStorage.getItem("language") || "en");

  useEffect(() => {
    setLanguage(window.localStorage.getItem("language") || "en");
  }, []);

  const changeLanguage = () => {
    window.localStorage.setItem("language", language === "en" ? "pt" : "en");
    setLanguage(window.localStorage.getItem("language") || "en");
  }

  return (
    <Layout>
      <GlobalStyle />
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        language={language}
        setLanguage={changeLanguage}
      />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Home
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>

      <Divider />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("about")}
      >
        <About
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>

      <Divider />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("skills")}
      >
        <Skills
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>

      <Divider />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>

      <Divider />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact
          setSelectedPage={setSelectedPage}
          language={language}
          selectedPage={selectedPage}
        />
      </motion.div>

    </Layout>
  );
}

export default App;
