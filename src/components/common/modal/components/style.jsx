import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 24, 32, 0.45);
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background-color: #fffdfa;
  border-radius: 18px;
  border: 1px solid rgba(16, 24, 32, 0.08);
  padding: 1.3rem;
  width: 60%;
  position: relative;
  max-width: 1024px;
  animation: slide-in-top 0.35s ease both;
  box-shadow: 0 26px 44px rgba(16, 24, 32, 0.24);

  @keyframes slide-in-top {
    0% {
      transform: translateY(-24px);
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
  top: 0.9rem;
  right: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--brand-orange);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--text-strong);
`;

const ModalTitle = styled.h1`
  font-size: 1.45rem;
  font-family: var(--font-display);
  font-weight: 700;
  position: relative;
  width: max-content;
  padding: 0 0.5rem;
  margin-bottom: 1rem;

  .divider {
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: translateX(0%);
    width: 100%;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--brand-teal), var(--brand-orange));
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
  font-weight: 500;
  color: var(--text-muted);
`;

export {
  ModalOverlay,
  ModalContainer,
  ModalClose,
  ModalBody,
  ModalTitle,
  ModalText,
};
