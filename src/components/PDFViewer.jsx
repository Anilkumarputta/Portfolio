import styled from "styled-components";

const PDFViewer = styled.button`
  padding: 0.75rem 1.1rem;
  border-radius: 10px;
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  box-shadow: none;
  color: white;
  margin-top: 1rem;
  border: none;
  font-size: 0.92rem;
  font-family: var(--font-code);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base);
  box-shadow: 0 10px 20px rgba(241, 69, 181, 0.22);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 28px rgba(47, 134, 255, 0.24);
    filter: saturate(1.1);
  }
`;

export default PDFViewer;
