import {
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFramer,
  SiI18Next,
  SiNextdotjs,
  SiPostman,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { Heading } from "../Heading";
import { StackItem } from "./StackItem";

export const StackSection = () => {
  const technologies = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiFramer />, name: "Framer Motion" },
    { icon: <SiReactquery />, name: "React Query" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiI18Next />, name: "react-i18next" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiZod />, name: "Zod" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Post Man" },
  ];

  return (
    <section className="mt-8 md:mt-16">
      <div className="max-w-4xl mx-auto">
        <Heading title={"Tech Stack"} />

        <div className="border-l-2 border-gray-200 pl-4 md:pl-6 py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 select-none">
            {technologies.map(({ icon, name }) => (
              <StackItem key={name} icon={icon} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
