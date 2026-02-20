import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.82), rgba(248, 252, 255, 0.74));
  border-bottom: 1px solid rgba(255, 255, 255, 0.56);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0.75rem 0;
  box-shadow: 0 12px 24px rgba(20, 28, 45, 0.1);
  height: fit-content;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 2px;
    background: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    opacity: 0.9;
  }
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
  border-radius: 999px;
  padding: 0.2rem 0.35rem;
  transition: background-color var(--transition-base), transform var(--transition-base);

  &:hover {
    background-color: rgba(255, 255, 255, 0.54);
    transform: translateY(-1px);
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.68);
  box-shadow: 0 8px 18px rgba(20, 28, 45, 0.08);
  font-family: var(--font-code);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: lowercase;
`;

export { Nav, NavContainer, NavBrandLink, NavLinkContainer };
