import styled from "styled-components";

const Layout = styled.div`
  color: var(--text-strong);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding-top: 6.3rem;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 92px;
    bottom: 22px;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      180deg,
      rgba(47, 134, 255, 0) 0%,
      rgba(47, 134, 255, 0.24) 12%,
      rgba(241, 69, 181, 0.2) 50%,
      rgba(255, 127, 63, 0.22) 88%,
      rgba(255, 127, 63, 0) 100%
    );
    pointer-events: none;
    z-index: -1;
    opacity: 0.7;
  }

  @media screen and (max-width: 1180px) {
    &::before {
      display: none;
    }
  }
`;

const SceneLayout = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto 2.5rem;
  padding: 2rem;
  min-height: calc(100vh - 110px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: var(--surface);
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  animation: sceneLift 520ms ease both;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(125deg, rgba(47, 134, 255, 0.34), rgba(25, 198, 186, 0.34), rgba(255, 127, 63, 0.34));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.9;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 42px rgba(20, 28, 45, 0.16);
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
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(242, 249, 255, 0.84));
  border: 1px solid rgba(25, 32, 48, 0.14);
  box-shadow: var(--shadow-soft);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: transform var(--transition-base), box-shadow var(--transition-base);

  &::before {
    content: "";
    position: absolute;
    inset: -26% -20% auto;
    height: 65%;
    background:
      radial-gradient(circle at 28% 44%, rgba(47, 134, 255, 0.26), rgba(47, 134, 255, 0)),
      radial-gradient(circle at 72% 36%, rgba(241, 69, 181, 0.22), rgba(241, 69, 181, 0));
    opacity: 0.78;
    z-index: 0;
    pointer-events: none;
    transition: transform var(--transition-base), opacity var(--transition-base);
  }

  &::after {
    content: "";
    position: absolute;
    right: -88px;
    bottom: -96px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 127, 63, 0.32), rgba(255, 127, 63, 0));
    opacity: 0.72;
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
    box-shadow: 0 14px 24px rgba(20, 28, 45, 0.12);
    transition: transform var(--transition-base), filter var(--transition-base), box-shadow var(--transition-base);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 36px rgba(20, 28, 45, 0.16);
    border-color: rgba(47, 134, 255, 0.28);
  }

  &:hover::before {
    transform: translateY(6px) scale(1.04);
    opacity: 0.92;
  }

  &:hover::after {
    transform: translate(-12px, -10px) scale(1.1);
    opacity: 0.86;
  }

  &:hover img {
    transform: scale(1.045) translateY(-2px);
    filter: saturate(1.14) contrast(1.03);
    box-shadow: 0 18px 28px rgba(20, 28, 45, 0.18);
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
