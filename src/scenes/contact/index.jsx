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
import {
  Button,
  ContactFormCard,
  ContactSplit,
  FormHint,
  FormGroup,
  FormStatus,
  HoneypotField,
  Input,
  Label,
  TextArea,
} from "./components/style";
import Loading from "../../components/common/Loading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  staggerContainerVariants,
  staggerItemVariants,
  titleSlideVariants,
} from "../../utils/motion";

const SERVICE_ID = "service_ilga7yp";
const TEMPLATE_ID = "template_dy0u7yh";
const USER_ID = "_dkHQucs13j32kCb7";
const RATE_LIMIT_KEY = "portfolio_contact_rate_limit_v1";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 3;
const RATE_LIMIT_COOLDOWN_MS = 60 * 1000;

const parseRateLimit = () => {
  if (typeof window === "undefined") {
    return { attempts: [], blockedUntil: 0 };
  }

  try {
    const raw = window.localStorage.getItem(RATE_LIMIT_KEY);

    if (!raw) {
      return { attempts: [], blockedUntil: 0 };
    }

    const parsed = JSON.parse(raw);
    return {
      attempts: Array.isArray(parsed?.attempts) ? parsed.attempts : [],
      blockedUntil: Number(parsed?.blockedUntil) || 0,
    };
  } catch {
    return { attempts: [], blockedUntil: 0 };
  }
};

const persistRateLimit = (payload) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(payload));
};

const Contact = () => {
  const desktop = useMediaQuery("(min-width: 1280px)");
  const [state, setState] = useState({
    status: "idle",
    title: "",
    message: "",
    submitting: false,
  });
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    const current = parseRateLimit();
    const remainingSeconds = Math.max(
      0,
      Math.ceil((current.blockedUntil - Date.now()) / 1000)
    );

    if (remainingSeconds > 0) {
      setCooldownRemaining(remainingSeconds);
    }
  }, []);

  useEffect(() => {
    if (cooldownRemaining <= 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCooldownRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldownRemaining]);

  const registerAndValidateAttempt = () => {
    const now = Date.now();
    const current = parseRateLimit();
    const activeAttempts = current.attempts.filter(
      (attempt) => now - attempt < RATE_LIMIT_WINDOW_MS
    );

    if (current.blockedUntil > now) {
      const remainingSeconds = Math.max(
        1,
        Math.ceil((current.blockedUntil - now) / 1000)
      );
      setCooldownRemaining(remainingSeconds);
      persistRateLimit({
        attempts: activeAttempts,
        blockedUntil: current.blockedUntil,
      });
      return { allowed: false, remainingSeconds };
    }

    if (activeAttempts.length >= RATE_LIMIT_MAX_ATTEMPTS) {
      const blockedUntil = now + RATE_LIMIT_COOLDOWN_MS;
      const remainingSeconds = Math.ceil(RATE_LIMIT_COOLDOWN_MS / 1000);
      setCooldownRemaining(remainingSeconds);
      persistRateLimit({ attempts: activeAttempts, blockedUntil });
      return { allowed: false, remainingSeconds };
    }

    activeAttempts.push(now);
    persistRateLimit({ attempts: activeAttempts, blockedUntil: 0 });
    return { allowed: true, remainingSeconds: 0 };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const honeypotValue = String(formData.get("website") || "").trim();

    setState({ status: "idle", title: "", message: "", submitting: true });

    if (honeypotValue) {
      setState({
        status: "success",
        title: "Message received",
        message: "Thanks for reaching out. I will get back to you soon.",
        submitting: false,
      });
      form.reset();
      return;
    }

    const attemptState = registerAndValidateAttempt();

    if (!attemptState.allowed) {
      setState({
        status: "warning",
        title: "Please slow down",
        message: `Too many attempts detected. Try again in ${attemptState.remainingSeconds}s.`,
        submitting: false,
      });
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
      setState({
        status: "success",
        title: "Message sent",
        message: "Thanks for your message. I will get back to you soon.",
        submitting: false,
      });
      form.reset();
    } catch (error) {
      setState({
        status: "error",
        title: "Delivery failed",
        message:
          error?.text ||
          "There was an error sending your message. Please try again in a moment.",
        submitting: false,
      });
    }
  };

  return (
    <SceneLayout
      className="md"
      id="contact"
      $tone="sunset"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "auto",
      }}
    >
      {state.submitting && <Loading />}
      <Column width={desktop ? "62%" : "100%"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.56 }}
          variants={titleSlideVariants}
        >
          <PageTitle>{texts.en.contact.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
      </Column>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        variants={staggerContainerVariants}
        style={{ width: "100%" }}
      >
      <ContactSplit $desktop={desktop}>
        {desktop && (
          <motion.div variants={staggerItemVariants}>
            <RightSide>
              <RightSideContent>
                <img src={profile} alt="Anil Kumar" loading="lazy" decoding="async" />
              </RightSideContent>
            </RightSide>
          </motion.div>
        )}
        <motion.div variants={staggerItemVariants} style={{ width: desktop ? "44%" : "100%" }}>
        <LeftSide>
          <p>{texts.en.contact.text}</p>
          <ContactFormCard>
            <form id="form" onSubmit={handleSubmit}>
              <Column style={{ gap: "0.72rem" }}>
                {state.status !== "idle" && (
                  <FormStatus $type={state.status} role="status" aria-live="polite">
                    <span className="status-icon" aria-hidden="true">
                      {state.status === "success" ? "OK" : state.status === "warning" ? "!" : "x"}
                    </span>
                    <span className="status-body">
                      <strong>{state.title}</strong>
                      <small>{state.message}</small>
                    </span>
                  </FormStatus>
                )}
                <HoneypotField>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </HoneypotField>
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
                    rows={5}
                    name="message"
                    id="message"
                    required
                    minLength={10}
                    maxLength={1200}
                  />
                </FormGroup>
                <FormHint>
                  {cooldownRemaining > 0
                    ? `Cooldown active: ${cooldownRemaining}s`
                    : "Please include key details such as goals, timeline, and scope."}
                </FormHint>
                <Button type="submit" disabled={state.submitting || cooldownRemaining > 0}>
                  {state.submitting
                    ? "Sending..."
                    : cooldownRemaining > 0
                      ? `Wait ${cooldownRemaining}s`
                      : texts.en.contact.btn}
                </Button>
              </Column>
            </form>
          </ContactFormCard>
        </LeftSide>
        </motion.div>
      </ContactSplit>
      </motion.div>
    </SceneLayout>
  );
};

export default Contact;

