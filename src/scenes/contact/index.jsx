import {
  Column,
  LeftSide,
  RightSide,
  RightSideContent,
  SceneLayout,
} from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import Divider from "./../../components/common/Divider";
import profile from "./../../assets/images/contact.png";
import { Button, FormGroup, FormStatus, Input, Label, TextArea } from "./components/style";
import Loading from "../../components/common/Loading";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_ilga7yp";
const TEMPLATE_ID = "template_dy0u7yh";
const USER_ID = "_dkHQucs13j32kCb7";

const Contact = () => {
  const desktop = useMediaQuery("(min-width: 1019px)");
  const [state, setState] = useState({
    status: "idle",
    message: "",
    submitting: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ status: "idle", message: "", submitting: true });
    const form = event.target;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
      setState({
        status: "success",
        message: "Thanks for your message. I will get back to you soon.",
        submitting: false,
      });
      form.reset();
    } catch (error) {
      setState({
        status: "error",
        message: error?.text || "There was an error sending your message. Please try again.",
        submitting: false,
      });
    }
  };

  return (
    <SceneLayout
      className="md"
      id="contact"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {state.submitting && <Loading />}
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
          <PageTitle>{texts.en.contact.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
      </Column>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: desktop ? "2.4rem" : "1.4rem",
          flexDirection: desktop ? "row" : "column",
        }}
      >
        <RightSide>
          <RightSideContent>
            <img src={profile} alt="Anil Kumar" />
          </RightSideContent>
        </RightSide>
        <LeftSide>
          <p>{texts.en.contact.text}</p>
          <form
            id="form"
            onSubmit={handleSubmit}
            style={{
              margin: "2rem 0",
            }}
          >
            <Column>
              {state.status !== "idle" && (
                <FormStatus $type={state.status} role="status" aria-live="polite">
                  {state.message}
                </FormStatus>
              )}
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                  minLength={2}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="email"
                  required
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="tel"
                  placeholder="Phone (optional)"
                  name="phone"
                  id="phone"
                  pattern="^[0-9\-\+\s()]{7,}$"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  type="text"
                  placeholder="Message"
                  cols={30}
                  rows={10}
                  name="message"
                  id="message"
                  required
                  minLength={10}
                />
              </FormGroup>
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : texts.en.contact.btn}
              </Button>
            </Column>
          </form>
        </LeftSide>
      </div>
    </SceneLayout>
  );
};

export default Contact;
