import styled from "styled-components";

const PDFViewer = styled.button`
  padding: 0.75rem 1.1rem;
  border-radius: 10px;
  background: linear-gradient(120deg, var(--brand-teal), var(--brand-orange));
  box-shadow: none;
  color: white;
  margin-top: 1rem;
  border: none;
  font-size: 0.92rem;
  font-family: var(--font-code);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 24, 32, 0.2);
  }
`;

export default PDFViewer;
