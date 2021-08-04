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

import memoriesImage from "../assets/images/dynamic-webpage/memories-media.png";
import blogImage from "../assets/images/dynamic-webpage/blog.png";
import ipAddressImage from "../assets/images/dynamic-webpage/ip-address-tracker.png";
import youtubeApiImage from "../assets/images/dynamic-webpage/api-youtube.png";
import tipCalImage from "../assets/images/dynamic-webpage/tip-calc.png";
import todoAppImage from "../assets/images/dynamic-webpage/todo-app.png";
import countriesApiImage from "../assets/images/static-webpage/countries-apis-page.png";
import bookmarkImage from "../assets/images/static-webpage/bookmark-landing-page.png";
import fyloImage from "../assets/images/static-webpage/fylo-landing-page.png";
import jobfilteringImage from "../assets/images/static-webpage/job-listing-filtering.png";
import manageLandingImage from "../assets/images/static-webpage/manage-landing-page.png";
import urlImage from "../assets/images/static-webpage/url-shortner.png";

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
    image: memoriesImage,
    tabHeader: "Dynamic Web Page",
    title: "Memories-Media",
    tools: ["React", "Express", "Node", "Mongo", "Redux"],
    content:
      "The App is called 'Memories-Media' and it is a social media app that allows users to post interesting events that happened in their lives. User can create, delete, update, and read their memories",
    liveDemo: "https://github.com/SwastikSonkusare/Memories_Media",
    code: "https://memories-media-js.netlify.app/posts",
  },
  {
    id: 2,
    image: blogImage,
    tabHeader: "Dynamic Web Page",
    title: "Blog",
    tools: ["Javascript", "Express", "Node", "Mongo"],
    content:
      "A full tools web app where user can read, write, delete and update their blogs.",
    liveDemo: "https://infinite-fortress-57913.herokuapp.com/blogs",
    code: "https://github.com/SwastikSonkusare/Blog",
  },
  {
    id: 3,
    image: ipAddressImage,
    tabHeader: "Dynamic Web Page",
    title: "Ip Address Tracker",
    tools: ["React", "Javascript"],
    content:
      "An Ip Address Tracker which tracks your location using IP GeoLocation API and generated map using react-google-maps",
    liveDemo: "https://ip-address-tracker-jsx.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Youtube-API",
  },
  {
    id: 4,
    image: youtubeApiImage,
    tabHeader: "Dynamic Web Page",
    title: "Youtube Api Clone",
    tools: ["Javascript"],
    content: "A youtube-clone-api where user can search and watch videos.",
    liveDemo: "https://youtube-clone-api.netlify.app/",
    code: "https://github.com/SwastikSonkusare/IP-Address-Tracker",
  },

  {
    id: 5,
    image: tipCalImage,
    tabHeader: "Dynamic Web Page",
    title: "Tip Calculator",
    tools: ["Javascript"],
    content: "A simple tip calculator build using html, css and javascript",
    liveDemo: "https://tip-calc-fm.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Tip-Calc",
  },
  {
    id: 6,
    image: todoAppImage,
    tabHeader: "Dynamic Web Page",
    title: "Todo App",
    tools: ["React"],
    content:
      "A simple todo app build using html, css/sass and react. A user can create, delete and save a todo.",
    liveDemo: "https://todo-app-jsx.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Todo-App",
  },
  {
    id: 7,
    image: countriesApiImage,
    tabHeader: "Static Web Page",
    title: "REST Countries APIS",
    tools: ["React"],
    content:
      "A simple web app which pulls the data from rest countries api and displays it on the screen based on search and filtering",
    liveDemo: "https://countries-apis.netlify.app/",
    code: "https://github.com/SwastikSonkusare/REST-Countries-API",
  },
  {
    id: 8,
    image: bookmarkImage,
    tabHeader: "Static Web Page",
    title: "Bookmark Landing Page",
    tools: ["React"],
    content: "A bookmark landing page build using html, css/sass and react",
    liveDemo: "https://bookmark-landing-fm.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Bookmark-Landing-Page",
  },
  {
    id: 9,
    image: fyloImage,
    tabHeader: "Static Web Page",
    title: "Fylo Landing Page",
    tools: ["Html", "Css", "Sass"],
    content: "A landing page build using html, css/sass and react",
    liveDemo: "https://fylo-landing-fm.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Fylo-dark-theme-landing-page",
  },
  {
    id: 10,
    image: jobfilteringImage,
    tabHeader: "Static Web Page",
    title: "Job Filtering Listing",
    tools: ["React"],
    content:
      "A web app which filters and display the data based on user's selection for jobs. It build using html, css/sass and react",
    liveDemo: "https://job-listing-fm.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Job-listing-with-filtering",
  },
  {
    id: 11,
    image: manageLandingImage,
    tabHeader: "Static Web Page",
    title: "Manage Landing Page",
    tools: ["React"],
    content: "A manage landing page build using html, css/sass and react",
    liveDemo: "https://manage-landing-page-fm.netlify.app/",
    code: "https://github.com/SwastikSonkusare/Manage-Landing-Page",
  },
  {
    id: 12,
    image: urlImage,
    tabHeader: "Static Web Page",
    title: "Url Shortner",
    tools: ["React"],
    content:
      "An url shortner web app which shortnes the url based on the input. It shortnes the url using shrtcode api and gives the result.",
    liveDemo: "https://url-shortening-page.netlify.app/",
    code: "https://github.com/SwastikSonkusare/URL-shortening-API-landing-page",
  },
];
