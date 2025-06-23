export const StackIcon = ({ icon }) => {
  return (
    <div className="border border-gray-300 rounded-2xl px-10 py-4 md:p-4 flex justify-center items-center  hover:border-gray-400 hover:shadow-md transition-all duration-300">
      <span className="text-4xl md:text-6xl">{icon}</span>
    </div>
  );
};
