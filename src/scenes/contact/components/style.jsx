import styled from "styled-components";

const Input = styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0.55rem 0.75rem;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.74));
  color: var(--text-strong);
  font-size: 0.95rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);

  &:focus {
    outline: none;
    border-color: rgba(47, 134, 255, 0.45);
    box-shadow: 0 0 0 3px rgba(47, 134, 255, 0.16);
    transform: translateY(-1px);
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

const FormStatus = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  font-size: 0.88rem;
  margin-bottom: 0.8rem;
  border: 1px solid;
  background: ${({ $type }) =>
    $type === "success" ? "rgba(25, 198, 186, 0.14)" : "rgba(241, 69, 181, 0.14)"};
  color: ${({ $type }) =>
    $type === "success" ? "var(--text-strong)" : "#8f1b67"};
  border-color: ${({ $type }) =>
    $type === "success" ? "rgba(25, 198, 186, 0.42)" : "rgba(241, 69, 181, 0.42)"};
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
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-family: var(--font-code);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base);
  width: 100%;
  box-shadow: 0 10px 20px rgba(241, 69, 181, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 28px rgba(47, 134, 255, 0.24);
    filter: saturate(1.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export { Input, FormGroup, Label, FormStatus, ErrorMessage, TextArea, Button };
