import styled from "styled-components";

const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const DividerComponent = styled.div`
  width: ${(props) => props.width || "80%"};
  height: 1px;
  background: linear-gradient(
    64.5deg,
    rgba(245, 116, 185, 1) 14.7%,
    rgba(89, 97, 223, 1) 88.7%
  );
`;

const Divider = ({ width }) => {
  return (
    <DividerContainer>
      <DividerComponent width={width} />
    </DividerContainer>
  );
};

export default Divider;
