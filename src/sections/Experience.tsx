import Heading from "@/components/Heading";
import { WorkExperience } from "@/components/work-experience";
import { WorkExperienceData } from "@/data/data";

function Experience() {
  return (
    <section>
      {/* Experience Header */}
      <Heading title="Experience" />

      {/* Experience Content */}
      <WorkExperience experiences={WorkExperienceData} />
    </section>
  );
}
export default Experience;
