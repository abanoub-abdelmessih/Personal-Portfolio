import { HeadingBall } from "./HeadingBall";

export const Heading = ({
  title,
  size = "lg",
}: {
  title: string;
  size?: "sm" | "lg";
}) => {
  const sizeStyles = {
    sm: "text-xl md:text-2xl",
    lg: "text-2xl md:text-4xl",
  };

  return (
    <div>
      <div className="flex items-center gap-5">
        <HeadingBall />
        <h2
          className={`${sizeStyles[size]} font-light tracking-wider uppercase text-gray-800`}
        >
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* underline accent */}
      <div className="w-12 h-0.5 bg-gray-300 mt-3 ml-9"></div>
    </div>
  );
};
