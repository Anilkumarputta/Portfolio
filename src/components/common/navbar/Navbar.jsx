import useMediaQuery from "./../../../hooks/useMediaQuery";
import Link from "./components/Link";
import {
  Nav,
  NavBrandLink,
  NavContainer,
  NavLinkContainer,
} from "./components/style";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SideMenu from "./components/sideMenu/SideMenu";
import BrandLogo from "../BrandLogo";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const mobileNav = !desktop;

  return (
    <Nav>
      <NavContainer>
        <AnchorLink
          href="#home"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <NavBrandLink>
            <BrandLogo showText={desktop} size={desktop ? 52 : 44} />
          </NavBrandLink>
        </AnchorLink>
        {desktop && (
          <NavLinkContainer>
            <Link page="home" label="home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="about" label="about" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="skills" label="skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="projects" label="projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="contact" label="contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </NavLinkContainer>
        )}
        {mobileNav && (
          <SideMenu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
