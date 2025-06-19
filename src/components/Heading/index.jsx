import { HeadingBall } from "./HeadingBall";

export const Heading = ({ title }) => {
  return (
    <div className="flex gap-2 items-center mb-2 md:mb-4">
      <HeadingBall />
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-700">
        {title}
      </h2>
    </div>
  );
};
