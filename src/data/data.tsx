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
  {
    title: "ShopPix",
    description:
      "Full-featured e-commerce platform with advanced filtering, real-time search, and server-side pagination. Secure JWT authentication with HTTP-only cookies, full i18n (EN/AR) + RTL support using Next-Intl, persistent cart & wishlist, Stripe integration, and responsive UI using Tailwind & shadcn/ui. Utilizes React Query for caching and background revalidation, achieving a 95+ Lighthouse performance score.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "TailwindCSS",
      "shadcn/ui",
      "Next Intl",
      "Stripe",
      "JWT Auth",
      "React Hook Form",
      "Zod",
    ],
    githubUrl: "https://github.com/abanoub-abdelmessih/shoppix",
    demoUrl: "https://shop-pix.vercel.app/",
  },
  {
    title: "Codexa",
    description:
      "Full-stack e-learning platform with multi-role dashboards (Admin, Instructor, Student) and fully responsive UI. Instructors manage courses while students enroll, save content, and track tasks. Includes a discussion community with questions, comments, and likes. Uses Zustand for scalable state and follows collaborative Git workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "shadcn/ui",
      "Next Intl",
      "API",
    ],
    githubUrl: "https://github.com/iti-frontend/Codexa",
    demoUrl: "https://codexa-nine.vercel.app/",
  },
  {
    title: "Quizium",
    description:
      "Role-based exam management platform (User & Admin) built with Next.js Server Components. Includes secure JWT auth with server-side authorization, protected routes, and integration with a production backend supporting full CRUD operations. Reusable UI with React Hook Form + Zod and scalable server-layer business logic.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "JWT Auth",
      "Server Components",
      "React Hook Form",
      "Zod",
      "API",
    ],
    githubUrl: "https://github.com/Lumix-projects/Quizium",
    demoUrl: "https://quizium-one.vercel.app/",
  },
];
