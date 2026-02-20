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
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTitle>{resume.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <ResumeIntro>{resume.text}</ResumeIntro>
      </Column>

      <ResumeTimeline>
        {resume.items.map((item) => (
          <ResumeItem key={`${item.period}-${item.title}`}>
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
        ))}
      </ResumeTimeline>
    </SceneLayout>
  );
};

export default Resume;
