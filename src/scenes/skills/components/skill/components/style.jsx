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
  transition: all 0.3s ease;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.56);
  height: max-content;

  &:hover {
    border-color: rgba(32, 180, 170, 0.28);
    box-shadow: 0 14px 26px rgba(16, 24, 32, 0.12);
    transform: translateY(-3px);
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
  color: var(--text-soft);
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
