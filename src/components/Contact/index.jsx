import { Heading } from "../Heading";
import { FreelanceSection } from "./FreelanceSection";
import { GetInTouch } from "./GetInTouch";

export const ContactSection = () => {
  return (
    <section className="mt-8 md:mt-16 max-w-4xl mx-auto">
      <Heading title={"Contact"} />

      <FreelanceSection />

      <GetInTouch />
    </section>
  );
};
