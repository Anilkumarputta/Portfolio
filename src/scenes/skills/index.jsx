import { Column, Row, SceneLayout } from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import PageTitle from "./../../components/common/PageTitle";
import { texts } from "./../../utils/texts";
import Divider from "./../../components/common/Divider";
import Skill from "./components/skill";
import { motion } from "framer-motion";

const Skills = ({ language }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  return (
    <SceneLayout
      className="md"
      id="skills"
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
            {texts[language].skills.title}
          </PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <p>{texts[language].skills.text}</p>
      </Column>
      <Row align="flex-start">
        <Skill skill={texts[language].skills[1]} index={1} />
        <Skill skill={texts[language].skills[2]} index={2} />
        <Skill skill={texts[language].skills[3]} index={3} />
      </Row>
    </SceneLayout>
  );
};

export default Skills;
