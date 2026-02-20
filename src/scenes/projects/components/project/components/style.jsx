import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.56));
  border: 1px solid rgba(16, 24, 32, 0.1);
  overflow: hidden;
  width: 100%;
  height: clamp(240px, 30vw, 330px);
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(16, 24, 32, 0.12);
  transition: transform 0.26s ease, box-shadow 0.26s ease;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: -34% -28% auto;
    height: 58%;
    background: radial-gradient(circle, rgba(32, 180, 170, 0.24), rgba(32, 180, 170, 0));
    filter: blur(12px);
    pointer-events: none;
    z-index: 0;
  }

  .project-hover {
    position: absolute;
    z-index: 2;
    width: calc(100% - 1.5rem);
    max-width: 100%;
    bottom: 0.75rem;
    left: 0.75rem;
    height: 3.3rem;
    background: linear-gradient(125deg, rgba(16, 24, 32, 0.86), rgba(16, 24, 32, 0.64));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: height 0.26s ease;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.16);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 36px rgba(16, 24, 32, 0.18);
  }

  &:hover .project-hover {
    height: 8.5rem;
  }

  &:hover .project-image {
    transform: scale(1.06);
    filter: saturate(1.08) contrast(1.04);
  }

  @media screen and (max-width: 768px) {
    height: 250px;
  }

  @media screen and (max-width: 480px) {
    &:hover .project-hover {
      height: 7.1rem;
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
  background-position: center top;
  object-fit: cover;
  overflow: hidden;
  background-color: rgba(16, 24, 32, 0.12);
  background-image: url(${(props) =>
    props.src ? props.src : "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"});
  transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.55s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(16, 24, 32, 0.04) 22%, rgba(16, 24, 32, 0.45) 100%);
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
  font-size: 1rem;
  font-family: var(--font-code);
  font-weight: 700;
  color: #f7f1de;
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
  color: rgba(247, 241, 222, 0.9);
  padding: 0 0.9rem 0.9rem;
  transition: all 0.25s ease;

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
