// export const experienceData = [
//   // ITI
//   {
//     slug: "front-end-development-iti",
//     title: "Front-End & Cross Platform Mobile Development",
//     imgSrc: "/iti.jpeg",
//     imgAlt: "iti image",
//     level: "Internship",
//     company: "Information Technology Institute (ITI)",
//     year: "2025",
//     description:
//       "Participating in an intensive 5-month scholarship program provided by the Ministry of Communications through ITI, focusing on advanced front-end technologies, cross-platform mobile development, and real-world software engineering practices.",
//     techStack: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "React Native",
//       "Dart",
//       "Flutter",
//       "Redux Toolkit",
//       "Tailwind CSS",
//       "Figma",
//       "Node.js",
//       "Firebase",
//       "Git & GitHub",
//     ],
//     achievements: [
//       "Collaborated within cross-functional teams to develop responsive web and mobile applications under tight deadlines",
//       "Participated in Agile/Scrum-based projects, practicing daily stand-ups, sprint planning, and retrospectives",
//       "Worked closely with UI/UX designers and backend developers to ensure seamless integration and user-friendly interfaces",
//       "Practiced clear and effective communication in both technical discussions and peer code reviews",
//       "Managed time efficiently across multiple modules, assignments, and team tasks to meet project milestones",
//       "Resolved real-world bugs and edge cases through pair programming and collaborative debugging sessions",
//     ],
//   },
//   // ROUTE
//   {
//     slug: "front-end-development-route",
//     title: "Front-End Development",
//     imgSrc: "/route.png",
//     imgAlt: "route academy image",
//     level: "Training Program",
//     company: "Route Academy",
//     year: "2024",
//     description:
//       "Completed a comprehensive 6-month hands-on training program in front-end development, covering essential web technologies, UI design principles, and modern JavaScript frameworks.",
//     techStack: [
//       "HTML5",
//       "CSS3",
//       "JavaScript",
//       "Bootstrap",
//       "TailwindCSS",
//       "React",
//       "Next.js",
//       "Git & GitHub",
//     ],
//     achievements: [
//       "Built multiple responsive websites from scratch using semantic HTML and modern CSS",
//       "Developed interactive UI components and dynamic single-page applications using React",
//       "Gained hands-on experience with version control and collaborative coding using Git & GitHub",
//       "Learned how to debug efficiently and follow best coding practices",
//       "Completed practical projects that simulated real-world front-end workflows",
//     ],
//   },
// ];

import { ExperienceItemType } from "@/components/ui/work-experience";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Information Technology Institute (ITI)",
    companyLogo: "/iti.jpeg",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Front-End & Cross Platform Mobile Development",
        employmentPeriod: "2025",
        employmentType: "Internship",
        description:
          "Participating in an intensive 5-month scholarship program provided by the Ministry of Communications through ITI, focusing on advanced front-end technologies, cross-platform mobile development, and real-world software engineering practices.",
        icon: "education",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "React Native",
          "Dart",
          "Flutter",
          "Redux Toolkit",
          "Tailwind CSS",
          "Figma",
          "Node.js",
          "Firebase",
          "Git & GitHub",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "2",
    companyName: "Route Academy",
    companyLogo: "/route.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "2-1",
        title: "Front-End Development",
        employmentPeriod: "2024",
        employmentType: "Training Program",
        description:
          "Completed a comprehensive 6-month hands-on training program in front-end development, covering essential web technologies, UI design principles, and modern JavaScript frameworks.",
        icon: "education",
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Bootstrap",
          "TailwindCSS",
          "React",
          "Next.js",
          "Git & GitHub",
        ],
        isExpanded: true,
      },
    ],
  },
];
