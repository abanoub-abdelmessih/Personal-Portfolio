"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="max-w-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 overflow-hidden pt-0">
      {/* Image Carousel */}
      <Carousel>
        <CarouselContent>
          {project.images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="h-56 w-full">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-contain object-center"
                  width={500}
                  height={500}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>

        {project.technologies?.length ? (
          <CardDescription className="flex gap-2 flex-wrap">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </CardDescription>
        ) : null}
      </CardHeader>

      {/* Content */}
      <CardContent>
        {Array.isArray(project.description) ? (
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.demoUrl && (
          <Button size="sm" className="flex-1" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
