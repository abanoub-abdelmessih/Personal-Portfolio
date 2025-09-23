import { Github, Linkedin, Mail, Phone } from "lucide-react";

// Contact Links
export const ContactLinks = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/abanoub-abdelmessih/",
    label: "LinkedIn",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/abanoub-abdelmessih",
    label: "GitHub",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:abanoubabdelmessih110@gmail.com",
    label: "Gmail",
  },
  {
    icon: <Phone size={20} />,
    href: "tel:+201559566765",
    label: "Phone",
  },
];

// About Me Data
export const AboutData = (
  <>
    I’m a <span className="font-bold">Frontend Software Engineer</span>{" "}
    passionate about building modern, scalable, and accessible web applications.
    With expertise in{" "}
    <span className="font-bold">React, Next.js, and TypeScript</span>, I create
    clean, component-driven interfaces that transform complex requirements into
    intuitive user experiences. My training at the{" "}
    <span className="font-bold">Information Technology Institute (ITI)</span>{" "}
    gave me a strong technical foundation, and I bring a focus on writing
    maintainable code that delivers real business value.
  </>
);

// Skills
export const SkillsData = [
  // Languages
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",

  // Frameworks & Libraries
  "React",
  "Next.js",
  "Axios",
  "REST APIs",

  // State Management & Data
  "React Query",
  "Redux",
  "Zustand",
  "TanStack Table",
  "i18next",

  // Forms & Validation
  "React Hook Form",
  "Zod",

  // UI & Styling
  "Tailwind CSS",
  "Sass",
  "Bootstrap",
  "MUI",
  "Shadcn/UI",
  "Radix UI",
  "Framer Motion",

  // Tools & Workflow
  "Git",
  "GitHub",
  "Postman",
  "Figma",

  // Testing
  "Jest",
  "React Testing Library",
];
