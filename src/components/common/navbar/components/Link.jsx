import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const LinkComponent = styled.p`
  color: ${(props) => (props.selected ? "var(--text-strong)" : "var(--text-muted)")};
  font-family: var(--font-code);
  position: relative;
  transition: color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base), border-color var(--transition-base);
  padding: 0.32rem 0.62rem;
  font-weight: ${(props) => (props.selected ? "700" : "600")};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 999px;
  border: 1px solid ${(props) => (props.selected ? "rgba(255, 255, 255, 0.2)" : "transparent")};
  background: ${(props) =>
    props.selected
      ? "linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange))"
      : "transparent"};
  box-shadow: ${(props) =>
    props.selected ? "0 10px 18px rgba(241, 69, 181, 0.24)" : "none"};
  color: ${(props) => (props.selected ? "#fff" : "var(--text-muted)")};

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.selected ? "0" : "0")};
    height: 2px;
    background-image: linear-gradient(90deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    transition: width 0.35s ease;
    border-radius: 999px;
    position: absolute;
    left: 0.62rem;
    bottom: -2px;
  }

  &:hover::after {
    width: ${(props) => (props.selected ? "0" : "calc(100% - 1.24rem)")};
  }

  &:hover {
    color: ${(props) => (props.selected ? "#fff" : "var(--text-strong)")};
    transform: translateY(-2px);
    border-color: ${(props) => (props.selected ? "rgba(255, 255, 255, 0.2)" : "rgba(47, 134, 255, 0.24)")};
    background: ${(props) =>
      props.selected
        ? "linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange))"
        : "rgba(255, 255, 255, 0.58)"};
    box-shadow: 0 10px 16px rgba(16, 27, 45, 0.12);
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
