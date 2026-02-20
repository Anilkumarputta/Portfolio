import styled from "styled-components";

const SocialMediaWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: var(--text-strong);
  border: 1px solid rgba(255, 255, 255, 0.68);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.64));
  box-shadow: 0 10px 20px rgba(20, 28, 45, 0.1);
  text-decoration: none;
  transition: transform var(--transition-base), box-shadow var(--transition-base), color var(--transition-base), border-color var(--transition-base), background var(--transition-base);

  &:hover {
    color: #fff;
    cursor: pointer;
    border-color: transparent;
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 14px 24px rgba(241, 69, 181, 0.26);
    background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
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
