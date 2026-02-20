import { createGlobalStyle } from "styled-components";
import { fonts } from "./styles/fonts";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-1: #fff8e5;
    --bg-2: #ecf8ff;
    --bg-3: #e7fff8;
    --bg-4: #fff0f8;
    --surface: rgba(255, 255, 255, 0.72);
    --surface-elevated: rgba(255, 255, 255, 0.86);
    --surface-strong: #111a2d;
    --glass-border: rgba(255, 255, 255, 0.62);
    --glass-border-strong: rgba(47, 134, 255, 0.38);
    --glass-highlight: rgba(255, 255, 255, 0.72);
    --brand-teal: #19c6ba;
    --brand-orange: #ff7f3f;
    --brand-sky: #2f86ff;
    --brand-pink: #f145b5;
    --brand-lime: #80cf56;
    --text-strong: #182338;
    --text-muted: #3f566f;
    --text-soft: #5b738b;
    --line: rgba(24, 35, 56, 0.16);
    --shadow: 0 22px 44px rgba(16, 27, 45, 0.15);
    --shadow-soft: 0 14px 28px rgba(16, 27, 45, 0.1);
    --radius-xl: 30px;
    --radius-lg: 24px;
    --radius-md: 14px;
    --transition-base: 280ms ease;
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

  #root {
    position: relative;
    isolation: isolate;
  }

  #root::before,
  #root::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -3;
  }

  #root::before {
    background-image: radial-gradient(rgba(17, 26, 45, 0.1) 1px, transparent 1px);
    background-size: 18px 18px;
    opacity: 0.11;
    animation: gridDrift 14s linear infinite;
  }

  #root::after {
    background:
      radial-gradient(circle at 15% 82%, rgba(255, 127, 63, 0.14), rgba(255, 127, 63, 0)),
      radial-gradient(circle at 88% 20%, rgba(25, 198, 186, 0.14), rgba(25, 198, 186, 0));
    opacity: 0.85;
  }

  body {
    background:
      radial-gradient(circle at 8% 6%, rgba(47, 134, 255, 0.24), rgba(47, 134, 255, 0) 35%),
      radial-gradient(circle at 92% 16%, rgba(241, 69, 181, 0.22), rgba(241, 69, 181, 0) 36%),
      radial-gradient(circle at 52% 100%, rgba(25, 198, 186, 0.21), rgba(25, 198, 186, 0) 40%),
      linear-gradient(128deg, var(--bg-1) 0%, var(--bg-2) 39%, var(--bg-3) 76%, var(--bg-4) 100%);
    background-size: 170% 170%;
    animation: gradientShift 18s ease infinite;
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
    z-index: -2;
    filter: blur(62px);
    opacity: 0.44;
    will-change: transform;
  }

  body::before {
    width: min(52vw, 620px);
    height: min(52vw, 620px);
    top: -190px;
    left: -130px;
    background: radial-gradient(circle at center, rgba(47, 134, 255, 0.52), rgba(47, 134, 255, 0));
    animation: floatOrbA 12s ease-in-out infinite alternate;
  }

  body::after {
    width: min(50vw, 600px);
    height: min(50vw, 600px);
    right: -150px;
    bottom: -190px;
    background: radial-gradient(circle at center, rgba(241, 69, 181, 0.48), rgba(241, 69, 181, 0));
    animation: floatOrbB 14s ease-in-out infinite alternate;
  }

  p {
    color: var(--text-muted);
    line-height: 1.72;
  }

  a,
  button,
  input,
  textarea,
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

  @keyframes gridDrift {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 18px, 0);
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

  ::selection {
    color: #fff;
    background: rgba(47, 134, 255, 0.6);
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
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  ::-webkit-scrollbar-track-piece{
    background-color: transparent;
  }
`;
