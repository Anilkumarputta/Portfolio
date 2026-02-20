import styled from "styled-components";

const SocialMediaWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: var(--text-strong);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    cursor: pointer;
    border-color: transparent;
    transform: translateY(-2px);
    background: linear-gradient(120deg, var(--brand-teal), var(--brand-orange));
  }
`;

const SocialMediaIcon = ({ icon, path }) => {
  return (
    <SocialMediaWrapper
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.replace("fa-", "")}
    >
      <i className={`fa-brands ${icon}`}></i>
    </SocialMediaWrapper>
  );
};

export default SocialMediaIcon;
