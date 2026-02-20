import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(16, 24, 32, 0.1);
  overflow: hidden;
  width: min(100%, 340px);
  height: 330px;
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 12px 26px rgba(16, 24, 32, 0.1);
  transition: transform 0.26s ease, box-shadow 0.26s ease;

  .project-hover {
    position: absolute;
    z-index: 3;
    width: calc(100% - 1.5rem);
    max-width: 100%;
    bottom: 0.75rem;
    left: 0.75rem;
    min-height: 5.8rem;
    background: rgba(255, 255, 255, 0.94);
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid rgba(16, 24, 32, 0.1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 30px rgba(16, 24, 32, 0.14);
  }

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 1239px) {
    width: calc(50% - 0.5rem);
  }

  @media screen and (min-width: 1240px) {
    width: calc(33.333% - 0.75rem);
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
  transition: transform 0.35s ease;

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
  font-size: 1rem;
  font-family: var(--font-code);
  font-weight: 700;
  color: var(--text-strong);
  padding: 0.7rem 0.9rem 0.45rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.25s ease;

  @media screen and (max-width: 768px) {
    font-size: 0.82rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.88rem;
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--text-soft);
  padding: 0 0.9rem 0.9rem;
  transition: all 0.25s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    font-size: 0.76rem;
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
