import { experienceData } from "../../constants/ExperienceData";
import { Heading } from "../Heading";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export const Experience = () => {
  return (
    <section className="mt-8 md:mt-16 max-w-4xl mx-auto">
      <Heading title="Experience" />
      {experienceData.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </section>
  );
};
