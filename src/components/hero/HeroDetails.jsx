import { HeadingBall } from "../Heading/HeadingBall";
import { HeroTypingAnimation } from "./HeroTypingAnimation";

export const HeroDetails = () => {
  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-wider text-gray-800 mb-6 text-center md:text-start">
        <span className="block mb-2 font-light uppercase">Abanoub</span>
        Abdelmessih
      </h1>
      <div className="flex items-center justify-center md:justify-start gap-3">
        <HeadingBall />
        <p className="text-lg md:text-xl font-light tracking-wide uppercase text-gray-600">
          <HeroTypingAnimation />
        </p>
        <div className="hidden lg:block flex-1 h-0.5 bg-gray-200" />
      </div>
    </>
  );
};
