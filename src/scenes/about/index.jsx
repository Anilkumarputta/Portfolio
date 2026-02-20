import {
  LeftSide,
  RightSide,
  RightSideContent,
  Row,
  SceneLayout,
} from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import PageTitle from "./../../components/common/PageTitle";
import Divider from "./../../components/common/Divider";
import { technologies } from "./../../utils/tech";
import { colors } from "../../styles/colors";
import profile from "../../assets/images/about.png";
import PDFViewer from "../../components/PDFViewer";
import { motion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  titleSlideVariants,
} from "../../utils/motion";

const About = () => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  const downloadPDF = (file) => {
    const link = document.createElement("a");
    link.href = file || texts.en.cv.cv;
    link.download = texts.en.cv.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SceneLayout
      id="about"
      $tone="ocean"
      style={{
        minHeight: "auto",
      }}
    >
      {desktop && (
        <RightSide>
          <RightSideContent>
            <img src={profile} alt="Anil Kumar" loading="lazy" decoding="async" />
          </RightSideContent>
        </RightSide>
      )}

      <LeftSide>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.55 }}
          variants={titleSlideVariants}
        >
          <PageTitle>{texts.en.about.title}</PageTitle>
        </motion.div>
        <Divider width={"30%"} />

        <p style={{ fontSize: "0.95rem", lineHeight: 1.62 }}>
          {texts.en.about.text} {texts.en.about.text2}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.48 }}
          variants={staggerContainerVariants}
        >
          <Row
          justify={desktop ? "flex-start" : "center"}
          style={{
            margin: "1.2rem 0",
          }}
          >
            {technologies.map((tech, index) => (
              <motion.div variants={staggerItemVariants} key={tech + index}>
                <Row width="max-content">
                  <span
                    style={{
                      color: colors.purple,
                    }}
                  >
                    &#10148;
                  </span>
                  <p>{tech}</p>
                </Row>
              </motion.div>
            ))}
          </Row>
        </motion.div>

        <p style={{ marginTop: "0.8rem", fontSize: "0.92rem" }}>{texts.en.about.text3}</p>

        <PDFViewer onClick={() => downloadPDF(texts.en.about.article)}>
          <i className="fa-regular fa-file-pdf"></i> {texts.en.cv.btn}
        </PDFViewer>
      </LeftSide>
    </SceneLayout>
  );
};

export default About;

