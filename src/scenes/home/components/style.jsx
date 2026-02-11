import styled from "styled-components";
import { fonts } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";

const MainTitle = styled.h1`
  font-size: 60px;
  line-height: 60px;
  font-family: ${fonts.poppins};
  color: ${colors.purple};
  text-align: center;
  font-weight: 400;
  word-wrap: break-word;
  z-index: 10;

  @media screen and (min-width: 1279px) {
    text-align: start;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
    margin-top: 1rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${fonts["source-code"]};
  font-size: 14px;
  text-align: center;
  margin-top: 25px;

  @media screen and (min-width: 1279px) {
    text-align: start;
  }
`;

export { MainTitle, Subtitle };
