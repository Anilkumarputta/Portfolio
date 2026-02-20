import { Column, Row, SceneLayout } from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import PageTitle from "./../../components/common/PageTitle";
import { texts } from "./../../utils/texts";
import Divider from "./../../components/common/Divider";
import Skill from "./components/skill";
import { motion } from "framer-motion";

const Skills = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  return (
    <SceneLayout
      className="md"
      id="skills"
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
          <PageTitle>{texts.en.skills.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <p style={{ textAlign: "center" }}>{texts.en.skills.text}</p>
      </Column>
      <Row align="flex-start" justify="center" gap="1rem">
        <Skill skill={texts.en.skills[1]} index={1} />
        <Skill skill={texts.en.skills[2]} index={2} />
        <Skill skill={texts.en.skills[3]} index={3} />
      </Row>
    </SceneLayout>
  );
};

export default Skills;
