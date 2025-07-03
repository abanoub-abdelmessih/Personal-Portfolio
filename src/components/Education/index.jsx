import { SectionTitle } from "../Heading/SectionTitle";
import { EducationItem } from "./EducationItem";

export const EducationSection = () => {
  return (
    <>
      <SectionTitle title="Education" />
      <EducationItem
        title="Bachelor's Degree in Sociology"
        year="2024"
        place="Faculty of Arts"
      />
    </>
  );
};
