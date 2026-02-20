import styled from "styled-components";

const Input = styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid var(--line);
  padding: 0.55rem 0.75rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.72);
  color: var(--text-strong);
  font-size: 0.95rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: var(--brand-teal);
    box-shadow: 0 0 0 3px rgba(32, 180, 170, 0.18);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-family: var(--font-code);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  color: var(--text-soft);
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
  min-height: 140px;
  resize: vertical;
`;

const Button = styled.button`
  background: linear-gradient(120deg, var(--brand-teal), var(--brand-orange));
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-family: var(--font-code);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 24, 32, 0.18);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export { Input, FormGroup, Label, ErrorMessage, TextArea, Button };
