import { FaBootstrap, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Heading } from "../Heading";
import { StackItem } from "./StackItem";

export const StackSection = () => {
  const icons = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiReactquery />, name: "React Query" },
  ];

  return (
    <section className="mt-5 md:mt-10 py-4 md:py-8">
      <Heading title={"Stack"} />
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
        {icons.map(({ icon, name }) => (
          <StackItem icon={icon} name={name} key={name} />
        ))}
      </div>
    </section>
  );
};
