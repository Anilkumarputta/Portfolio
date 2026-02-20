import { Column, Row, SceneLayout } from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import PageTitle from "./../../components/common/PageTitle";
import { texts } from "./../../utils/texts";
import Divider from "./../../components/common/Divider";
import Skill from "./components/skill";
import { motion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  titleSlideVariants,
} from "../../utils/motion";

const Skills = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  return (
    <SceneLayout
      className="md"
      id="skills"
      $tone="mint"
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
          viewport={{ once: false, amount: 0.56 }}
          variants={titleSlideVariants}
        >
          <PageTitle>{texts.en.skills.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
        <p style={{ textAlign: "center" }}>{texts.en.skills.text}</p>
      </Column>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        variants={staggerContainerVariants}
        style={{ width: "100%" }}
      >
        <Row align="flex-start" justify="center" gap="1rem">
          {[1, 2, 3].map((index) => (
            <motion.div variants={staggerItemVariants} key={index}>
              <Skill skill={texts.en.skills[index]} index={index} />
            </motion.div>
          ))}
        </Row>
      </motion.div>
    </SceneLayout>
  );
};

export default Skills;

