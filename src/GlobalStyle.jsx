import { createGlobalStyle } from "styled-components";
import { fonts } from "./styles/fonts";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-cream: #fff9ee;
    --bg-sand: #f7f1de;
    --surface: rgba(255, 255, 255, 0.9);
    --surface-strong: #101820;
    --brand-teal: #20b4aa;
    --brand-orange: #ff6e2d;
    --brand-sky: #2a7ca5;
    --text-strong: #14202a;
    --text-muted: #49606f;
    --text-soft: #5f7787;
    --line: rgba(16, 24, 32, 0.11);
    --shadow: 0 14px 30px rgba(16, 24, 32, 0.09);
    --radius-lg: 24px;
    --radius-md: 14px;
    --font-display: ${fonts.poppins};
    --font-body: ${fonts.montserrat};
    --font-code: ${fonts["source-code"]};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: var(--font-body);
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    background: linear-gradient(180deg, #f7f2e8 0%, #fffaf1 50%, #f4fbf9 100%);
    color: var(--text-strong);
    overflow-x: hidden;
  }

  p {
    color: var(--text-muted);
    line-height: 1.72;
  }

  ::-webkit-scrollbar{
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: rgba(16, 24, 32, 0.08);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--brand-teal), var(--brand-orange));
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece{
    background-color: transparent;
  }
`;
