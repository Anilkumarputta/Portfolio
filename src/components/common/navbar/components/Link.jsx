import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const LinkComponent = styled.p`
  color: ${(props) => (props.selected ? "var(--text-strong)" : "var(--text-muted)")};
  font-family: var(--font-code);
  position: relative;
  transition: color var(--transition-base), transform var(--transition-base);
  padding: 0.28rem 0.2rem;
  font-weight: ${(props) => (props.selected ? "700" : "600")};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.selected ? "100%" : "0")};
    height: 2px;
    background-image: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    transition: width 0.35s ease;
    border-radius: 999px;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--text-strong);
    transform: translateY(-1px);
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
