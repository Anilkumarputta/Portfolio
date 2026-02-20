import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  background: rgba(247, 241, 222, 0.86);
  border-bottom: 1px solid rgba(16, 24, 32, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0.75rem 0;
  box-shadow: 0 8px 24px rgba(16, 24, 32, 0.08);
  height: fit-content;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: min(1120px, 92%);

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavBrandLink = styled.span`
  display: flex;
  align-items: center;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;
  font-family: var(--font-code);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: lowercase;
`;

export { Nav, NavContainer, NavBrandLink, NavLinkContainer };
