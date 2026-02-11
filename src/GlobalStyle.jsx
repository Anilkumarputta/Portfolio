import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/colors";
import { fonts } from "./styles/fonts";

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: ${fonts.poppins};
}

::-webkit-scrollbar{
  width: 5px;
  background-color: ${colors["deep-purple"]};
}

::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${colors.pink}; 
  border-radius: 10px;
}

::-webkit-scrollbar-track-piece{
  background-color: transparent;
}

`;
