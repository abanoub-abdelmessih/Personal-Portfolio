import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import { ProjectsData } from "@/data/data";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-6">
      {/* Header Section */}

      <div className="md:row-span-2 mb-5 md:mb-10">
        <Heading title="Projects" className="mb-3">
          <Link
            href="https://github.com/abanoub-abdelmessih?tab=repositories"
            className="underline text-foreground/80"
          >
            See all projects
          </Link>
        </Heading>
        <p className="text-sm md:text-base">
          Here&apos;s some of my projects that I have worked on.
        </p>
        <Link
          href="https://github.com/abanoub-abdelmessih?tab=repositories"
          className="flex gap-2 items-center mt-3 text-emerald-400 font-semibold hover:underline text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore more <MoveRight size={16} className="md:size-5" />
        </Link>
      </div>

      {/* Project Cards */}

      <div className="md:row-span-4 md:col-start-1 md:row-start-3 order-2 md:order-none">
        <ProjectCard project={ProjectsData[1]} />
      </div>
      <div className="md:row-span-4 md:col-start-2 md:row-start-1 order-1 md:order-none">
        <ProjectCard project={ProjectsData[0]} />
      </div>
      <div className="md:row-span-4 md:col-start-2 md:row-start-5 order-3 md:order-none">
        <ProjectCard project={ProjectsData[2]} />
      </div>
    </div>
  );
}

export default Projects;
