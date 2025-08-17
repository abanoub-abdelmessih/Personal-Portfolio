import { LeftBorderContainer } from "@/components/ui/LeftBorderContainer";
import { Paragraph } from "@/components/ui/Paragraph";

export const AboutDetails = () => {
  return (
    <>
      <LeftBorderContainer>
        <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide">
          Hello, World! I&apos;m Abanoub a Front-End Developer passionate about
          building modern, scalable, and accessible web applications with clean
          and user-friendly designs.
        </p>

        <Paragraph>
          I specialize in{" "}
          <span className="font-medium">
            React, Next.js, TypeScript, and Tailwind CSS
          </span>
          , creating component-driven interfaces that are fast, maintainable,
          and optimized for real-world use. I enjoy turning complex ideas into
          intuitive digital experiences.
        </Paragraph>

        <Paragraph>
          I sharpened my skills through hands-on training at the{" "}
          <span className="font-medium">
            Information Technology Institute (ITI)
          </span>
          , where I worked in agile teams, followed best practices, and
          delivered projects aligned with real business needs.
        </Paragraph>

        <Paragraph>
          Beyond structured learning, I&apos;ve built personal projects like{" "}
          <span className="font-medium">Anime Vault</span> (infinite scroll with
          Next.js server components),
          <span className="font-medium">ShopPix</span> (a full e-commerce app),
          and
          <span className="font-medium"> Linked Posts</span> (a social media
          platform), which allowed me to explore real-world challenges in
          performance, state management, and UX design.
        </Paragraph>

        <Paragraph>
          Always curious and improving, I aim to craft software that is not just
          functional but enjoyable to use. Let&apos;s connect and build
          something great!
        </Paragraph>
      </LeftBorderContainer>
    </>
  );
};
