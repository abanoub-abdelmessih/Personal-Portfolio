"use client";

import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

const TechChip = ({ label }: { label: string }) => (
  <span className="px-2.5 py-1 text-xs bg-secondary/20 border-2 border-border rounded-full hover:border-primary/40 hover:bg-secondary/40 duration-200 inline-flex items-center justify-center">
    {label}
  </span>
);

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Limit visible techs on mobile
  const visibleTechs = project.technologies?.slice(0, 3) || [];
  const extraTechCount =
    project.technologies && project.technologies.length > 3
      ? project.technologies.length - 3
      : 0;

  return (
    <div className="p-4 md:p-5 hover:bg-zinc-900/80 duration-300 border-b space-y-3 md:space-y-5 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-xl md:text-3xl font-medium text-foreground/90">
          {project.title}
        </h4>

        <TooltipProvider>
          <div className="flex gap-3">
            {project.githubUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" asChild>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View on GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}

            {project.demoUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" asChild>
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Demo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </TooltipProvider>
      </div>

      {/* Description */}
      <p className="text-xs md:text-sm font-light tracking-wide text-foreground/70">
        {project.description}
      </p>

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {/* Mobile: first 3 + "+N" */}
          <div className="flex flex-wrap gap-1.5 md:hidden">
            {visibleTechs.map((tech, index) => (
              <TechChip key={index} label={tech} />
            ))}

            {extraTechCount > 0 && (
              <span className="px-2.5 py-1 text-xs bg-secondary/30 border-2 border-border rounded-full text-foreground/80">
                +{extraTechCount}
              </span>
            )}
          </div>

          {/* Desktop: all techs */}
          <div className="hidden md:flex flex-wrap gap-1.5">
            {project.technologies.map((tech, index) => (
              <TechChip key={index} label={tech} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
