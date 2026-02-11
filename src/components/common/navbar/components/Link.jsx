import AnchorLink from "react-anchor-link-smooth-scroll";
import { colors } from "./../../../../styles/colors";
import styled from "styled-components";
import { fonts } from "../../../../styles/fonts";

const LinkComponent = styled.p`
  color: ${colors.pink};
  font-family: ${fonts["source-code"]};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.selected ? "100%" : "0")};
    height: 2px;
    background-color: ${colors["pink-two"]};
    transition: width 1s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Link = ({ label, page, selectedPage, setSelectedPage }) => {
  const lowerPage = page.toLowerCase();

  return (
    <AnchorLink
      style={{
        textDecoration: "none",
      }}
      href={`#${lowerPage}`}
      onClick={() => {
        setSelectedPage(lowerPage);
      }}
    >
      <LinkComponent selected={page === selectedPage ? true : false}>
        {label}
      </LinkComponent>
    </AnchorLink>
  );
};

export default Link;
