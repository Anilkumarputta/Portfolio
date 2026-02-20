import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

const ProgressTrack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 1600;
  background: rgba(255, 255, 255, 0.24);
  pointer-events: none;
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 100%;
  transform-origin: 0% 50%;
  background: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  box-shadow: 0 10px 16px rgba(47, 134, 255, 0.32);
`;

const SectionBadge = styled.div`
  position: fixed;
  top: 5.5rem;
  right: clamp(0.6rem, 2vw, 1.2rem);
  z-index: 1200;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.66)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
  box-shadow: 0 14px 24px rgba(16, 27, 45, 0.14);
  backdrop-filter: blur(10px) saturate(145%);
  -webkit-backdrop-filter: blur(10px) saturate(145%);
  padding: 0.36rem 0.78rem;
  display: inline-flex;
  align-items: center;
  gap: 0.44rem;
  pointer-events: none;

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    box-shadow: 0 0 0 4px rgba(47, 134, 255, 0.14);
    animation: dotPulse 1.8s ease-in-out infinite;
  }

  .label {
    font-family: var(--font-code);
    font-size: 0.66rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-strong);
  }

  @keyframes dotPulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 4px rgba(47, 134, 255, 0.14);
    }
    50% {
      transform: scale(1.13);
      box-shadow: 0 0 0 6px rgba(241, 69, 181, 0.14);
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ScrollProgress = ({ activeSection }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.32,
  });
  const formattedSection = activeSection
    ? `${activeSection.charAt(0).toUpperCase()}${activeSection.slice(1)}`
    : "Home";

  return (
    <>
      <ProgressTrack aria-hidden="true">
        <ProgressBar style={{ scaleX }} />
      </ProgressTrack>
      <SectionBadge aria-hidden="true">
        <span className="dot" />
        <span className="label">{formattedSection}</span>
      </SectionBadge>
    </>
  );
};

export default ScrollProgress;
