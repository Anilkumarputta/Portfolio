import styled from "styled-components";

const Layout = styled.div`
  color: var(--text-strong);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding-top: 6.3rem;
`;

const SceneLayout = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto 2.5rem;
  padding: 2rem;
  min-height: calc(100vh - 110px);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media screen and (min-width: 1060px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.4rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 1.3rem;
    min-height: auto;
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
  position: relative;
  width: min(100%, 560px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.5rem, 1.6vw, 0.95rem);
  border-radius: clamp(20px, 3vw, 34px);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.56));
  border: 1px solid rgba(16, 24, 32, 0.1);
  box-shadow: 0 18px 38px rgba(16, 24, 32, 0.14);
  overflow: hidden;
  transition: transform 0.32s ease, box-shadow 0.32s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -34% -24% auto;
    height: 54%;
    background: radial-gradient(circle, rgba(32, 180, 170, 0.36), rgba(32, 180, 170, 0));
    filter: blur(12px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: auto -16% -30% -26%;
    height: 50%;
    background: radial-gradient(circle, rgba(255, 110, 45, 0.3), rgba(255, 110, 45, 0));
    filter: blur(12px);
    pointer-events: none;
  }

  img {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 520px;
    height: auto;
    object-fit: contain;
    border-radius: clamp(14px, 2vw, 24px);
    border: 1px solid rgba(255, 255, 255, 0.72);
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
    box-shadow: 0 16px 30px rgba(16, 24, 32, 0.18);
    transition: transform 0.35s ease, filter 0.35s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 46px rgba(16, 24, 32, 0.18);
  }

  &:hover img {
    transform: scale(1.02);
    filter: saturate(1.06);
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
    margin-top: 0.4rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
    border-radius: 20px;

    img {
      width: min(100%, 320px);
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
    color: var(--brand-orange);
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.75;
    }
  }

  @media screen and (min-width: 1279px) {
    flex-basis: 40%;
    max-width: 520px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
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
