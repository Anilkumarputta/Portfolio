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
  border-radius: 14px;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  border: 1px solid rgba(255, 255, 255, 0.68);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.74));
  height: max-content;
  box-shadow: 0 10px 22px rgba(20, 28, 45, 0.1);
  overflow: hidden;

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

  &:hover {
    border-color: rgba(47, 134, 255, 0.28);
    box-shadow: 0 16px 28px rgba(20, 28, 45, 0.16);
    transform: translateY(-4px);
  }

  @media screen and (min-width: 1279px) {
    width: 30%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const SkillNumber = styled.p`
  font-family: var(--font-code);
  font-weight: 600;
  font-size: 1.9rem;
  color: rgba(47, 134, 255, 0.68);
`;

const SkillTitle = styled.h3`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  max-width: 70%;
  word-wrap: break-word;
  color: var(--text-strong);

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    font-size: 1.1rem;
  }
`;

const SkillMarker = styled.div`
  position: absolute;
  top: 0.95rem;
  right: 0.95rem;
  width: 80%;
  height: 0.33rem;
  border-radius: 999px;
  background-color: ${(props) => {
    switch (props.number) {
      case 1:
        return colors.teal;

      case 2:
        return colors.orange;

      case 3:
        return colors.blue;
      default:
        break;
    }
  }};

  @media screen and (max-width: 768px) {
    width: 36%;
  }
`;

export { SkillContainer, SkillNumber, SkillTitle, SkillMarker };
