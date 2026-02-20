import {
  LeftSide,
  RightSide,
  RightSideContent,
  Row,
  SceneLayout,
} from "../../components/common/Layout";
import {
  HeroCta,
  HeroGreeting,
  HeroSubtitle,
  MainTitle,
  WaveIcon,
} from "./components/style";
import { motion } from "framer-motion";
import { texts } from "./../../utils/texts";
import profile from "./../../assets/images/hero.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../../utils/motion";

const Home = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  return (
    <SceneLayout
      className="md"
      id="home"
      $tone="sunrise"
      style={{
        minHeight: "auto",
      }}
    >
      <LeftSide>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.56 }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={staggerItemVariants}>
            <HeroGreeting>
              Hello and welcome
              <WaveIcon className="fa-solid fa-hand-sparkles" aria-hidden="true" />
            </HeroGreeting>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <MainTitle>
              <span>Anil</span>
              <br />
              <span className="accent">Kumar</span>
            </MainTitle>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <HeroSubtitle>{texts.en.landing.subtitle}</HeroSubtitle>
          </motion.div>
          <Row
            className="social-media"
            justify="center"
            style={{
              margin: desktop ? "2rem 0 1.2rem 0" : "1.2rem 0 1rem 0",
            }}
          >
            <motion.div variants={staggerItemVariants}>
              <SocialMediaIcon
                icon={"fa-github"}
                path={"https://github.com/Anilkumarputta"}
              />
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <SocialMediaIcon
                icon={"fa-linkedin-in"}
                path={"http://linkedin.com/in/anil-putta"}
              />
            </motion.div>
          </Row>
          <motion.div variants={staggerItemVariants}>
            <HeroCta href="#contact">
              Let&apos;s Connect
            </HeroCta>
          </motion.div>
        </motion.div>
      </LeftSide>
      <RightSide>
        <RightSideContent>
          <img
            src={profile}
            alt="Anil Kumar hero portrait"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </RightSideContent>
      </RightSide>
    </SceneLayout>
  );
};

export default Home;
