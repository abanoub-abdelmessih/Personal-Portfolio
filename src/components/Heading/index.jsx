import { HeadingBall } from "./HeadingBall";

export const Heading = ({ title }) => {
  return (
    <div className="mb-5 md:mb-8">
      <div className="flex items-center gap-6">
        <HeadingBall />
        <h2 className="text-2xl md:text-4xl font-light tracking-wider uppercase text-gray-800">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* underline accent */}
      <div className="w-12 h-0.5 bg-gray-300 mt-3 ml-9"></div>
    </div>
  );
};
