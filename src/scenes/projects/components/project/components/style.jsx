import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.74));
  border: 1px solid rgba(25, 32, 48, 0.16);
  overflow: hidden;
  width: min(100%, 320px);
  height: clamp(220px, 24vw, 290px);
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(20, 28, 45, 0.12);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);

  .project-hover {
    position: absolute;
    z-index: 3;
    width: calc(100% - 1.5rem);
    max-width: 100%;
    bottom: 0.75rem;
    left: 0.75rem;
    min-height: 5.1rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(248, 252, 255, 0.84));
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid rgba(25, 32, 48, 0.1);
    box-shadow: 0 8px 18px rgba(20, 28, 45, 0.12);
    transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base);
  }

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 24px 36px rgba(20, 28, 45, 0.22);
    border-color: rgba(47, 134, 255, 0.32);
  }

  &:hover .project-image {
    transform: scale(1.08);
    filter: saturate(1.18);
  }

  &:hover .project-image::before {
    opacity: 0.34;
  }

  &:hover .project-hover {
    transform: translateY(-2px);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(242, 249, 255, 0.9));
    box-shadow: 0 12px 20px rgba(20, 28, 45, 0.16);
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
    background: linear-gradient(160deg, rgba(47, 134, 255, 0.2), rgba(241, 69, 181, 0.14), rgba(255, 127, 63, 0.08));
    opacity: 0.18;
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
  color: #17203a;
  padding: 0.62rem 0.82rem 0.35rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.25s ease;

  @media screen and (max-width: 768px) {
    font-size: 0.78rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.8rem;
  font-family: var(--font-body);
  font-weight: 500;
  color: #53667d;
  padding: 0 0.82rem 0.72rem;
  transition: all 0.25s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

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
  transition: all 0.25s ease;
  background-color: var(--brand-sky);
  border-radius: 10px;

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
  transition: all 0.25s ease;
  text-decoration: none;
  background: var(--surface-strong);
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(120deg, var(--brand-teal), var(--brand-orange));
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
