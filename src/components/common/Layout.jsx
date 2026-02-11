import styled from "styled-components";
import { colors } from "../../styles/colors";

const Layout = styled.div`
  background-color: ${colors["deep-purple"]};
  color: #fff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const SceneLayout = styled.div`
  width: 83%;
  margin: 0 auto;
  padding-top: 1rem;
  min-height: calc(100vh + 50px);

  @media screen and (min-width: 1060px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-evenly"};
  gap: ${({ gap }) => gap || "1rem"};
  width: ${({ width }) => width || "100%"};
  flex-wrap: wrap;
`;

const Column = styled(Row)`
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
`;

const RightSide = styled.div`
  flex-basis: 60%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1060px) {
    order: 2;
    width: 100vh;
  }
`;

const RightSideContent = styled.div`
  img {
    position: relative;
    height: 600px;
  }

  @media screen and (min-width: 1060px) {
    &::before {
      max-width: 400px;
    }

    img {
      max-height: 600px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    img {
      height: 500px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      margin-top: 1rem;
      width: 286px;
      height: 281.6px;
    }
  }
`;

const LeftSide = styled.div`
  order: 1;
  .empresa {
    font-weight: bold;
    margin: 0;
    color: ${colors["pink-two"]};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1279px) {
    flex-basis: 40%;
  }
`;

export {
  Layout,
  SceneLayout,
  Row,
  Column,
  RightSide,
  RightSideContent,
  LeftSide,
};
