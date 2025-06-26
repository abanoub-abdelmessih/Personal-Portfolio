import { SectionTitle } from "../Heading/SectionTitle";
import { EducationItem } from "./EducationItem";

export const EducationSection = () => {
  return (
    <>
      <SectionTitle title="Education" />
      <EducationItem
        title="Front-End & Cross Platform Mobile Development"
        year="2025"
        place={
          <>
            <span className="text-red-500 font-bold">
              Information Technology Institute ( ITI )
            </span>
          </>
        }
      />

      <EducationItem
        title="Front-End Development Diploma"
        year="2024"
        place="Route Academy"
      />
      <EducationItem
        title="Bachelor's Degree in Sociology"
        year="2024"
        place="Faculty of Arts"
      />
    </>
  );
};
