import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { TimelineItemProps } from "@/Types/TimelineItemTypes";
import { Paragraph } from "@/components/ui/Paragraph";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineTechStack } from "./TimelineTechStack";
import { TimelineAchievements } from "./TimelineAchievements";

export const TimelineItem = ({
  imgSrc,
  imgAlt,
  company,
  title,
  description,
  level,
  year,
  slug,
  techStack,
  achievements,
}: TimelineItemProps) => {
  return (
    <>
      <TimelineHeader
        company={company}
        imgAlt={imgAlt}
        imgSrc={imgSrc}
        title={title}
        level={level}
        year={year}
      />

      {/* Description */}
      <Paragraph className="my-3 md:text-base">{description}</Paragraph>

      {/* Details */}
      <Accordion type="single" collapsible className="w-full mb-5 last:mb-0">
        <AccordionItem value={slug}>
          <AccordionTrigger className="bg-gray-100/60  px-4 py-3 rounded-md hover:no-underline border border-zinc-200">
            Show Details
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4  p-4 border border-zinc-200 my-4 rounded-lg">
            {/* Tech Stack */}
            <TimelineTechStack techStack={techStack} />

            {/* Achievements */}
            <TimelineAchievements achievements={achievements} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
