import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from "./components/style";

const Project = ({ project, language, handleClick }) => {
  return (
    <ProjectCard onClick={handleClick}>
      <ProjectImage src={project.img} />
      <div className="project-hover">
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.subtitle[language]}</ProjectDescription>
      </div>
    </ProjectCard>
  );
};

export default Project;
