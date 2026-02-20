import { createGlobalStyle } from "styled-components";
import { fonts } from "./styles/fonts";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-1: #fdf4e7;
    --bg-2: #f3f9ff;
    --bg-3: #f2fffa;
    --surface: rgba(255, 255, 255, 0.86);
    --surface-elevated: rgba(255, 255, 255, 0.94);
    --surface-strong: #131927;
    --brand-teal: #19c6ba;
    --brand-orange: #ff7f3f;
    --brand-sky: #2f86ff;
    --brand-pink: #f145b5;
    --text-strong: #192030;
    --text-muted: #44576e;
    --text-soft: #60758b;
    --line: rgba(25, 32, 48, 0.14);
    --shadow: 0 18px 36px rgba(20, 28, 45, 0.12);
    --shadow-soft: 0 10px 24px rgba(20, 28, 45, 0.08);
    --radius-lg: 24px;
    --radius-md: 14px;
    --transition-base: 260ms ease;
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
    background: linear-gradient(120deg, var(--bg-1) 0%, var(--bg-2) 52%, var(--bg-3) 100%);
    background-size: 180% 180%;
    animation: gradientShift 16s ease infinite;
    color: var(--text-strong);
    overflow-x: hidden;
    position: relative;
  }

  body::before,
  body::after {
    content: "";
    position: fixed;
    border-radius: 999px;
    pointer-events: none;
    z-index: -1;
    filter: blur(55px);
    opacity: 0.38;
    will-change: transform;
  }

  body::before {
    width: min(48vw, 560px);
    height: min(48vw, 560px);
    top: -160px;
    left: -120px;
    background: radial-gradient(circle at center, rgba(47, 134, 255, 0.46), rgba(47, 134, 255, 0));
    animation: floatOrbA 12s ease-in-out infinite alternate;
  }

  body::after {
    width: min(46vw, 540px);
    height: min(46vw, 540px);
    right: -140px;
    bottom: -180px;
    background: radial-gradient(circle at center, rgba(241, 69, 181, 0.42), rgba(241, 69, 181, 0));
    animation: floatOrbB 14s ease-in-out infinite alternate;
  }

  p {
    color: var(--text-muted);
    line-height: 1.72;
  }

  a,
  button,
  [role="button"] {
    transition: transform var(--transition-base), box-shadow var(--transition-base), opacity var(--transition-base), filter var(--transition-base), color var(--transition-base), background-color var(--transition-base), border-color var(--transition-base);
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes floatOrbA {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(38px, 34px, 0) scale(1.05);
    }
  }

  @keyframes floatOrbB {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(-34px, -28px, 0) scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 1ms !important;
      scroll-behavior: auto !important;
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
    background: linear-gradient(180deg, var(--brand-sky), var(--brand-pink));
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece{
    background-color: transparent;
  }
`;
