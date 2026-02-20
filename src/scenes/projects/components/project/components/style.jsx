import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.72)),
    linear-gradient(165deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  border: 1px solid var(--glass-border);
  overflow: hidden;
  width: min(100%, 320px);
  height: clamp(220px, 24vw, 290px);
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 16px 28px rgba(16, 27, 45, 0.14);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base), background var(--transition-base);
  backdrop-filter: blur(10px) saturate(145%);
  -webkit-backdrop-filter: blur(10px) saturate(145%);

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(130deg, rgba(47, 134, 255, 0.56), rgba(241, 69, 181, 0.48), rgba(255, 127, 63, 0.48));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.62;
    transition: opacity var(--transition-base);
    z-index: 4;
  }

  .project-hover {
    position: absolute;
    z-index: 3;
    width: calc(100% - 1.5rem);
    max-width: 100%;
    bottom: 0.75rem;
    left: 0.75rem;
    min-height: 5.1rem;
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 252, 255, 0.8)),
      linear-gradient(160deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.62);
    box-shadow: 0 10px 18px rgba(16, 27, 45, 0.16);
    transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base), border-color var(--transition-base);
    backdrop-filter: blur(10px) saturate(150%);
    -webkit-backdrop-filter: blur(10px) saturate(150%);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 42px rgba(16, 27, 45, 0.22);
    border-color: rgba(47, 134, 255, 0.36);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.76)),
      linear-gradient(165deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0));
  }

  &:hover::before {
    opacity: 0.96;
  }

  &:hover .project-image {
    transform: scale(1.09);
    filter: saturate(1.22);
  }

  &:hover .project-image::before {
    opacity: 0.4;
  }

  &:hover .project-hover {
    transform: translateY(-3px);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(242, 249, 255, 0.86)),
      linear-gradient(160deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0));
    box-shadow: 0 14px 22px rgba(16, 27, 45, 0.2);
    border-color: rgba(47, 134, 255, 0.3);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    height: 218px;
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 1239px) {
    width: calc(50% - 0.5rem);
  }

  @media screen and (min-width: 1240px) {
    width: calc(33.333% - 0.75rem);
  }

  @media screen and (max-width: 480px) {
    height: 210px;

    .project-hover {
      min-height: 4.9rem;
    }
  }

`;

const ProjectImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  overflow: hidden;
  background-color: rgba(16, 24, 32, 0.12);
  background-image: url(${(props) =>
    props.src ? props.src : "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"});
  transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(160deg, rgba(47, 134, 255, 0.24), rgba(241, 69, 181, 0.18), rgba(255, 127, 63, 0.1));
    opacity: 0.24;
    transition: opacity var(--transition-base);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
    pointer-events: none;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 0.9rem;
  font-family: var(--font-code);
  font-weight: 700;
  color: #15284f;
  padding: 0.62rem 0.82rem 0.35rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color var(--transition-base), transform var(--transition-base);

  ${ProjectCard}:hover & {
    color: #1f4794;
    transform: translateX(1px);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.78rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.8rem;
  font-family: var(--font-body);
  font-weight: 500;
  color: #4a607a;
  padding: 0 0.82rem 0.72rem;
  transition: color var(--transition-base);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${ProjectCard}:hover & {
    color: #3f5673;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.72rem;
    -webkit-line-clamp: 1;
  }
`;

const ProjectTechnologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.42rem 0.7rem;
  font-size: 0.75rem;
  font-family: var(--font-code);
  font-weight: 500;
  color: #fff;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base);
  background: linear-gradient(120deg, var(--brand-sky), var(--brand-teal));
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 16px rgba(16, 27, 45, 0.18);

  &:hover {
    transform: translateY(-2px);
    filter: saturate(1.12);
    box-shadow: 0 12px 18px rgba(16, 27, 45, 0.2);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const ProjectLink = styled.a`
  font-size: 0.8rem;
  font-family: var(--font-code);
  font-weight: 500;
  color: white;
  padding: 0.5rem 0.8rem;
  transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base), background var(--transition-base);
  text-decoration: none;
  background: linear-gradient(120deg, var(--surface-strong), #243454);
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 18px rgba(16, 27, 45, 0.22);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(120deg, var(--brand-teal), var(--brand-orange), var(--brand-pink));
    filter: saturate(1.1);
    box-shadow: 0 14px 22px rgba(16, 27, 45, 0.28);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export {
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  ProjectLink,
};
