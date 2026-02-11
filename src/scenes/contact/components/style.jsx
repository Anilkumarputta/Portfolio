import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${colors.pink};
  color: black;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-family: ${fonts["source-code"]};
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;

  &.show {
    opacity: 1;
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  height: auto;
`;

const Button = styled.button`
  background: linear-gradient(
    64.5deg,
    rgba(245, 116, 185, 1) 14.7%,
    rgba(89, 97, 223, 1) 88.7%
  );
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-family: ${fonts["source-code"]};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;

export { Input, FormGroup, Label, ErrorMessage, TextArea, Button };
