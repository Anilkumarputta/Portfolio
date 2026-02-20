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
  height: 5px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  background-size: 200% 100%;
  box-shadow: 0 8px 14px rgba(47, 134, 255, 0.2);
  animation: pulseLine 3s ease infinite;

  @keyframes pulseLine {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Divider = ({ width }) => {
  return (
    <DividerContainer>
      <DividerComponent width={width} />
    </DividerContainer>
  );
};

export default Divider;
