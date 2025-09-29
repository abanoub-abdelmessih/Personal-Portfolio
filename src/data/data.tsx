import { ExperienceItemType, Project } from "@/types";
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
  "React Native",
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

// Experience
export const WorkExperienceData: ExperienceItemType[] = [
  // ITI
  {
    id: "iti",
    companyName: "Information Technology Institute (ITI)",
    companyLogo: "/assets/experience/iti.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "iti-frontend-trainee",
        title: "Front-End & Cross-Platform Mobile Development Trainee",
        employmentPeriod: "2025 — Present",
        employmentType: "Training",
        icon: "code",
        description: `- Intensive training covering modern web and mobile development.
- Built responsive web apps with React, Next.js, and TypeScript.
- Learned cross-platform mobile development using React Native.
- Practiced state management, performance optimization, and testing.
- Collaborated in agile teams with Git/GitHub workflows.
- Role: Project coordinator – organized team tasks and deadlines.`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "React Native",
          "TailwindCSS",
          "State Management (Redux / Context)",
          "API Integration",
          "Testing (Jest)",
          "Git/GitHub",
          "Agile / Scrum",
        ],

        isExpanded: true,
      },
    ],
  },

  // Route Academy
  {
    id: "route-academy",
    companyName: "Route Academy",
    companyLogo: "/assets/experience/route.png",
    positions: [
      {
        id: "route-frontend-trainee",
        title: "Front-End Developer Trainee",
        employmentPeriod: "03.2024 — 08.2024",
        employmentType: "Training",
        icon: "code",
        description: `- Learned HTML, CSS, JavaScript, Bootstrap, and React.
- Built real-world projects to strengthen problem-solving skills.
- Applied responsive design and modern UI/UX practices.`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "React",
          "Tailwind CSS",
          "Git/GitHub",
        ],
        isExpanded: false,
      },
    ],
  },
];

// Projects
export const ProjectsData: Project[] = [
  // ShopPix Project
  {
    title: "Shoppix",
    description: [
      "Product browsing & detailed product pages",
      "Cart management & checkout flow",
      "Order tracking & management",
      "Real-time data fetching with React Query",
      "Responsive UI built with Tailwind CSS",
    ],
    images: [
      "/assets/shoppix/shoppix.jpg",
      "/assets/shoppix/shoppix_mac.jpg",
      "/assets/shoppix/shoppix_phone.jpg",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "React Query",
      "API",
      "JavaScript",
    ],
    githubUrl: "https://github.com/abanoub-abdelmessih/shoppix",
    demoUrl: "https://shop-pix.vercel.app/",
  },
  // Linked Posts Project
  {
    title: "Linked Posts",
    description: [
      "Create and share posts with others",
      "Comment on posts and engage in discussions",
      "Clean and responsive UI with Material UI",
    ],
    images: [
      "/assets/linkedPosts/linkedPosts.png",
      "/assets/linkedPosts/linkedPosts_profile.png",
      "/assets/linkedPosts/linkedPosts_register.png",
    ],
    technologies: ["Next.js", "TypeScript", "MUI", "Redux", "Axios"],
    githubUrl: "https://github.com/abanoub-abdelmessih/linked-posts",
    demoUrl: "https://linked-posts-gilt.vercel.app",
  },
  // Weather App Project
  {
    title: "Sky Cast",
    description: [
      "Fetches real-time weather data from an external API",
      "Displays current conditions and 3-day forecast",
      "Responsive and user-friendly design",
    ],
    images: ["/assets/skycast.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/abanoub-abdelmessih/Weather-App",
    demoUrl: "https://abanoub-abdelmessih.github.io/Weather-App/",
  },
];
