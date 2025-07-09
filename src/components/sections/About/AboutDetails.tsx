import { LeftBorderContainer } from "@/components/ui/LeftBorderContainer";
import { Paragraph } from "@/components/ui/Paragraph";

export const AboutDetails = () => {
  return (
    <>
      <LeftBorderContainer>
        <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide">
          I&apos;m a <span className="font-medium">Front-End Developer</span>{" "}
          focused on delivering modern, scalable, and accessible web interfaces.
          My core stack revolves around{" "}
          <span className="font-medium">
            React, Next.js, TypeScript, and Tailwind CSS
          </span>
          , and I&apos;m passionate about transforming complex ideas into clean,
          performant, and maintainable UI systems.
        </p>

        <Paragraph>
          My development approach blends technical precision with a deep
          understanding of design and user experience. I build component-driven
          architectures, optimize performance with real-world constraints in
          mind, and care about details that make interfaces not just functional
          — but enjoyable.
        </Paragraph>

        <Paragraph>
          I&apos;ve sharpened my skills through hands-on training at the{" "}
          <span className="font-medium">
            Information Technology Institute (ITI)
          </span>
          , where I worked in agile-based team environments, followed best
          practices in code quality, and delivered projects aligned with real
          business needs. This experience enhanced my ability to collaborate,
          iterate fast, and deliver consistent value.
        </Paragraph>

        <Paragraph>
          I&apos;m confident building complete UI layers from scratch,
          integrating with APIs, managing application state, and handling
          responsiveness, accessibility, and performance optimization. I write
          thoughtful code, communicate clearly, and continuously seek to improve
          both the product and the process behind it.
        </Paragraph>
      </LeftBorderContainer>
    </>
  );
};
