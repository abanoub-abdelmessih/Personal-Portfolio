import { EducationSection } from "../Education";
import { Heading } from "../Heading";
import { AboutDescription } from "./AboutDescription";

export const AboutSection = () => {
  return (
    <section className="mt-8 md:mt-16 max-w-4xl mx-auto">
      <Heading title={"About Me"} />
      <AboutDescription />
      <EducationSection />
    </section>
  );
};
