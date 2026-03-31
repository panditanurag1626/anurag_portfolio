import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaAngular,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems using modern technologies.",
    color: "text-purple-500",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and great user experience are at the core of everything I build.",
    color: "text-pink-500",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write scalable, maintainable, and efficient code following best practices.",
    color: "text-blue-500",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description: "Building responsive and interactive user interfaces.",
    tags: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "JavaScript", icon: FaJsSquare },
      { name: "React-JS", icon: FaReact },
      { name: "Angular", icon: FaAngular },
    ],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Developing server-side logic and APIs.",
    tags: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Testing", icon: FaCode },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    description: "Managing structured and unstructured data.",
    tags: [
      { name: "SQL", icon: FaDatabase },
      { name: "NoSQL", icon: FaDatabase },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    title: "Productivity Tools",
    icon: FaCode,
    description: "Using tools for documentation and presentations.",
    tags: [
      { name: "MS Excel", icon: FaCode },
      { name: "MS Word", icon: FaCode },
      { name: "PowerPoint", icon: FaCode },
    ],
  },
];

export const projects = [
  {
    title: "Car Rental Website",
    description:
      "A responsive website where users can browse cars and book rentals easily.",
    image: "/car-rental.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    icons: [FaHtml5, FaCss3Alt, FaBootstrap],
    view: "https://panditanurag1626.github.io/Car-Rental-Website1/",
  },
  {
    title: "Event Management Website",
    description:
      "An interactive platform to organize and manage events efficiently.",
    image: "/event-management.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare],
    view: "https://panditanurag1626.github.io/eventmanagement/",
  },
  {
    title: "Hotel Management Website",
    description:
      "A modern hotel management system with booking and dashboard features.",
    image: "/hotel-management.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React-JS"],
    icons: [FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact],
    view: "https://hotel-management-website.vercel.app/",
  },
];

export const experience = [
  {
    title: "Portfolio Website",
    duration: "2026 - Present",
    description:
      "Developed a responsive personal portfolio website using React and Tailwind CSS to showcase my projects and skills.",
    color: "purple",
  },
  {
    title: "CRUD Application",
    duration: "2026",
    description:
      "Built a CRUD application using Python and SQL to perform Create, Read, Update, and Delete operations.",
    color: "blue",
  },
  {
    title: "Responsive Web Design",
    duration: "2025 - 2026",
    description:
      "Created multiple responsive web pages using HTML, CSS, Bootstrap, JavaScript, and React-JS with a focus on UI/UX design.",
    color: "green",
  },
];