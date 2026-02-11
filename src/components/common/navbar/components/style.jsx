import styled from "styled-components";
import { fonts } from "./../../../../styles/fonts";
import { colors } from "../../../../styles/colors";

const Nav = styled.nav`
  width: 100%;
  background-color: ${colors["deep-purple"]};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 83%;

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const NavBrand = styled.img`
  height: 30px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  font-family: ${fonts["source-code"]};
  font-size: 14px;
  font-weight: 600;
  text-transform: lowercase;
`;

export { Nav, NavContainer, NavBrand, NavLinkContainer };
