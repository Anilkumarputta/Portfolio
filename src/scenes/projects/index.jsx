import Divider from "../../components/common/Divider";
import { Column, Row, SceneLayout } from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import Project from "./components/project";
import { projects } from "./../../utils/projects";
import Modal from "../../components/common/modal";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = ({ language }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState();

  const handleModal = async (project) => {
    await setProject(project);
    setModal(true);
  };

  return (
    <SceneLayout
      className="md"
      id="projects"
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: desktop ? "center" : "flex-start",
      }}
    >
      <Column width={desktop ? "50%" : "100%"}>
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
          <PageTitle style={{ alignSelf: "flex-start" }}>
            {texts[language].projects.title}
          </PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <p>{texts[language].projects.text}</p>
      </Column>

      {modal && (
        <Modal setModal={setModal} project={project} language={language} />
      )}

      <Row align="flex-start" style={{ marginTop: desktop ? "" : "1rem" }}>
        {projects.map((project, index) => (
          <Project
            project={project}
            language={language}
            handleClick={() => handleModal(project)}
            isMobile={project?.isMobile}
            key={index}
          />
        ))}
      </Row>
    </SceneLayout>
  );
};

export default Projects;
