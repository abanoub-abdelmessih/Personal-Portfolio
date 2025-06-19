import { Heading } from "../Heading";
import { AboutDetails } from "./AboutDetails";

export const AboutSection = () => {
  return (
    <section className="mt-5 md:mt-10 p-4 md:p-8 border border-gray-300 rounded-3xl">
      <Heading title={"About Me"} />
      <AboutDetails />
    </section>
  );
};
