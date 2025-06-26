import { SectionTitle } from "../Heading/SectionTitle";
import { ContactForm } from "./ContactForm";

export const GetInTouch = () => {
  return (
    <>
      <SectionTitle title="Get In Touch" />
      <div className="border-l-2 border-gray-200 pl-4 md:pl-6 py-2">
        <p className=" text-base leading-relaxed font-light  opacity-75 mb-4">
          Feel free to reach out if you have any questions or if you'd like to
          discuss a potential position. I'm always excited to hear about new
          opportunities and collaborate on innovative ideas.
        </p>
        <ContactForm />
      </div>
    </>
  );
};
