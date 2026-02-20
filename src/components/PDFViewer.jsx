import styled from "styled-components";

const PDFViewer = styled.button`
  padding: 0.75rem 1.1rem;
  border-radius: 12px;
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  color: white;
  margin-top: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 0.92rem;
  font-family: var(--font-code);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base), border-color var(--transition-base);
  box-shadow: 0 12px 22px rgba(241, 69, 181, 0.24);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgba(255, 255, 255, 0) 18%, rgba(255, 255, 255, 0.28) 48%, rgba(255, 255, 255, 0) 82%);
    transform: translateX(-140%);
    transition: transform 0.9s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 30px rgba(47, 134, 255, 0.3);
    filter: saturate(1.15);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:hover::after {
    transform: translateX(130%);
  }
`;

export default PDFViewer;
