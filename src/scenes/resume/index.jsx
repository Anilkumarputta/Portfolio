import { motion } from "framer-motion";
import { Column, SceneLayout } from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import Divider from "../../components/common/Divider";
import { texts } from "../../utils/texts";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  ResumeDescription,
  ResumeIntro,
  ResumeItem,
  ResumeMeta,
  ResumeOrganization,
  ResumeSkill,
  ResumeSkills,
  ResumeTimeline,
  ResumeTitle,
} from "./components/style";
import {
  staggerContainerVariants,
  staggerItemVariants,
  titleSlideVariants,
} from "../../utils/motion";

const Resume = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  const resume = texts.en.resume;

  return (
    <SceneLayout
      className="md"
      id="resume"
      $tone="ocean"
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "auto",
      }}
    >
      <Column width={desktop ? "76%" : "100%"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.56 }}
          variants={titleSlideVariants}
        >
          <PageTitle>{resume.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <ResumeIntro>{resume.text}</ResumeIntro>
      </Column>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainerVariants}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <ResumeTimeline>
          {resume.items.map((item) => (
            <motion.div variants={staggerItemVariants} key={`${item.period}-${item.title}`}>
              <ResumeItem>
                <ResumeMeta>{item.period} - {item.category}</ResumeMeta>
                <ResumeTitle>{item.title}</ResumeTitle>
                <ResumeOrganization>{item.organization}</ResumeOrganization>
                <ResumeDescription>{item.description}</ResumeDescription>
                <ResumeSkills>
                  {item.skills.map((skill) => (
                    <ResumeSkill key={`${item.title}-${skill}`}>{skill}</ResumeSkill>
                  ))}
                </ResumeSkills>
              </ResumeItem>
            </motion.div>
          ))}
        </ResumeTimeline>
      </motion.div>
    </SceneLayout>
  );
};

export default Resume;
