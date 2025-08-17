import { Heading } from "@/components/ui/Heading";
import { FreelanceSection } from "./FreelanceSection";
// import { GetInTouchSection } from "./GetInTouchSection";

export const ContactSection = () => {
  return (
    <section className="space-y-5 md:space-y-8">
      <Heading title="Contact" />
      <FreelanceSection />
      {/* <GetInTouchSection /> */}
    </section>
  );
};
