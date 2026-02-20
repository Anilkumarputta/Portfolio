import styled from "styled-components";

const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.2rem;
`;

const SearchInput = styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.55rem 0.85rem;
  background-color: rgba(255, 255, 255, 0.72);
  color: var(--text-strong);
  font-size: 0.92rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &::placeholder {
    color: var(--text-soft);
  }

  &:focus {
    outline: none;
    border-color: var(--brand-teal);
    box-shadow: 0 0 0 3px rgba(32, 180, 170, 0.18);
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? "transparent" : "var(--line)")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(120deg, var(--brand-teal), var(--brand-orange))"
      : "rgba(255, 255, 255, 0.72)"};
  color: ${({ $active }) => ($active ? "#fff" : "var(--text-strong)")};
  border-radius: 999px;
  padding: 0.42rem 0.8rem;
  font-family: var(--font-code);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(16, 24, 32, 0.12);
  }
`;

const ResultsText = styled.p`
  font-family: var(--font-code);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-soft);
`;

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: stretch;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));

    .project-card {
      grid-column: span 4;
    }

    .project-card:nth-child(1) {
      grid-column: span 8;
      height: 360px;
    }

    .project-card:nth-child(2) {
      grid-column: span 4;
      height: 360px;
    }

    .project-card:nth-child(5n) {
      grid-column: span 6;
    }
  }
`;

const EmptyState = styled.div`
  margin-top: 1rem;
  width: 100%;
  border: 1px dashed var(--line);
  border-radius: 14px;
  padding: 1rem;
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
  background: var(--surface-strong);
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export {
  Controls,
  SearchInput,
  FilterRow,
  FilterButton,
  ResultsText,
  ProjectGrid,
  EmptyState,
  ResetButton,
};
