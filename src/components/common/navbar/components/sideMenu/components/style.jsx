import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999999;
  position: relative;
  color: var(--text-strong);
  font-size: 1.4rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(245, 250, 255, 0.68)),
    linear-gradient(165deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 20px rgba(16, 27, 45, 0.14);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);

  &:hover {
    transform: scale(1.06);
    border-color: rgba(47, 134, 255, 0.34);
    box-shadow: 0 14px 24px rgba(16, 27, 45, 0.2);
  }
`;

const SideMenuContainer = styled.div`
  height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  inset: 0;
  transform: translateY(${(props) => (props.active ? "0" : "-100%")});
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  padding: 1rem 1.25rem 2rem;
  transition: transform 0.35s ease, opacity 0.35s ease;
  background:
    radial-gradient(circle at 8% 10%, rgba(47, 134, 255, 0.18), rgba(47, 134, 255, 0)),
    radial-gradient(circle at 88% 18%, rgba(241, 69, 181, 0.16), rgba(241, 69, 181, 0)),
    linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(245, 250, 255, 0.86));
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  backdrop-filter: blur(16px) saturate(150%);
  border: 1px solid var(--glass-border);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
  z-index: 1400;
`;

const SideMenuNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: flex-start;
  margin: 5.2rem auto 0;
  width: min(92vw, 520px);
  padding: 1.2rem 1rem;
  border-radius: 16px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.66)),
    linear-gradient(165deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  box-shadow: 0 16px 30px rgba(16, 27, 45, 0.14);
  font-size: 1rem;
`;

export { HamburgerMenuContainer, SideMenuContainer, SideMenuNavContainer };
