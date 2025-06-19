import { HeroButtons } from "./HeroButtons";
import { HeroDetails } from "./HeroDetails";

export const HeroSection = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-start">
      <img
        src="/images/abanoub.jpg"
        alt="Abanoub profile photo"
        className="rounded-full md:w-44 md:h-44 w-32 h-32 object-cover object-top "
        loading="lazy"
      />
      <HeroDetails />
      <HeroButtons />
    </section>
  );
};
