import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import { ProjectsData } from "@/data/data";
import Link from "next/link";

function Projects() {
  return (
    <section>
      {/* Projects Header */}
      <Heading title="Projects">
        <Link
          href="https://github.com/abanoub-abdelmessih?tab=repositories"
          className="underline text-sm text-foreground/80"
        >
          See all projects
        </Link>
      </Heading>

      {/* Project Cards */}
      {ProjectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects;
