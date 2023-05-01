import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const skillIcons = [
  { icon: faGitAlt, name: "Git", styles: "text-[#000]" },
  { icon: faGithub, name: "Github", styles: "text-[#000]" },
  {
    icon: faHtml5,
    name: "HTML5",
    styles: "text-[orange]",
  },
  { icon: faCss3Alt, name: "CSS3", styles: "text-[#264de4]" },
  {
    icon: faJs,
    name: "JavaScript",
    styles: "text-[yellow] stroke-[black] stroke-[5px]",
  },
  { icon: faReact, name: "React", styles: "text-[#61DBFB]" },
];

export const skillImages = [
  {
    icon: "/icons/typescript.svg",
    name: "TypeScript",
    credit: "TypeScript Brand Logo",
  },
  {
    icon: "/icons/nextjs.svg",
    name: "Next.js v13",
    credit: "Next.js Brand Logo",
  },
  {
    icon: "/icons/tailwind.svg",
    name: "Tailwind",
    credit: "Tailwind Brand Logo",
  },
];
