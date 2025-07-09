import { Heading } from "@/components/ui/Heading";
import { AboutDetails } from "./AboutDetails";

export const AboutSection = () => {
  return (
    <section className="space-y-5 md:space-y-8">
      <Heading title="About me" />
      <AboutDetails />
    </section>
  );
};
