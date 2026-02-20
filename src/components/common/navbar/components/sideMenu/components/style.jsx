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
  transition: all 0.4s ease-in-out;
  background: rgba(247, 241, 222, 0.96);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(16, 24, 32, 0.08);
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
