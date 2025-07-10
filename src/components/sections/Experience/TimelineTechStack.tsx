export const TimelineTechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <>
      {techStack && techStack.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center border-l-4 pl-4 border-gray-700">
            Tech Stack :
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-zinc-50 text-zinc-700 text-xs font-medium rounded-full border border-zinc-200 hover:bg-zinc-100 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
