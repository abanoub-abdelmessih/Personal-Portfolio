import { TypeAnimation } from "react-type-animation";

export const HeroTypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front-End Developer",
        2500,
        "React & Next.js Specialist",
        2500,
        "UI/UX Focused Engineer",
        2500,
        "Clean & Scalable Code",
        2500,
      ]}
      wrapper="span"
      speed={30}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
