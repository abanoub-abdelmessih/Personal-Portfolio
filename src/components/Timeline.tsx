import { Badge } from "@/components/ui/badge";
import { Bot, Bug, Building2, Calendar, Database } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    icon: Bot,
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    icon: Database,
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2018 - 2021",
    description:
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    icon: Bug,
  },
];

export default function Timeline() {
  return (
    <div className="relative ml-2 sm:ml-4">
      {/* Timeline line */}
      <div className="absolute left-0 inset-y-0 w-px bg-border" />

      <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index
          ) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="relative pl-8 sm:pl-12 border-0"
            >
              {/* Timeline Icon */}
              <div className="absolute left-0 -translate-x-1/2 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-background border-2 border-border">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              </div>

              <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <AccordionTrigger className="text-left hover:no-underline p-4 sm:p-6">
                  <div className="w-full space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  gap-1 sm:gap-0">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
                        <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">{company}</span>
                      </div>
                      {/* <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180 self-end sm:self-auto" /> */}
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-foreground  leading-tight">
                      {title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{period}</span>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {description}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 sm:mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground border border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
}
