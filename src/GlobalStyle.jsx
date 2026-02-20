import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/colors";
import { fonts } from "./styles/fonts";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-cream: #fff9ee;
    --bg-sand: #f7f1de;
    --surface: rgba(255, 255, 255, 0.72);
    --surface-strong: #101820;
    --brand-teal: #20b4aa;
    --brand-orange: #ff6e2d;
    --brand-sky: #2a7ca5;
    --text-strong: #14202a;
    --text-muted: #49606f;
    --text-soft: #5f7787;
    --line: rgba(16, 24, 32, 0.08);
    --shadow: 0 20px 45px rgba(16, 24, 32, 0.12);
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
    background:
      radial-gradient(circle at 10% 5%, rgba(32, 180, 170, 0.2), transparent 35%),
      radial-gradient(circle at 90% 20%, rgba(255, 110, 45, 0.2), transparent 32%),
      linear-gradient(180deg, var(--bg-sand) 0%, var(--bg-cream) 42%, #f0fbf9 100%);
    color: var(--text-strong);
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed;
    width: min(62vw, 680px);
    height: min(62vw, 680px);
    right: -180px;
    top: -220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(32, 180, 170, 0.25) 0%, rgba(32, 180, 170, 0.08) 35%, transparent 70%);
    z-index: -2;
    animation: floatA 11s ease-in-out infinite alternate;
  }

  body::after {
    content: "";
    position: fixed;
    width: min(48vw, 540px);
    height: min(48vw, 540px);
    left: -130px;
    bottom: -180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 110, 45, 0.26) 0%, rgba(255, 110, 45, 0.09) 42%, transparent 72%);
    z-index: -2;
    animation: floatB 10s ease-in-out infinite alternate;
  }

  p {
    color: var(--text-muted);
    line-height: 1.72;
  }

  @keyframes floatA {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-35px, 40px, 0);
    }
  }

  @keyframes floatB {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(40px, -30px, 0);
    }
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
    background: linear-gradient(180deg, ${colors.purple}, ${colors["pink-two"]});
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece{
    background-color: transparent;
  }
`;
