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
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeroGreeting>
            Hello and welcome
            <WaveIcon className="fa-solid fa-hand-sparkles" aria-hidden="true" />
          </HeroGreeting>
          <MainTitle>
            <span>Anil</span>
            <br />
            <span className="accent">Kumar</span>
          </MainTitle>
          <HeroSubtitle>{texts.en.landing.subtitle}</HeroSubtitle>
          <Row
            className="social-media"
            justify="center"
            style={{
              margin: desktop ? "2rem 0 1.2rem 0" : "1.2rem 0 1rem 0",
            }}
          >
            <SocialMediaIcon
              icon={"fa-github"}
              path={"https://github.com/Anilkumarputta"}
            />
            <SocialMediaIcon
              icon={"fa-linkedin-in"}
              path={"http://linkedin.com/in/anil-putta"}
            />
          </Row>
          <HeroCta href="#contact">
            Let&apos;s Connect
          </HeroCta>
        </motion.div>
      </LeftSide>
      <RightSide>
        <RightSideContent>
          <img src={profile} alt="Anil Kumar hero portrait" />
        </RightSideContent>
      </RightSide>
    </SceneLayout>
  );
};

export default Home;
