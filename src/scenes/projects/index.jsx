import Divider from "../../components/common/Divider";
import { Column, Row, SceneLayout } from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import Project from "./components/project";
import { projects } from "./../../utils/projects";
import Modal from "../../components/common/modal";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Controls,
  EmptyState,
  FilterButton,
  FilterRow,
  ResetButton,
  ResultsText,
  SearchInput,
} from "./components/style";
import {
  staggerContainerVariants,
  staggerItemVariants,
  titleSlideVariants,
} from "../../utils/motion";

const Projects = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState();
  const [search, setSearch] = useState("");
  const [activeTechnology, setActiveTechnology] = useState("All");

  const handleModal = (projectData) => {
    setProject(projectData);
    setModal(true);
  };

  const technologies = useMemo(() => {
    const uniqueTechnologies = new Set(
      projects.flatMap((item) => item.technologies || [])
    );
    return ["All", ...Array.from(uniqueTechnologies).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return projects.filter((item) => {
      const matchesTechnology =
        activeTechnology === "All" || item.technologies?.includes(activeTechnology);

      if (!matchesTechnology) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const subtitle = typeof item.subtitle === "string" ? item.subtitle : "";
      const combinedText =
        `${item.title} ${subtitle} ${(item.technologies || []).join(" ")}`.toLowerCase();

      return combinedText.includes(normalizedSearch);
    });
  }, [search, activeTechnology]);

  const resetFilters = () => {
    setSearch("");
    setActiveTechnology("All");
  };

  return (
    <SceneLayout
      className="md"
      id="projects"
      $tone="violet"
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "auto",
      }}
    >
      <Column width={desktop ? "74%" : "100%"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.56 }}
          variants={titleSlideVariants}
        >
          <PageTitle>{texts.en.projects.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <p style={{ textAlign: "center" }}>{texts.en.projects.text}</p>
        <Controls>
          <SearchInput
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by project name, keyword, or technology..."
            aria-label="Search projects"
          />
          <FilterRow>
            {technologies.map((technology) => (
              <FilterButton
                type="button"
                key={technology}
                $active={activeTechnology === technology}
                onClick={() => setActiveTechnology(technology)}
              >
                {technology}
              </FilterButton>
            ))}
          </FilterRow>
          <ResultsText>
            {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} shown
          </ResultsText>
        </Controls>
      </Column>

      {modal && (
        <Modal setModal={setModal} project={project} />
      )}

      {filteredProjects.length > 0 ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.24 }}
          variants={staggerContainerVariants}
          style={{ width: "100%" }}
        >
          <Row
            align="flex-start"
            justify="center"
            gap={desktop ? "1.1rem" : "0.9rem"}
            style={{ marginTop: desktop ? "0" : "0.75rem" }}
          >
            {filteredProjects.map((project) => (
              <motion.div variants={staggerItemVariants} key={project.title}>
                <Project
                  project={project}
                  handleClick={() => handleModal(project)}
                  isMobile={project?.isMobile}
                />
              </motion.div>
            ))}
          </Row>
        </motion.div>
      ) : (
        <EmptyState>
          <p>No projects matched this filter. Try another search or reset filters.</p>
          <ResetButton type="button" onClick={resetFilters}>
            Reset Filters
          </ResetButton>
        </EmptyState>
      )}
    </SceneLayout>
  );
};

export default Projects;

