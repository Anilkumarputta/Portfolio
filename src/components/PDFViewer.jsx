import styled from "styled-components";

const PDFViewer = styled.button`
  padding: 10px;
  border-radius: 6px;
  background: linear-gradient(
    64.5deg,
    rgba(245, 116, 185, 1) 14.7%,
    rgba(89, 97, 223, 1) 88.7%
  );
  box-shadow: none;
  color: white;
  margin-top: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: linear-gradient(
      64.5deg,
      rgba(89, 97, 223, 1) 14.7%,
      rgba(245, 116, 185, 1) 88.7%
    );
  }
`;

export default PDFViewer;
