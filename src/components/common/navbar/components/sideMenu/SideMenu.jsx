import { useState } from "react";
import Link from "../Link";
import {
  HamburgerMenuContainer,
  SideMenuContainer,
  SideMenuNavContainer,
} from "./components/style";

const SideMenu = ({ selectedPage, setSelectedPage }) => {
  const [sideMenu, setSideMenu] = useState(false);

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
          <Link page="home" label="home" selectedPage={selectedPage} setSelectedPage={() => handlePages("home")} />
          <Link page="about" label="about" selectedPage={selectedPage} setSelectedPage={() => handlePages("about")} />
          <Link page="skills" label="skills" selectedPage={selectedPage} setSelectedPage={() => handlePages("skills")} />
          <Link page="projects" label="projects" selectedPage={selectedPage} setSelectedPage={() => handlePages("projects")} />
          <Link page="contact" label="contact" selectedPage={selectedPage} setSelectedPage={() => handlePages("contact")} />
        </SideMenuNavContainer>
      </SideMenuContainer>
    </>
  );
};

export default SideMenu;
