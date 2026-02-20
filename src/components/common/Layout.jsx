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
  width: min(100%, 560px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.5rem, 1.5vw, 0.9rem);
  border-radius: clamp(16px, 2vw, 24px);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.78));
  border: 1px solid rgba(255, 255, 255, 0.62);
  box-shadow: var(--shadow-soft);
  transition: transform var(--transition-base), box-shadow var(--transition-base);

  img {
    width: 100%;
    max-width: 520px;
    height: auto;
    object-fit: contain;
    border-radius: clamp(12px, 2vw, 18px);
    display: block;
    transition: transform var(--transition-base), filter var(--transition-base);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 34px rgba(20, 28, 45, 0.14);
  }

  &:hover img {
    transform: scale(1.025);
    filter: saturate(1.08);
  }

  @media screen and (min-width: 1060px) {
    img {
      max-height: 560px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    img {
      max-height: 460px;
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
      width: min(100%, 300px);
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
