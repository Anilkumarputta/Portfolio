import styled from "styled-components";

const Shell = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto 2.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  min-height: 280px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.58)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(10px) saturate(145%);
  -webkit-backdrop-filter: blur(10px) saturate(145%);
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0.28) 50%,
      rgba(255, 255, 255, 0) 90%
    );
    animation: shimmer 1.6s linear infinite;
    pointer-events: none;
  }

  .label {
    font-family: var(--font-code);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-soft);
    z-index: 1;
  }

  @keyframes shimmer {
    from {
      transform: translateX(-130%);
    }
    to {
      transform: translateX(130%);
    }
  }
`;

const SectionFallback = ({ label = "Loading section" }) => {
  return (
    <Shell role="status" aria-live="polite">
      <span className="label">{label}</span>
    </Shell>
  );
};

export default SectionFallback;
