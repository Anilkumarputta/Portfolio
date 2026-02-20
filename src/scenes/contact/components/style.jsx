import styled from "styled-components";

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid rgba(25, 32, 48, 0.28);
  padding: 0.45rem 0.7rem;
  border-radius: 12px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(252, 253, 255, 0.8)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
  color: var(--text-strong);
  font-size: 0.9rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.88), 0 8px 14px rgba(16, 27, 45, 0.06);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);

  &:hover {
    border-color: rgba(25, 32, 48, 0.42);
  }

  &:focus {
    outline: none;
    border-color: rgba(47, 134, 255, 0.68);
    box-shadow: 0 0 0 3px rgba(47, 134, 255, 0.24), 0 10px 18px rgba(47, 134, 255, 0.16);
    transform: translateY(-2px);
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
  padding: 0.72rem 0.85rem;
  font-size: 0.88rem;
  margin-bottom: 0.8rem;
  border: 1px solid;
  display: flex;
  align-items: flex-start;
  gap: 0.62rem;
  background: ${({ $type }) =>
    $type === "success"
      ? "rgba(25, 198, 186, 0.14)"
      : $type === "warning"
        ? "rgba(255, 127, 63, 0.14)"
        : "rgba(241, 69, 181, 0.14)"};
  color: ${({ $type }) =>
    $type === "success"
      ? "var(--text-strong)"
      : $type === "warning"
        ? "#8f481d"
        : "#8f1b67"};
  border-color: ${({ $type }) =>
    $type === "success"
      ? "rgba(25, 198, 186, 0.42)"
      : $type === "warning"
        ? "rgba(255, 127, 63, 0.46)"
        : "rgba(241, 69, 181, 0.42)"};

  .status-icon {
    width: 1.45rem;
    height: 1.25rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-code);
    font-size: 0.76rem;
    font-weight: 700;
    color: #fff;
    background: ${({ $type }) =>
      $type === "success"
        ? "linear-gradient(120deg, var(--brand-teal), var(--brand-sky))"
        : $type === "warning"
          ? "linear-gradient(120deg, var(--brand-orange), #f0a000)"
          : "linear-gradient(120deg, var(--brand-pink), #c6287d)"};
    box-shadow: 0 8px 12px rgba(16, 27, 45, 0.14);
    flex-shrink: 0;
  }

  .status-body {
    display: inline-flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .status-body strong {
    font-size: 0.8rem;
    letter-spacing: 0.02em;
  }

  .status-body small {
    font-size: 0.78rem;
    line-height: 1.45;
    color: inherit;
  }
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
  padding: 0.95rem;
  border-radius: 18px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 252, 255, 0.76)),
    linear-gradient(160deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  box-shadow: 0 16px 28px rgba(16, 27, 45, 0.14);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base), background var(--transition-base);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px) saturate(145%);
  -webkit-backdrop-filter: blur(10px) saturate(145%);

  &::before {
    content: "";
    position: absolute;
    inset: -36% -20% auto;
    height: 88%;
    background:
      radial-gradient(circle at 18% 42%, rgba(47, 134, 255, 0.2), rgba(47, 134, 255, 0)),
      radial-gradient(circle at 78% 36%, rgba(241, 69, 181, 0.16), rgba(241, 69, 181, 0));
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(130deg, rgba(47, 134, 255, 0.5), rgba(241, 69, 181, 0.42), rgba(255, 127, 63, 0.42));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.68;
    transition: opacity var(--transition-base);
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(47, 134, 255, 0.3);
    box-shadow: 0 20px 34px rgba(16, 27, 45, 0.2);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(248, 252, 255, 0.8)),
      linear-gradient(160deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0));
  }

  &:hover::after {
    opacity: 0.94;
  }

  form {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0.75rem;
    padding: 0.82rem;
    border-radius: 14px;
  }
`;

const HoneypotField = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  overflow: hidden;
  opacity: 0;
`;

const FormHint = styled.p`
  width: 100%;
  margin: 0.08rem 0 0.02rem;
  font-family: var(--font-code);
  font-size: 0.66rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-soft);
`;

const Button = styled.button`
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.34);
  padding: 0.68rem 0.9rem;
  border-radius: 12px;
  font-family: var(--font-code);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base);
  width: 100%;
  box-shadow: 0 12px 22px rgba(241, 69, 181, 0.24);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgba(255, 255, 255, 0) 22%, rgba(255, 255, 255, 0.26) 48%, rgba(255, 255, 255, 0) 80%);
    transform: translateX(-140%);
    transition: transform 0.85s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 30px rgba(47, 134, 255, 0.3);
    filter: saturate(1.14);
  }

  &:hover::after {
    transform: translateX(130%);
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
  HoneypotField,
  FormHint,
  Button,
};
