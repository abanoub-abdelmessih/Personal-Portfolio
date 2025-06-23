export const EducationItem = ({ title, year, place }) => {
  return (
    <div className="hover:translate-x-4 transition-all duration-300 mb-6 last:mb-0 border-l-2 border-gray-200 pl-4 md:pl-6 py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h4 className="font-medium text-lg">{title}</h4>
        <span className="text-sm font-mono bg-gray-200/70 px-3 py-1 rounded-full w-fit">
          {year}
        </span>
      </div>
      <p className="text-base opacity-70 mt-1 font-light">{place}</p>
    </div>
  );
};
