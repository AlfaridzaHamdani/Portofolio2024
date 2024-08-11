import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const ProjectsData = [
  {
    id: 1,
    title: "Seku",
    desc: "E-commerce for Home Decor",
    cat: "Design & Development",
    position: "top",
    img: "./images/Seku-Modal.png",
    modal: "./images/Seku-Modal.png",
    url: "https://alfaridzahamdani.github.io/Seku/",
    github: "https://github.com/AlfaridzaHamdani/Seku",
    studycase:
      "Seku solves the problem of finding identical or similar work setup decor products online by adding direct purchase links to each setup reference. I integrated product data into the database for every photo, enabling automatic display of purchase links. This allows users to instantly see and buy the exact products featured in their desired setups, saving time and effort.",
    tech: [<FaReact />, <RiTailwindCssFill />],
    features: [
      {
        id: 1,
        title: "Integrated products data",
        desc: "User can see the product details and go to the product page",
        img: "./images/seku-feature-1.png",
      },
      {
        id: 2,
        title: "InsZone",
        desc: "Inspiration page, user can see the reference of the setups",
        img: "./images/seku-feature-2.png",
      },
      {
        id: 3,
        title: "Products Page",
        desc: "User can see all products and go to the product page",
        img: "./images/seku-feature-3.png",
      },
    ],
  },
  {
    id: 2,
    title: "HooBank",
    desc: "Company Profile",
    cat: "Development",
    img: "Hoobank-Cover.png",
    modal: "Hoobank-Modal.png",
    url: "https://alfaridzahamdani.github.io/project-HooBank/",
    github: "https://github.com/AlfaridzaHamdani/project-HooBank",
    studycase:
      "I've been diving into modern design concepts through a fantastic project guide by the incredible YouTube channel 'JavaScript Mastery'. Their tutorials are incredibly insightful and have greatly enhanced my understanding of modern design principles. If you're passionate about leveling up your skills, I highly recommend checking out their channel!",
    tech: [<FaReact />, <RiTailwindCssFill />],
    features: [
      {
        id: 1,
        title: "Feature",
        desc: "",
        img: "hoobank-feature-1.png",
      },
      {
        id: 2,
        title: "Product",
        desc: "",
        img: "hoobank-feature-2.png",
      },
      {
        id: 3,
        title: "Client",
        desc: "",
        img: "hoobank-feature-3.png",
      },
    ],
  },
  {
    id: 3,
    title: "Nusantara Trip",
    desc: "Travel Website",
    cat: "Design",
    type: "design",
    date: "2024",
    img: "NusantaraTrip-Cover.png",
    modal: "NusantaraTrip-Modal.png",
    file: "/files/tripToBromoDesign.pdf",
    url: "/files/tripToBromoDesign.pdf",
    studycase:
      "Nusantara Trip is a premier travel service website offering a diverse range of travel packages across Indonesia. In this design, we’re putting the spotlight on Mount Bromo, showcasing it as the ultimate destination. Explore the wonders of Bromo and experience the breathtaking beauty of this iconic landmark with our expertly curated travel options. ",
    tech: [<FaFigma />],
    features: [],
  },
  {
    id: 4,
    title: "Nusantara Code",
    desc: "Education Website",
    cat: "Design",
    type: "design",
    date: "2024",
    img: "NusantaraCode-Cover.png",
    modal: "NusantaraCode-Modal.png",
    url: "/files/nusantaraCodeDesign.pdf",
    studycase:
      "Nusantara Code is your go-to platform for web development courses, designed to turn you into a skilled web developer. Our website offers an array of interactive features, including CodePlay, an online code editor for hands-on practice, competency tests to gauge your progress, and quizzes for each lesson to reinforce your learning. Dive into a comprehensive learning experience and master the art of web development with us!",
    tech: [<FaFigma />],
    features: [],
  },
  {
    id: 5,
    title: "Flowy",
    desc: "Company Profile ",
    cat: "Development",
    date: "2024",
    img: "flowy-cover.png",
    modal: "Flowy-Modal.png",
    url: "https://alfaridzahamdani.github.io/Flowy/",
    github: "https://github.com/AlfaridzaHamdani/Flowy",
    studycase:
      "Flowy is a company profile for a digital product agency. I came across this website design on Pinterest and decided to implement it to hone my slicing skills. The project is a great opportunity to practice and perfect the art of turning design concepts into functional digital products.",
    tech: [<FaHtml5 />, <RiTailwindCssFill />],
    features: [],
  },
  {
    id: 6,
    title: "HarvestTable",
    desc: "Company Profile",
    cat: "Development",
    date: "2024",
    img: "HarvestTable-cover.png",
    modal: "HarvestTable-Modal.png",
    url: "https://alfaridzahamdani.github.io/HarvestTable/",
    github: "https://github.com/AlfaridzaHamdani/HarvestTable",
    studycase:
      "HarvestTable is a company profile for a restourant. I came across this website design on Dribbble and decided to implement it to hone my slicing skills. The project is a great opportunity to practice and perfect the art of turning design concepts into functional digital products.",
    tech: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    features: [],
  },
];
