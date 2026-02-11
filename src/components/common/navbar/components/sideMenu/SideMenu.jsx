import { useState } from "react";
import Link from "../Link";
import {
  HamburgerMenuContainer,
  SideMenuContainer,
  SideMenuNavContainer,
} from "./components/style";
import Language from "../Language";

const SideMenu = ({ selectedPage, setSelectedPage, language, setLanguage }) => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleLanguage = () => {
    window.localStorage.setItem("language", language === "en" ? "pt" : "en");
    setLanguage(window.localStorage.getItem("language") || "en");
    setSideMenu(false);
  };

  const handlePages = (page) => {
    setSideMenu(false);
    setSelectedPage(page);
  };

  return (
    <>
      <HamburgerMenuContainer onClick={() => setSideMenu(!sideMenu)}>
        <i
          className={`fa-solid ${sideMenu ? "fa-circle-xmark" : "fa-bars"}`}
        ></i>
      </HamburgerMenuContainer>

      <SideMenuContainer active={sideMenu}>
        <SideMenuNavContainer>
          <Link
            page="home"
            label={language === "pt" ? "início" : "home"}
            selectedPage={selectedPage}
            setSelectedPage={() => handlePages("home")}
          />
          <Link
            page="about"
            label={language === "pt" ? "sobre" : "about"}
            selectedPage={selectedPage}
            setSelectedPage={() => handlePages("about")}
          />
          <Link
            page="skills"
            label={language === "pt" ? "habilidades" : "skills"}
            selectedPage={selectedPage}
            setSelectedPage={() => handlePages("skills")}
          />
          <Link
            page="projects"
            label={language === "pt" ? "projetos" : "projects"}
            selectedPage={selectedPage}
            setSelectedPage={() => handlePages("projects")}
          />
          <Link
            page="contact"
            label={language === "pt" ? "contato" : "contact"}
            selectedPage={selectedPage}
            setSelectedPage={() => handlePages("contact")}
          />
          <Language language={language} setLanguage={handleLanguage} />
        </SideMenuNavContainer>
      </SideMenuContainer>
    </>
  );
};

export default SideMenu;
