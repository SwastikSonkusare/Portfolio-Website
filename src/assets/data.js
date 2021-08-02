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
} from "@fortawesome/free-brands-svg-icons";

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
    content: "+(91)-9930243701",
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

export const socialMediaIcons = [faLinkedin, faInstagram, faGithub];

export const projects = [
  {
    id: 1,
    image: "../assets/images/dynamic webpage/memories-media.png",
    tabHeader: "dynamic",
    content:
      "The App is called 'Memories-Media' and it is a social media app that allows users to post interesting events that happened in their lives. User can create, delete, update, and read their memories",
    liveDemo: "https://github.com/SwastikSonkusare/Memories_Media",
    code: "https://memories-media-js.netlify.app/posts",
  },
  {
    id: 2,
    image: "../assets/images/dynamic webpage/blog.png",
    tabHeader: "dynamic",
    content:
      "A full stack web app where user can read, write, delete and update their blogs.",
    liveDemo: "https://infinite-fortress-57913.herokuapp.com/blogs",
    code: "https://github.com/SwastikSonkusare/Blog",
  },
  {
    id: 3,
    image: "../assets/images/dynamic webpage/ip-address-tracker.png",
    tabHeader: "dynamic",
    content:
      "An Ip Address Tracker which tracks your location using IP GeoLocation API and generated map using react-google-maps",
    liveDemo: "https://ip-address-tracker-jsx.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Youtube-API",
  },
  {
    id: 4,
    image: "../assets/images/dynamic webpage/api-youtube.png",
    tabHeader: "dynamic",
    content: "A youtube-clone-api where user can search and watch videos.",
    liveDemo: "https://youtube-clone-api.netlify.app/",
    code: "https://github.com/SwastikSonkusare/IP-Address-Tracker",
  },

  {
    id: 5,
    image: "../assets/images/dynamic webpage/tip-calc.png",
    tabHeader: "dynamic",
    content: "A simple tip calculator build using html, css and javascript",
    liveDemo: "https://tip-calc-fm.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Tip-Calc",
  },
  {
    id: 6,
    image: "../assets/images/dynamic webpage/todo-app.png",
    tabHeader: "dynamic",
    content: "A simple todo app build using html, css/sass and react",
    liveDemo: "https://todo-app-jsx.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Todo-App",
  },
];
