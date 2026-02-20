import styled from "styled-components";
import { colors } from "../../../../../styles/colors";

const SkillContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  gap: 0.55rem;
  border-radius: 16px;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base), background var(--transition-base);
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.72)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
  height: max-content;
  box-shadow: 0 12px 22px rgba(16, 27, 45, 0.1);
  overflow: hidden;
  isolation: isolate;
  will-change: transform;

  &::before {
    content: "";
    position: absolute;
    inset: auto -24% -42% auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(241, 69, 181, 0.22), rgba(241, 69, 181, 0));
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(130deg, rgba(47, 134, 255, 0.56), rgba(241, 69, 181, 0.5), rgba(255, 127, 63, 0.5));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.65;
    transition: opacity var(--transition-base);
  }

  &:hover {
    border-color: rgba(47, 134, 255, 0.32);
    box-shadow: 0 20px 34px rgba(16, 27, 45, 0.18);
    transform: translateY(-6px);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.76)),
      linear-gradient(160deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  }

  &:hover::after {
    opacity: 0.95;
  }

  @media screen and (min-width: 1024px) {
    width: calc(33.333% - 0.67rem);
  }

  @media screen and (min-width: 700px) and (max-width: 1023px) {
    width: calc(50% - 0.6rem);
  }

  @media screen and (max-width: 699px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const SkillNumber = styled.p`
  font-family: var(--font-code);
  font-weight: 600;
  font-size: 1.9rem;
  color: rgba(47, 134, 255, 0.76);
`;

const SkillTitle = styled.h3`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  max-width: 70%;
  word-wrap: break-word;
  color: var(--text-strong);
  transition: color var(--transition-base), transform var(--transition-base);

  ${SkillContainer}:hover & {
    color: #20468d;
    transform: translateX(2px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    font-size: 1.1rem;
  }
`;

const SkillText = styled.p`
  margin-top: 0.3rem;
  line-height: 1.62;
  font-size: 0.92rem;
  position: relative;
  z-index: 1;
`;

const SkillMarker = styled.div`
  position: absolute;
  top: 0.95rem;
  right: 0.95rem;
  width: 80%;
  height: 0.33rem;
  border-radius: 999px;
  background: ${(props) => {
    switch (props.number) {
      case 1:
        return `linear-gradient(90deg, ${colors.teal}, ${colors.blue})`;

      case 2:
        return `linear-gradient(90deg, ${colors.orange}, ${colors.pink})`;

      case 3:
        return `linear-gradient(90deg, ${colors.blue}, ${colors.teal})`;
      default:
        break;
    }
  }};

  @media screen and (max-width: 768px) {
    width: 36%;
  }
`;

export { SkillContainer, SkillNumber, SkillTitle, SkillText, SkillMarker };
