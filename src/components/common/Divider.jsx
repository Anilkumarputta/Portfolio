import styled from "styled-components";

const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0 1.35rem;
`;

const DividerComponent = styled.div`
  width: ${(props) => props.width || "80%"};
  max-width: 220px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--brand-teal), var(--brand-orange));
`;

const Divider = ({ width }) => {
  return (
    <DividerContainer>
      <DividerComponent width={width} />
    </DividerContainer>
  );
};

export default Divider;
