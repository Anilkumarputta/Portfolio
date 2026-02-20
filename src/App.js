import { Fragment, useCallback, useEffect, useState } from "react";
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

const sectionViewport = { margin: "0px 0px -200px 0px", amount: 0.4 };

const sections = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "resume", Component: Resume },
  { id: "contact", Component: Contact },
];

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [preloaderActive, setPreloaderActive] = useState(true);

  const handleSectionEnter = useCallback((page) => {
    setSelectedPage((previous) => (previous === page ? previous : page));
  }, []);

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
      {sections.map(({ id, Component }, index) => (
        <Fragment key={id}>
          <motion.div
            viewport={sectionViewport}
            onViewportEnter={() => handleSectionEnter(id)}
          >
            <Component />
          </motion.div>
          {index < sections.length - 1 ? <Divider /> : null}
        </Fragment>
      ))}

      <Footer />
    </Layout>
  );
}

export default App;
