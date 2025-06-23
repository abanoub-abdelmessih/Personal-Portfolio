export const StackToolTip = ({ name }) => {
  return (
    <span className="select-none absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white font-medium px-2 py-1 text-xs rounded whitespace-nowrap transition-opacity duration-300 z-10">
      {name}
    </span>
  );
};
