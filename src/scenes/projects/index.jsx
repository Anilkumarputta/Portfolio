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
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Column width={desktop ? "70%" : "100%"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
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
        <Row
          align="flex-start"
          justify="center"
          gap="1rem"
          style={{ marginTop: desktop ? "0" : "1rem" }}
        >
          {filteredProjects.map((project) => (
            <Project
              project={project}
              handleClick={() => handleModal(project)}
              isMobile={project?.isMobile}
              key={project.title}
            />
          ))}
        </Row>
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
