import styled, { keyframes } from "styled-components";
import BrandLogo from "./BrandLogo";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-130%);
  }
  100% {
    transform: translateX(130%);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.02);
    opacity: 1;
  }
`;

const PreloaderOverlay = styled.div.attrs({
  id: "preloader",
})`
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background:
    radial-gradient(circle at 16% 18%, rgba(47, 134, 255, 0.2), rgba(47, 134, 255, 0)),
    radial-gradient(circle at 84% 20%, rgba(241, 69, 181, 0.2), rgba(241, 69, 181, 0)),
    linear-gradient(132deg, #121a2d, #12263e 48%, #2b1f46);
`;

const PreloaderCard = styled.div`
  width: min(420px, 92vw);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06)),
    linear-gradient(165deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  box-shadow: 0 24px 48px rgba(6, 10, 18, 0.44);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  padding: 1.3rem 1.2rem 1.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  animation: ${pulse} 1.8s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(128deg, rgba(47, 134, 255, 0.72), rgba(241, 69, 181, 0.68), rgba(255, 127, 63, 0.66));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.95;
  }
`;

const LoaderRing = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 3px solid rgba(255, 255, 255, 0.22);
  border-top-color: rgba(255, 127, 63, 0.95);
  border-right-color: rgba(47, 134, 255, 0.95);
  animation: ${spin} 1s linear infinite;
`;

const LoaderTrack = styled.div`
  width: 100%;
  max-width: 280px;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.18);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(47, 134, 255, 0.9), rgba(241, 69, 181, 0.88), rgba(255, 127, 63, 0.9));
    animation: ${shimmer} 1.2s ease-in-out infinite;
  }
`;

const LoaderText = styled.p`
  font-family: var(--font-code);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(247, 241, 222, 0.92);
`;

const Preloader = ({ active }) => {
  if (!active) {
    return null;
  }

  return (
    <PreloaderOverlay role="status" aria-live="polite" aria-label="Loading portfolio">
      <PreloaderCard>
        <BrandLogo showText size={56} light />
        <LoaderRing />
        <LoaderTrack />
        <LoaderText>Loading portfolio</LoaderText>
      </PreloaderCard>
    </PreloaderOverlay>
  );
};

export default Preloader;
