export const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      <h3 className="text-xl md:text-2xl font-light tracking-wider uppercase">
        {title}
      </h3>
      <div className="flex-1 h-px bg-gray-200"></div>
    </div>
  );
};
