import { FaBootstrap, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Heading } from "../Heading";

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
          <div
            key={name}
            className="group relative text-black/70 hover:text-black duration-300"
          >
            <div className="border border-gray-300 rounded-2xl p-3 md:p-4 flex justify-center items-center aspect-square hover:border-gray-400 hover:shadow-md transition-all duration-300">
              <span className="text-4xl md:text-6xl">{icon}</span>
            </div>

            {/* Mobile tooltip - appears below */}
            <span className=" select-none absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white font-medium px-2 py-1 text-xs rounded whitespace-nowrap transition-opacity duration-300 z-10">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
