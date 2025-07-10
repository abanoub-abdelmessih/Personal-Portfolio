import { Heading } from "@/components/ui/Heading";
import { experienceData } from "@/data/experienceData";
import { TimelineItem } from "./TimelineItem";
import { LeftBorderContainer } from "@/components/ui/LeftBorderContainer";

export const ExperienceSection = () => {
  return (
    <section className="space-y-5 md:space-y-8">
      <Heading title="Experience" />
      <LeftBorderContainer>
        {experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </LeftBorderContainer>
    </section>
  );
};
