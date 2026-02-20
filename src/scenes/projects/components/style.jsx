import styled from "styled-components";

const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.95rem;
  padding: 0.8rem;
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.68));
  border: 1px solid rgba(25, 32, 48, 0.2);
  box-shadow: 0 10px 20px rgba(20, 28, 45, 0.09);
`;

const SearchInput = styled.input`
  height: 46px;
  width: 100%;
  border: 1.5px solid rgba(25, 32, 48, 0.56);
  border-radius: 12px;
  padding: 0.6rem 0.9rem;
  background: #ffffff;
  color: var(--text-strong);
  font-size: 0.92rem;
  font-weight: 500;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.85), 0 4px 12px rgba(20, 28, 45, 0.08);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);

  &::placeholder {
    color: rgba(68, 87, 110, 0.9);
  }

  &:hover {
    border-color: rgba(25, 32, 48, 0.68);
  }

  &:focus {
    outline: none;
    border-color: rgba(47, 134, 255, 0.78);
    box-shadow: 0 0 0 3px rgba(47, 134, 255, 0.2), 0 8px 16px rgba(47, 134, 255, 0.12);
    transform: translateY(-1px);
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? "transparent" : "rgba(255, 255, 255, 0.72)")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange))"
      : "rgba(255, 255, 255, 0.72)"};
  color: ${({ $active }) => ($active ? "#fff" : "var(--text-strong)")};
  border-radius: 999px;
  padding: 0.42rem 0.8rem;
  font-family: var(--font-code);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base);
  box-shadow: ${({ $active }) => ($active ? "0 10px 18px rgba(241, 69, 181, 0.24)" : "none")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(47, 134, 255, 0.18);
    filter: saturate(1.1);
  }
`;

const ResultsText = styled.p`
  font-family: var(--font-code);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-soft);
`;

const EmptyState = styled.div`
  margin-top: 1rem;
  width: 100%;
  border: 1px dashed rgba(47, 134, 255, 0.36);
  border-radius: 14px;
  padding: 1rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.7), rgba(248, 252, 255, 0.62));
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;

  p {
    margin: 0;
  }
`;

const ResetButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.55rem 0.8rem;
  font-size: 0.72rem;
  font-family: var(--font-code);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(120deg, var(--surface-strong), #1f2941);
  cursor: pointer;
  transition: transform var(--transition-base), opacity var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    opacity: 0.94;
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(20, 28, 45, 0.2);
  }
`;

export {
  Controls,
  SearchInput,
  FilterRow,
  FilterButton,
  ResultsText,
  EmptyState,
  ResetButton,
};
