export const ExperienceItemTechStack = ({ techStack }) => {
  if (!techStack || techStack.length === 0) {
    return null;
  }
  return (
    <div className="mb-4">
      <h5 className="text-sm font-medium text-gray-600 mb-2">Tech Stack:</h5>
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
  );
};
