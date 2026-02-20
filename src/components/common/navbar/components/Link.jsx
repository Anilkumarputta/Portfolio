import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const LinkComponent = styled.p`
  color: var(--text-muted);
  font-family: var(--font-code);
  position: relative;
  transition: color 0.25s ease;

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.selected ? "100%" : "0")};
    height: 3px;
    background-image: linear-gradient(90deg, var(--brand-teal), var(--brand-orange));
    transition: width 0.35s ease;
    border-radius: 3px;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--text-strong);
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
