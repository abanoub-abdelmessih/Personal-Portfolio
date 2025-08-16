import { Heading } from "@/components/ui/Heading";
import { WORK_EXPERIENCE } from "@/data/experienceData";
import { LeftBorderContainer } from "@/components/ui/LeftBorderContainer";
import { WorkExperience } from "@/components/ui/work-experience";

export const ExperienceSection = () => {
  return (
    <section className="space-y-5 md:space-y-8">
      <Heading title="Experience" />
      <LeftBorderContainer>
        {/* {experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))} */}
        <WorkExperience experiences={WORK_EXPERIENCE} />
      </LeftBorderContainer>
    </section>
  );
};
