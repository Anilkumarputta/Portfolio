import styled from "styled-components";
import { colors } from "../styles/colors";

const SocialMediaWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  color: ${colors.pink};
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: white;
    cursor: pointer;
    background: linear-gradient(
      64.5deg,
      rgba(245, 116, 185, 1) 14.7%,
      rgba(89, 97, 223, 1) 88.7%
    );
  }
`;

const SocialMediaIcon = ({ icon, path }) => {
  return (
    <SocialMediaWrapper href={path} target="_blank">
      <i className={`fa-brands ${icon}`}></i>
    </SocialMediaWrapper>
  );
};

export default SocialMediaIcon;
