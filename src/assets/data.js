import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faMapMarked,
  faEnvelopeSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faSass,
  faGit,
  faBitbucket,
  faNpm,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";

import todoAppImage from "../assets/images/todo-app.png";
// import bookmarkImage from "../assets/images/static-webpage/bookmark-landing-page.png";
// import fyloImage from "../assets/images/static-webpage/fylo-landing-page.png";
// import urlImage from "../assets/images/static-webpage/url-shortner.png";
import mappin from "../assets/images/mappin.png";

export const techLogos = [
  {
    id: 1,
    icon: faHtml5,
    content: "Html5",
  },
  {
    id: 2,
    icon: faCss3,
    content: "Css3",
  },
  {
    id: 3,
    icon: faJsSquare,
    content: "Javascript",
  },
  {
    id: 4,
    icon: faReact,
    content: "React",
  },
  {
    id: 5,
    icon: faSass,
    content: "Sass",
  },
  {
    id: 6,
    icon: faGit,
    content: "Git",
  },
  {
    id: 7,
    icon: faBitbucket,
    content: "Bitbucket",
  },
  {
    id: 8,
    icon: faNpm,
    content: "Npm",
  },
  {
    id: 9,
    icon: faYarn,
    content: "Yarn",
  },
];

export const contactLogos = [
  {
    id: 1,
    icon: faMapMarked,
    content: "7/42, Bpcl Staff Colony, Chembur, Mumbai.",
  },
  {
    id: 2,
    icon: faEnvelopeSquare,
    content: "swastik.sonkusare18@gmail.com",
  },
  {
    id: 3,
    icon: faPhone,
    content: "(+91)-9930243701",
  },
];

export const liItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Me",
    link: "/about",
  },
  {
    id: 3,
    name: "My Work",
    link: "/work",
  },
  {
    id: 4,
    name: "How to Reach Me",
    link: "/contact",
  },
];

export const socialMediaIcons = [
  {
    id: 1,
    logo: faLinkedin,
    link: "https://www.linkedin.com/in/swastik-sonkusare-2b8679176",
  },
  {
    id: 2,
    logo: faGithub,
    link: "https://github.com/SwastikSonkusare",
  },
  {
    id: 3,
    logo: faInstagram,
    link: "https://www.instagram.com/fire_bolt17/",
  },
];

export const projects = [
  {
    id: 1,
    image: mappin,
    title: "Map-Pin!",
    tools: ["React", "Express", "Node", "Mongo"],
    content:
      "The App is called Map-Pin! It allows user to pin any location and add details to that pin. It is MERN stack application which involves user authentication.",
    liveDemo: "https://mappin-i9ma.onrender.com/",
    code: "https://github.com/SwastikSonkusare/Map-Pin-frontend",
  },

  {
    id: 2,
    image: todoAppImage,
    tabHeader: "Dynamic Web Page",
    title: "Todo App",
    tools: ["Html", "Css", "Sass", "React"],
    content:
      "A simple todo app with dark and light theme build using html, css/sass and react. A user can create, delete and save a todo.",
    liveDemo: "https://todo-app-jsx.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Todo-App",
  },
];
