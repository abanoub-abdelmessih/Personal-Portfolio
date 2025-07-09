import { Heading } from "@/components/ui/Heading";
import { LeftBorderContainer } from "@/components/ui/LeftBorderContainer";
import { Paragraph } from "@/components/ui/Paragraph";
import { ContactForm } from "./ContactForm";

export const GetInTouchSection = () => {
  return (
    <>
      <Heading size="sm" title="Get In Touch" />
      <LeftBorderContainer>
        <Paragraph className="mt-0">
          Feel free to reach out if you have any questions or if you&apos;d like
          to discuss a potential position. I&apos;m always excited to hear about
          new opportunities and collaborate on innovative ideas.
        </Paragraph>
        <ContactForm />
      </LeftBorderContainer>
    </>
  );
};
