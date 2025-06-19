import { AboutDetails } from "./AboutDetails";

export const AboutSection = () => {
  return (
    <section className="mt-5 md:mt-10 p-4 md:p-8 border border-gray-300 rounded-3xl">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
        About Me
      </h2>
      <AboutDetails />
    </section>
  );
};
