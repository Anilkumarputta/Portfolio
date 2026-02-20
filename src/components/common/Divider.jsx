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
  max-width: 230px;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
  background-size: 200% 100%;
  box-shadow: 0 10px 16px rgba(47, 134, 255, 0.24);
  animation: pulseLine 3s ease infinite;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgba(255, 255, 255, 0) 18%, rgba(255, 255, 255, 0.28) 50%, rgba(255, 255, 255, 0) 82%);
    transform: translateX(-140%);
    animation: dividerShine 2.8s ease infinite;
  }

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

  @keyframes dividerShine {
    0%,
    24% {
      transform: translateX(-140%);
    }
    52%,
    100% {
      transform: translateX(130%);
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
