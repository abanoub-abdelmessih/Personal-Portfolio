export const ExperienceItemHeader = ({ title, company, level, year }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between grow gap-2 ">
      <h4 className="font-semibold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 flex flex-col gap-1">
        {title}{" "}
        <span className="text-sm font-medium text-gray-600 tracking-wide">
          at {company}
        </span>
      </h4>
      <div className="flex items-center gap-3">
        {level && (
          <span className="text-xs font-semibold bg-gray-200/80 text-gray-700 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
            {level}
          </span>
        )}
        <span className="text-xs font-semibold bg-gray-200/80 text-gray-700 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
          {year}
        </span>
      </div>
    </div>
  );
};
