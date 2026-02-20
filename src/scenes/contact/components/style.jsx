import styled from "styled-components";

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid rgba(25, 32, 48, 0.32);
  padding: 0.45rem 0.7rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.98);
  color: var(--text-strong);
  font-size: 0.9rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 1px 0 rgba(25, 32, 48, 0.06);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);

  &:hover {
    border-color: rgba(25, 32, 48, 0.42);
  }

  &:focus {
    outline: none;
    border-color: rgba(47, 134, 255, 0.62);
    box-shadow: 0 0 0 3px rgba(47, 134, 255, 0.2), 0 8px 16px rgba(47, 134, 255, 0.12);
    transform: translateY(-1px);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 0.12rem;
`;

const Label = styled.label`
  font-family: var(--font-code);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
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

const TextArea = styled(Input).attrs({ as: "textarea" })`
  height: auto;
  min-height: 102px;
  resize: vertical;
`;

const ContactSplit = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1020px;
  margin-top: 0.35rem;
  gap: ${({ $desktop }) => ($desktop ? "2.4rem" : "1.4rem")};
  flex-direction: ${({ $desktop }) => ($desktop ? "row" : "column")};

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContactFormCard = styled.div`
  margin: 0.85rem 0 0;
  padding: 0.9rem;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(248, 252, 255, 0.84));
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow: 0 14px 24px rgba(20, 28, 45, 0.12);
  transition: transform var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 30px rgba(20, 28, 45, 0.16);
  }

  @media screen and (max-width: 768px) {
    margin-top: 0.75rem;
    padding: 0.8rem;
    border-radius: 14px;
  }
`;

const Button = styled.button`
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  color: white;
  border: none;
  padding: 0.68rem 0.9rem;
  border-radius: 10px;
  font-family: var(--font-code);
  font-size: 0.78rem;
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

export {
  Input,
  FormGroup,
  Label,
  FormStatus,
  TextArea,
  ContactSplit,
  ContactFormCard,
  Button,
};
