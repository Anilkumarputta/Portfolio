import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: clamp(2.6rem, 1.9rem + 3vw, 4.2rem);
  line-height: 0.95;
  font-family: var(--font-display);
  text-align: center;
  font-weight: 800;
  letter-spacing: 0.03em;
  background: linear-gradient(110deg, #101820 0%, #1f4f63 38%, #ff6e2d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  word-wrap: break-word;
  z-index: 10;

  @media screen and (max-width: 768px) {
    margin-top: 0.6rem;
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-code);
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-soft);
  text-align: center;
  margin-top: 1rem;
`;

export { MainTitle, Subtitle };
