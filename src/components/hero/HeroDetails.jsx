import { HeroTypingAnimation } from "./HeroTypingAnimation";

export const HeroDetails = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-semibold mb-3 md:mb-4 text-zinc-700">
        Abanoub Abdelmessih
      </h1>
      <div className="flex items-center justify-center md:justify-start gap-2 md:gap-5">
        <hr className="w-9 md:w-12 bg-zinc-500" />
        <p className="text-xl md:text-2xl text-zinc-500">
          <HeroTypingAnimation />
        </p>
      </div>
    </div>
  );
};
