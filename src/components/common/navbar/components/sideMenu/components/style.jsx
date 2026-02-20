import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999999;
  position: absolute;
  right: 1rem;
  color: var(--text-strong);
  font-size: 1.4rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow: 0 8px 18px rgba(20, 28, 45, 0.12);
  transition: transform var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 12px 20px rgba(20, 28, 45, 0.16);
  }
`;

const SideMenuContainer = styled.div`
  height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  right: 0;
  top: ${(props) => (props.active ? "0" : "-100vh")};
  padding: 1rem 1.25rem;
  transition: top 0.4s ease-in-out;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(245, 250, 255, 0.9));
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
`;

const SideMenuNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 4rem;
  font-size: 1rem;
`;

export { HamburgerMenuContainer, SideMenuContainer, SideMenuNavContainer };
