import {
  LeftSide,
  RightSide,
  RightSideContent,
  Row,
  SceneLayout,
} from "../../components/common/Layout";
import { MainTitle, Subtitle } from "./components/style";
import { motion } from "framer-motion";
import { texts } from "./../../utils/texts";
import profile from "./../../assets/images/hero secction.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import SocialMediaIcon from "../../components/SocialMediaIcon";

const Home = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  return (
    <SceneLayout className="md" id="home">
      <RightSide>
        <RightSideContent>
          <img src={profile} alt="Landing" />
        </RightSideContent>
      </RightSide>
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
          <MainTitle>
            {`<Anil`}
            <br />
            {`Kumar/>`}
          </MainTitle>
          <Subtitle>{texts.en.landing.subtitle}</Subtitle>
          <Row
            className="social-media"
            justify="center"
            style={{
              margin: desktop ? "2rem 0" : "1rem 0",
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
            {/* Instagram removed as requested */}
          </Row>
        </motion.div>
      </LeftSide>
    </SceneLayout>
  );
};

export default Home;
