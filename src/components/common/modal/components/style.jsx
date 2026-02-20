import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 24, 32, 0.55);
  z-index: 1200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1.4rem 1rem;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(246, 251, 255, 0.88));
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  padding: 1.3rem;
  width: min(760px, 96%);
  position: relative;
  max-height: calc(100vh - 2.8rem);
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
  animation: slide-in-top 0.35s ease both;
  box-shadow: 0 30px 46px rgba(20, 28, 45, 0.25);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: linear-gradient(180deg, var(--brand-sky), var(--brand-pink));
  }

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
    width: 100%;
    max-height: calc(100vh - 2.2rem);
    padding: 1.2rem;
  }
`;

const ModalClose = styled.span`
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--brand-pink);
  transition: transform var(--transition-base), color var(--transition-base);

  &:hover {
    transform: scale(1.1);
    color: var(--brand-sky);
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--text-strong);
  padding-top: 0.2rem;
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
    background: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
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
