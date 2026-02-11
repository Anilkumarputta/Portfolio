import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999999;
  position: absolute;
  right: 1rem;
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
  padding: 1rem;
  transition: all 0.4s ease-in-out;
  background: rgba(23, 7, 43, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(23, 7, 43, 0.25);
  border-radius: 15px;
`;

const SideMenuNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 3rem;
`;

export { HamburgerMenuContainer, SideMenuContainer, SideMenuNavContainer };
