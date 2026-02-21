import pokerealmImg from "../assets/projects/pokerealm.png";
import clockworkAtelierImg from "../assets/projects/clockwork-atelier.png";
import adviceImg from "../assets/projects/advice.png";
import calculatorImg from "../assets/projects/calculator.png";
import easyTipImg from "../assets/projects/easy-tip.png";
import herbarioImg from "../assets/projects/herbario.png";
import managerPortalImg from "../assets/projects/manager-portal.png";
import pokedexImg from "../assets/projects/pokedex.png";

export const projects = [
  {
    title: "Employee POC Full Auth",
    subtitle: "Authentication POC for employee workflows with secure end-to-end session handling.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
    path: "https://employeepoc-frontend.vercel.app/",
    git: "https://github.com/Anilkumarputta/employee-poc-full-auth",
    img: managerPortalImg,
  },
  {
    title: "Table Search",
    subtitle: "Fast client-side search and filtering for large table datasets.",
    technologies: ["JavaScript", "React", "Filtering"],
    path: "",
    git: "https://github.com/Anilkumarputta/Table-Search",
    img: adviceImg,
  },
  {
    title: "Modern Web Calculator",
    subtitle: "Responsive calculator interface with clean math operation flow.",
    technologies: ["JavaScript", "HTML", "CSS"],
    path: "https://anilkumarputta.github.io/Modern-Web-Calculator/",
    git: "https://github.com/Anilkumarputta/Modern-Web-Calculator",
    img: calculatorImg,
  },
  {
    title: "Easy Tip",
    subtitle: "Utility app for quick percentage-based bill and tip calculations.",
    technologies: ["JavaScript", "HTML", "CSS"],
    path: "https://easy-tip-pi.vercel.app/",
    git: "https://github.com/Anilkumarputta/Easy-Tip",
    img: easyTipImg,
  },
  {
    title: "Clockwork Atelier",
    subtitle: "Task and time workflow concept for focused daily planning.",
    technologies: ["JavaScript", "React", "UX"],
    path: "https://anilkumarputta.github.io/Clockwork-Atelier/",
    git: "https://github.com/Anilkumarputta/Clockwork-Atelier",
    img: clockworkAtelierImg,
  },
  {
    title: "PokeRealm",
    subtitle: "Pokemon-themed interface powered by external API data.",
    technologies: ["JavaScript", "React", "REST API"],
    path: "https://poke-realm-beryl.vercel.app/",
    git: "https://github.com/Anilkumarputta/PokeRealm",
    img: pokerealmImg,
  },
];
