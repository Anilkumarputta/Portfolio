import styled from "styled-components";
import { fonts } from "../../styles/fonts";
import BrandLogo from "./BrandLogo";
import { Row } from "./Layout";

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 2.5rem;
  padding: 2rem 0 1.2rem;
  background:
    radial-gradient(circle at 10% 20%, rgba(47, 134, 255, 0.2), rgba(47, 134, 255, 0)),
    radial-gradient(circle at 90% 15%, rgba(241, 69, 181, 0.18), rgba(241, 69, 181, 0)),
    linear-gradient(130deg, #141d31 0%, #132844 52%, #2a1d48 100%);
  color: #f7f1de;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: min(56vw, 700px);
    height: min(56vw, 700px);
    left: -180px;
    top: -240px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(47, 134, 255, 0.26), rgba(47, 134, 255, 0));
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 2px;
    background: linear-gradient(90deg, rgba(47, 134, 255, 0.2), rgba(241, 69, 181, 0.8), rgba(255, 127, 63, 0.2));
    opacity: 0.95;
  }
`;

const SocialLinks = styled.div`
  margin-top: 0.9rem;
  position: relative;
  z-index: 1;
  a {
    color: #f7f1de;
    margin: 0 0.7rem;
    font-size: 1.05rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 999px;
    border: 1px solid rgba(247, 241, 222, 0.42);
    background: rgba(255, 255, 255, 0.08);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-base), box-shadow var(--transition-base), color var(--transition-base), border-color var(--transition-base), background var(--transition-base);
    &:hover {
      color: #101820;
      border-color: transparent;
      transform: translateY(-4px);
      box-shadow: 0 14px 24px rgba(241, 69, 181, 0.34);
      background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    }
  }
`;

const FooterInner = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const FooterText = styled.p`
  margin-top: 1rem;
  font-family: ${fonts["source-code"]};
  font-size: 0.77rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(247, 241, 222, 0.72);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        <Row justify="center">
          <BrandLogo showText size={44} light />
        </Row>
        <SocialLinks>
          <a href="http://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="mailto:anilkumarputta@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <i className="fas fa-envelope" />
          </a>
        </SocialLinks>
        <FooterText>
          &copy; {new Date().getFullYear()} Anil Kumar. Crafted with React and styled-components.
        </FooterText>
      </FooterInner>
    </FooterContainer>
  );
}
