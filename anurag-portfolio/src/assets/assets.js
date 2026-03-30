import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode,
  FaReact,
  FaServer,
  FaDatabase
} from "react-icons/fa";

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple-500",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink-500",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue-500",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description: "Building user interfaces and responsive designs.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Server-side development and application logic.",
    tags: ["Python", "Django"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    description: "Working with databases and queries.",
    tags: ["SQL", "NoSQL"],
  },
];