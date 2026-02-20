import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  background:
    linear-gradient(110deg, rgba(255, 255, 255, 0.82), rgba(248, 252, 255, 0.7)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
  border-bottom: 1px solid var(--glass-border);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0.72rem 0;
  box-shadow: 0 14px 30px rgba(16, 27, 45, 0.14);
  height: fit-content;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 100%;
    pointer-events: none;
    background:
      radial-gradient(circle at 10% 30%, rgba(47, 134, 255, 0.16), rgba(47, 134, 255, 0)),
      radial-gradient(circle at 90% 40%, rgba(241, 69, 181, 0.14), rgba(241, 69, 181, 0));
    opacity: 0.78;
  }

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

  @media screen and (max-width: 1024px) {
    width: min(1120px, 94%);
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavBrandLink = styled.span`
  display: flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.2rem 0.42rem;
  border: 1px solid transparent;
  transition: background-color var(--transition-base), transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
  position: relative;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.64);
    border-color: rgba(47, 134, 255, 0.26);
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(16, 27, 45, 0.12);
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.58)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 20px rgba(16, 27, 45, 0.12);
  font-family: var(--font-code);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: lowercase;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -38% -25% auto;
    height: 120%;
    background:
      radial-gradient(circle at 18% 42%, rgba(47, 134, 255, 0.2), rgba(47, 134, 255, 0)),
      radial-gradient(circle at 82% 36%, rgba(241, 69, 181, 0.16), rgba(241, 69, 181, 0));
    pointer-events: none;
    z-index: -1;
    transition: transform var(--transition-base);
  }

  &:hover::before {
    transform: translateY(5px);
  }

  @media screen and (max-width: 1200px) {
    gap: 1.2rem;
    padding: 0.36rem 0.72rem;
  }
`;

export { Nav, NavContainer, NavBrandLink, NavLinkContainer };
