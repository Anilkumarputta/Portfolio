import styled from "styled-components";

const HeroGreeting = styled.p`
  width: max-content;
  margin: 0 auto 0.72rem;
  padding: 0.38rem 0.72rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.66)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  color: var(--text-soft);
  font-family: var(--font-code);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 10px 18px rgba(16, 27, 45, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const WaveIcon = styled.i`
  display: inline-flex;
  color: var(--brand-orange);
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

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
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.6)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 0.72rem 0.82rem;
  box-shadow: 0 10px 18px rgba(16, 27, 45, 0.1);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
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
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 18px 30px rgba(47, 134, 255, 0.3);
    filter: saturate(1.14);
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

export { HeroGreeting, WaveIcon, MainTitle, Subtitle, HeroSubtitle, HeroCta };
