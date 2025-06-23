import { Heading } from "../Heading";
import { AboutDetails } from "./AboutDetails";

export const AboutSection = () => {
  return (
    <section className="mt-8 md:mt-16">
      <div className="max-w-4xl mx-auto">
        <Heading title={"About Me"} />
        <AboutDetails />
      </div>
    </section>
  );
};
