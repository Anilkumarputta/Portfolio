import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from "./components/style";

const Project = ({ project, language, handleClick }) => {
  const subtitle =
    typeof project.subtitle === "string"
      ? project.subtitle
      : project.subtitle?.[language] || "";

  return (
    <ProjectCard onClick={handleClick}>
      <ProjectImage className="project-image" src={project.img} />
      <div className="project-hover">
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{subtitle}</ProjectDescription>
      </div>
    </ProjectCard>
  );
};

export default Project;
