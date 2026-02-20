import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 12% 16%, rgba(47, 134, 255, 0.26), rgba(47, 134, 255, 0)),
    radial-gradient(circle at 88% 12%, rgba(241, 69, 181, 0.22), rgba(241, 69, 181, 0)),
    rgba(16, 24, 32, 0.62);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 1rem;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(246, 251, 255, 0.78)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  padding: 1.3rem;
  width: min(760px, 96%);
  position: relative;
  max-height: calc(100vh - 2.8rem);
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
  animation: slide-in-top 0.35s ease both;
  box-shadow: 0 32px 52px rgba(16, 27, 45, 0.28);
  backdrop-filter: blur(14px) saturate(155%);
  -webkit-backdrop-filter: blur(14px) saturate(155%);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: linear-gradient(180deg, var(--brand-sky), var(--brand-pink));
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(128deg, rgba(47, 134, 255, 0.58), rgba(241, 69, 181, 0.52), rgba(255, 127, 63, 0.52));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.84;
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
  font-size: 1rem;
  cursor: pointer;
  color: var(--brand-pink);
  transition: transform var(--transition-base), color var(--transition-base), background var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 14px rgba(16, 27, 45, 0.12);

  &:hover {
    transform: scale(1.06);
    color: #fff;
    border-color: transparent;
    background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    box-shadow: 0 12px 18px rgba(16, 27, 45, 0.2);
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
    box-shadow: 0 8px 14px rgba(47, 134, 255, 0.24);
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
