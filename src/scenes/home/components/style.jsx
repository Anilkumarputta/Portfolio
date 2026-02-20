import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: clamp(2.35rem, 1.75rem + 2.8vw, 3.85rem);
  line-height: 0.95;
  font-family: var(--font-display);
  text-align: center;
  font-weight: 800;
  letter-spacing: 0.04em;
  background: linear-gradient(108deg, var(--brand-sky) 0%, var(--brand-pink) 46%, var(--brand-orange) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  word-wrap: break-word;
  z-index: 10;
  text-shadow: 0 14px 22px rgba(47, 134, 255, 0.2);

  span {
    display: inline-block;
    transition: transform var(--transition-base), filter var(--transition-base);
  }

  .accent {
    letter-spacing: 0.06em;
  }

  span:hover {
    transform: translateY(-2px) scale(1.02);
    filter: brightness(1.08);
  }

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

const HeroSubtitle = styled(Subtitle)`
  font-size: clamp(0.95rem, 0.82rem + 0.4vw, 1.1rem);
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--text-muted);
  margin: 1rem 0 1.45rem;
  line-height: 1.65;
`;

const HeroCta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background: linear-gradient(92deg, var(--brand-sky) 0%, var(--brand-pink) 52%, var(--brand-orange) 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.82rem 2rem;
  border-radius: 999px;
  box-shadow: 0 12px 24px rgba(241, 69, 181, 0.24);
  text-decoration: none;
  margin: 0.5rem auto 0;
  letter-spacing: 0.04em;
  border: 1px solid rgba(255, 255, 255, 0.38);
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 16px 28px rgba(47, 134, 255, 0.26);
    filter: saturate(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.28) 48%, rgba(255, 255, 255, 0) 80%);
    transform: translateX(-130%);
    transition: transform 0.9s ease;
  }

  &:hover::after {
    transform: translateX(130%);
  }
`;

export { MainTitle, Subtitle, HeroSubtitle, HeroCta };
