import {
  ProjectLink,
  ProjectTechnologies,
} from "../../../scenes/projects/components/project/components/style";
import { createPortal } from "react-dom";
import { Row } from "../Layout";
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalOverlay,
  ModalText,
  ModalTitle,
} from "./components/style";

const Modal = ({ setModal, project }) => {
  const handleModal = () => {
    setModal(false);
  };

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <ModalOverlay onClick={() => setModal(false)}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <ModalClose onClick={handleModal}>
          <i className="fa-solid fa-xmark"></i>
        </ModalClose>
        <ModalBody>
          <ModalTitle>
            {project.title}
            <div className="divider"></div>
          </ModalTitle>
          <ModalText>{project.subtitle}</ModalText>
          <ModalText>Links:</ModalText>
          <Row justify="flex-start">
            {project.git && (
              <ProjectLink target="_blank" href={project.git}>
                <i className="fab fa-github"></i> GitHub
              </ProjectLink>
            )}
            {project.path && (
              <ProjectLink target="_blank" href={project.path}>
                <i
                  className={`fas ${
                    project?.isMobile ? "fa-download" : "fa-external-link-alt"
                  }`}
                ></i>{" "}
                {project?.isMobile
                  ? "Download for Android"
                  : "Visit Live"}
              </ProjectLink>
            )}
          </Row>
          <ModalText>Technologies:</ModalText>
          <Row justify="flex-start">
            {project.technologies.map((tech, index) => (
              <ProjectTechnologies key={index}>{tech}</ProjectTechnologies>
            ))}
          </Row>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
