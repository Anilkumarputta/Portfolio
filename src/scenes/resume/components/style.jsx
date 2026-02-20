import styled from "styled-components";

const ResumeIntro = styled.p`
  text-align: center;
  margin-top: 0.2rem;
`;

const ResumeTimeline = styled.div`
  width: min(100%, 860px);
  margin-top: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.4rem;
    top: 0.3rem;
    bottom: 0.3rem;
    width: 2px;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    opacity: 0.9;
    box-shadow: 0 8px 16px rgba(47, 134, 255, 0.24);
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;

    &::before {
      left: 0.3rem;
    }
  }
`;

const ResumeItem = styled.article`
  position: relative;
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.74)),
    linear-gradient(165deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  box-shadow: 0 14px 24px rgba(16, 27, 45, 0.12);
  padding: 0.95rem 1rem 1rem 1.12rem;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  overflow: hidden;
  will-change: transform;

  &::before {
    content: "";
    position: absolute;
    left: -1.15rem;
    top: 1.1rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(120deg, var(--brand-sky), var(--brand-pink), var(--brand-orange));
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.65), 0 8px 14px rgba(16, 27, 45, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(128deg, rgba(47, 134, 255, 0.48), rgba(241, 69, 181, 0.4), rgba(255, 127, 63, 0.4));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.62;
    pointer-events: none;
    transition: opacity var(--transition-base);
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(47, 134, 255, 0.34);
    box-shadow: 0 16px 26px rgba(16, 27, 45, 0.16);
  }

  &:hover::after {
    opacity: 0.95;
  }
`;

const ResumeMeta = styled.p`
  font-family: var(--font-code);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-soft);
`;

const ResumeTitle = styled.h3`
  margin-top: 0.34rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--text-strong);
`;

const ResumeOrganization = styled.p`
  margin-top: 0.18rem;
  font-family: var(--font-code);
  font-size: 0.76rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #264a8f;
`;

const ResumeDescription = styled.p`
  margin-top: 0.56rem;
  line-height: 1.64;
  color: var(--text-muted);
`;

const ResumeSkills = styled.div`
  margin-top: 0.72rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const ResumeSkill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.58rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-teal));
  color: #fff;
  font-family: var(--font-code);
  font-size: 0.64rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 8px 14px rgba(16, 27, 45, 0.16);
`;

export {
  ResumeIntro,
  ResumeTimeline,
  ResumeItem,
  ResumeMeta,
  ResumeTitle,
  ResumeOrganization,
  ResumeDescription,
  ResumeSkills,
  ResumeSkill,
};
