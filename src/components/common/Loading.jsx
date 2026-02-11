import styled from "styled-components";
import { colors } from "../../styles/colors";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dots = styled.div`
  width: 40px;
  height: 19.2px;
  background: radial-gradient(
        circle closest-side,
        ${colors["pink-two"]} 90%,
        #0000
      )
      0% 50%,
    radial-gradient(circle closest-side, ${colors["pink-two"]} 90%, #0000) 50%
      50%,
    radial-gradient(circle closest-side, ${colors["pink-two"]} 90%, #0000) 100%
      50%;
  background-size: calc(100% / 3) 9.6px;
  background-repeat: no-repeat;
  animation: DotAnimation 1.4s infinite linear;

  @keyframes DotAnimation {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }

    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }

    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }

    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;

const Loading = () => {
  return (
    <Overlay>
      <Dots />
    </Overlay>
  );
};

export default Loading;
