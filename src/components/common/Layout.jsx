import styled from "styled-components";

const sectionTones = {
  default: ["rgba(47, 134, 255, 0.74)", "rgba(25, 198, 186, 0.72)", "rgba(255, 127, 63, 0.72)"],
  sunrise: ["rgba(255, 127, 63, 0.78)", "rgba(241, 69, 181, 0.74)", "rgba(47, 134, 255, 0.72)"],
  ocean: ["rgba(25, 198, 186, 0.76)", "rgba(47, 134, 255, 0.72)", "rgba(128, 207, 86, 0.68)"],
  mint: ["rgba(25, 198, 186, 0.78)", "rgba(128, 207, 86, 0.72)", "rgba(47, 134, 255, 0.7)"],
  violet: ["rgba(241, 69, 181, 0.78)", "rgba(47, 134, 255, 0.72)", "rgba(255, 127, 63, 0.7)"],
  sunset: ["rgba(255, 127, 63, 0.78)", "rgba(241, 69, 181, 0.74)", "rgba(25, 198, 186, 0.7)"],
};

const getTone = (tone) => sectionTones[tone] || sectionTones.default;

const Layout = styled.div`
  color: var(--text-strong);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding-top: 6.3rem;
  position: relative;
`;

const SceneLayout = styled.div`
  ${({ $tone }) => {
    const [toneA, toneB, toneC] = getTone($tone);
    return `
      --tone-a: ${toneA};
      --tone-b: ${toneB};
      --tone-c: ${toneC};
    `;
  }}
  width: min(1120px, 92%);
  margin: 0 auto 2.5rem;
  padding: 2rem;
  min-height: calc(100vh - 110px);
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.62)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0));
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base), background var(--transition-base);
  animation: sceneLift 520ms ease both;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(124deg, var(--tone-a), var(--tone-b), var(--tone-c));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.82;
    z-index: 2;
    transition: opacity var(--transition-base), filter var(--transition-base);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 18% 24% auto;
    height: 230px;
    background:
      radial-gradient(circle at 20% 30%, var(--tone-a), rgba(47, 134, 255, 0)),
      radial-gradient(circle at 78% 42%, var(--tone-b), rgba(241, 69, 181, 0));
    filter: blur(28px);
    opacity: 0.18;
    pointer-events: none;
    z-index: 0;
    transition: opacity var(--transition-base), transform var(--transition-base);
  }

  &:hover {
    transform: translateY(-6px);
    border-color: var(--tone-a);
    box-shadow: 0 30px 54px rgba(16, 27, 45, 0.2);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.68)),
      linear-gradient(160deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  }

  &:hover::before {
    opacity: 1;
    filter: saturate(1.22);
  }

  &:hover::after {
    opacity: 0.4;
    transform: scale(1.05);
  }

  @keyframes sceneLift {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1060px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.4rem;
  }

  @media screen and (max-width: 1059px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    min-height: auto;
  }

  @media screen and (max-width: 768px) {
    gap: 1.15rem;
    padding: 1.15rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-evenly"};
  gap: ${({ gap }) => gap || "1rem"};
  width: ${({ width }) => width || "100%"};
  flex-wrap: wrap;
`;

const Column = styled(Row)`
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
`;

const RightSide = styled.div`
  flex-basis: 60%;
  width: 100%;
  order: 2;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1060px) {
    width: 100%;
  }
`;

const RightSideContent = styled.div`
  width: min(100%, 530px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.45rem, 1.3vw, 0.82rem);
  border-radius: clamp(16px, 2vw, 24px);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(242, 249, 255, 0.76)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-soft);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);

  &::before {
    content: "";
    position: absolute;
    inset: -28% -20% auto;
    height: 74%;
    background:
      radial-gradient(circle at 28% 44%, rgba(47, 134, 255, 0.32), rgba(47, 134, 255, 0)),
      radial-gradient(circle at 72% 36%, rgba(241, 69, 181, 0.28), rgba(241, 69, 181, 0));
    opacity: 0.84;
    z-index: 0;
    pointer-events: none;
    transition: transform var(--transition-base), opacity var(--transition-base);
  }

  &::after {
    content: "";
    position: absolute;
    right: -90px;
    bottom: -102px;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background:
      radial-gradient(circle, rgba(255, 127, 63, 0.38), rgba(255, 127, 63, 0)),
      radial-gradient(circle at 30% 35%, rgba(128, 207, 86, 0.2), rgba(128, 207, 86, 0));
    opacity: 0.78;
    z-index: 0;
    pointer-events: none;
    transition: transform var(--transition-base), opacity var(--transition-base);
  }

  img {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    border-radius: clamp(12px, 2vw, 18px);
    display: block;
    box-shadow: 0 16px 30px rgba(16, 27, 45, 0.16);
    transition: transform var(--transition-base), filter var(--transition-base), box-shadow var(--transition-base);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 40px rgba(16, 27, 45, 0.2);
    border-color: var(--glass-border-strong);
  }

  &:hover::before {
    transform: translateY(8px) scale(1.05);
    opacity: 0.96;
  }

  &:hover::after {
    transform: translate(-14px, -12px) scale(1.12);
    opacity: 0.9;
  }

  &:hover img {
    transform: scale(1.05) translateY(-2px);
    filter: saturate(1.2) contrast(1.04);
    box-shadow: 0 20px 32px rgba(16, 27, 45, 0.22);
  }

  @media screen and (min-width: 1060px) {
    img {
      max-height: 520px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    img {
      max-height: 420px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0.2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0.45rem;
    border-radius: 16px;

    img {
      width: min(100%, 280px);
    }
  }
`;

const LeftSide = styled.div`
  order: 1;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;

  .empresa {
    font-weight: 700;
    margin: 0;
    color: var(--brand-pink);
    text-decoration: none;
    transition: opacity 0.2s ease, color 0.2s ease;

    &:hover {
      opacity: 0.9;
      color: var(--brand-sky);
    }
  }

  @media screen and (min-width: 1279px) {
    flex-basis: 40%;
    max-width: 520px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export {
  Layout,
  SceneLayout,
  Row,
  Column,
  RightSide,
  RightSideContent,
  LeftSide,
};
