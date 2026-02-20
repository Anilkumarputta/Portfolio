import styled from "styled-components";

const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.6rem, 1.2rem + 1.8vw, 2.5rem);
  margin-bottom: 0.5rem;
  letter-spacing: 0.04em;
  background: linear-gradient(105deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 10px 22px rgba(47, 134, 255, 0.22);
`;

export default PageTitle;
