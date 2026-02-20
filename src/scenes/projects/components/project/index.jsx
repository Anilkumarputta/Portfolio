import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from "./components/style";

const Project = ({ project, language, handleClick }) => {
  const fallbackImage =
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80";
  const subtitle =
    typeof project.subtitle === "string"
      ? project.subtitle
      : project.subtitle?.[language] || "";

  return (
    <ProjectCard onClick={handleClick}>
      <ProjectImage className="project-image">
        <img
          src={project.img || fallbackImage}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
        />
      </ProjectImage>
      <div className="project-hover">
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{subtitle}</ProjectDescription>
      </div>
    </ProjectCard>
  );
};

export default Project;
