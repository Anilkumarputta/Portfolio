import arte from '../assets/projects/arte.png'
import br from '../assets/projects/br-finanças.png'
import patinhas from '../assets/projects/patinhas-felizes.png'
import advice from '../assets/projects/advice.png'
import splitter from '../assets/projects/splitter.png'
import marmoraria from "../assets/projects/marmoraria.png"
import pokedex from "../assets/projects/pokedex.png"
import neuro from "../assets/projects/neuro.png"
import herbario from "../assets/projects/herbario.png"

export const projects = [
    {
        title: "Herbário",
        subtitle: {
            pt: "O Herbário é um aplicativo dedicado ao registro de ervas, reunindo fichas técnicas, usos tradicionais e práticas espirituais associadas às plantas. O projeto contempla conteúdos de diferentes tradições religiosas e culturais, como o Catolicismo e a Umbanda, sempre com respeito e contextualização. Este aplicativo foi desenvolvido como projeto de portfólio, com base em material adquirido legalmente do autor Eduardo Parmeggiani, que serviu como fonte de estudo e referência para a organização das informações. O conteúdo foi transformado em formato digital, sem fins comerciais.",
            en: "Herbário is a mobile application focused on documenting herbs, including technical sheets, traditional uses, and spiritual practices associated with plants. The project brings together content from different religious and cultural traditions, such as Catholicism and Umbanda, always treated with respect and proper context. This application was developed as a portfolio project , based on material legally purchased from the author Eduardo Parmeggiani, which was used as a study and reference source. The content was transformed into a digital format for educational and portfolio purposes only."
        },
        git: "https://github.com/BeatrizNeaime/herbario",
        path: "",
        technologies: ["React Native"],
        img: herbario,
        isMobile: true
    },
    {
        title: "Pokédex",
        subtitle: {
            pt: "Uma Pokédex simples e fácil de usar. Possui a opção de buscar pokémons por nome, habitat ou tipo; além dos três combinados.",
            en: "A simple and easy-to-use Pokédex. It has the option to search for pokémons by name, habitat or type; in addition to the three combined."
        },
        git: "https://github.com/BeatrizNeaime/pokedex",
        path: "https://pokedex-seven-inky.vercel.app",
        technologies: ["React", "Styled-Components", "PokéAPI", "Context API", "C#", "MySQL", "JWTBearer"],
        img: pokedex
    },
    {
        title: "Neuro Training",
        subtitle: {
            pt: "Um aplicativo desenvolvido para ajudar nos exercícios da fisioterapia em  pacientes neurológicos e geriátricos. Este projeto foi feito como auxílio para a minha irmã, estudante de fisioterapia, com o intuito de utilizar a tecnologia como ferramenta para sua profissão e de outros profissionais da área da saúde. Infelizmente, está disponível apenas para Android.",
            en: "An app developed to help with physiotherapy exercises in neurological and geriatric patients. This project was made to help my sister, a physiotherapy student, to use technology as a tool for her profession and other health professionals. Unfortunately, it is only available for Android.",
        },
        technologies: ["React Native"],
        path: "",
        git: "https://github.com/BeatrizNeaime/neuro-training",
        img: neuro,
        isMobile: true
    },
    {
        title: "Arte de Caderno",
        subtitle: {
            pt: "Um site para um campeonato local de desenho e pintura por alunos de escolas públicas. Tema do meu Trabalho de Conclusão de Curso.",
            en: "A website for a local drawing and painting championship by public school students. Theme of my Final Course Work."
        },
        technologies: ["React", "Styled-Components"],
        path: "https://artedecaderno.ifsuldeminas.edu.br",
        git: "https://github.com/ArtedeCaderno-IFSULDEMINAS/Arte-de-Caderno",
        img: arte,
    },
    {
        title: "Marmoraria dos Irmãos",
        subtitle: {
            pt: "Um site para uma marmoraria local. ",
            en: "A website for a local marble shop."
        },
        technologies: ["WordPress"],
        path: "https://www.marmorariadosirmaos.com.br",
        git: null,
        img: marmoraria
    },
    {
        title: "Patinhas Felizes",
        subtitle: {
            pt: "Um site de gerenciamento e controle de animais de um abrigo fictício. Como este projeto foi feito como projeto interdisciplinar, o link do deploy não está disponível.",
            en: "A management and control website for animals in a fictitious shelter. As this project was made as an interdisciplinary project, the deploy link is not available."
        },
        technologies: ["HandleBars", "Express", "MySQL"],
        path: null,
        git: "https://github.com/BeatrizNeaime/PatinhasFelizes",
        img: patinhas
    },
    {
        title: "BR Finanças",
        subtitle: {
            pt: "Um website para controle financeiro. Como este projeto foi feito como projeto interdisciplinar, o link do deploy não está disponível.",
            en: "A financial control website. As this project was made as an interdisciplinary project, the deploy link is not available."
        },
        technologies: ["HandleBars", "Express", "MySQL"],
        path: null,
        git: "https://github.com/BeatrizNeaime/BR-financas",
        img: br
    },
    {
        title: "Advice",
        subtitle: {
            pt: "Precisa de um conselho? Experimente este aplicativo.",
            en: "Need advice? Try this app."
        },
        technologies: ["React", "TailwindCSS"],
        path: "https://imaginative-paletas-b1d609.netlify.app",
        git: "https://github.com/BeatrizNeaime/advice.github.io",
        img: advice
    },
    {
        title: "Splitter",
        subtitle: {
            pt: "Já esteve em um bar com os amigos e não sabia como dividir a conta? Este aplicativo é para você. Simples e fácil de usar.",
            en: "Have you ever been in a bar with friends and didn't know how to split the bill? This app is for you. Simple and easy to use."
        },
        technologies: ["React", "TailwindCSS"],
        path: "https://fm-tip-calculator-pi.vercel.app",
        git: "https://github.com/BeatrizNeaime/FM-tip-calculator",
        img: splitter
    }
]