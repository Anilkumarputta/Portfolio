import styled from "styled-components";

const SocialMediaWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: var(--text-strong);
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.66)),
    linear-gradient(165deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
  box-shadow: 0 12px 20px rgba(16, 27, 45, 0.12);
  text-decoration: none;
  transition: transform var(--transition-base), box-shadow var(--transition-base), color var(--transition-base), border-color var(--transition-base), background var(--transition-base), filter var(--transition-base);
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: -26% auto auto -20%;
    width: 130%;
    height: 70%;
    background: linear-gradient(100deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0));
    opacity: 0.75;
    z-index: 0;
    pointer-events: none;
    transition: transform var(--transition-base);
  }

  i {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: #fff;
    cursor: pointer;
    border-color: transparent;
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 16px 28px rgba(241, 69, 181, 0.3);
    background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    filter: saturate(1.1);
  }

  &:hover::before {
    transform: translateY(8px);
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
