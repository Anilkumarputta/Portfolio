import styled from "styled-components";
import { fonts } from "../../styles/fonts";
import BrandLogo from "./BrandLogo";
import { Row } from "./Layout";

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 2.5rem;
  padding: 2rem 0 1.2rem;
  background: #101820;
  color: #f7f1de;
  border-top: 1px solid rgba(247, 241, 222, 0.16);
`;

const SocialLinks = styled.div`
  margin-top: 0.9rem;
  a {
    color: #f7f1de;
    margin: 0 0.7rem;
    font-size: 1.05rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 999px;
    border: 1px solid rgba(247, 241, 222, 0.25);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    &:hover {
      color: #101820;
      border-color: transparent;
      background: linear-gradient(120deg, #20b4aa, #ff6e2d);
    }
  }
`;

const FooterInner = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
  text-align: center;
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
          <BrandLogo showText size={44} />
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
