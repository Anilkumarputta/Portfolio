import styled from "styled-components";
import { fonts } from "../../../../../styles/fonts";
import { colors } from "../../../../../styles/colors";

const SkillContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  height: max-content;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    scale: 1.1;
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
  font-family: ${fonts["source-code"]};
  font-weight: 600;
  font-size: 40px;
`;

const SkillTitle = styled.h3`
  font-family: ${fonts["source-code"]};
  font-weight: 600;
  font-size: 1.8rem;
  max-width: 70%;
  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    font-size: 1.5rem;
  }
`;

const SkillMarker = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  width: 80%;
  height: 30px;
  background-color: ${(props) => {
    switch (props.number) {
      case 1:
        return colors.purple;

      case 2:
        return colors["pink-two"];

      case 3:
        return colors.blue;
      default:
        break;
    }
  }};

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export { SkillContainer, SkillNumber, SkillTitle, SkillMarker };
