import styled from "styled-components";
import { colors } from "../../../../styles/colors";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 60%;
  position: relative;
  max-width: 1024px;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ModalClose = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  color: ${colors["pink-two"]};
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
`;

const ModalTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  width: max-content;
  padding: 0 10px;
  margin-bottom: 1rem;

  .divider {
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: translateX(20%);
    width: 100%;
    height: 2px;
    background: linear-gradient(
      64.5deg,
      rgba(245, 116, 185, 1) 14.7%,
      rgba(89, 97, 223, 1) 88.7%
    );
  }

  @media screen and (max-width: 768px) {
    .divider {
      transform: translateX(0%);
      bottom: -5px;
    }
  }
`;

const ModalText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: black;
`;

export {
  ModalOverlay,
  ModalContainer,
  ModalClose,
  ModalBody,
  ModalTitle,
  ModalText,
};
