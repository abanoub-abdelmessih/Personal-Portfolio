import { FaUpwork } from "react-icons/fa6";

export const FreelanceSection = () => {
  return (
    <div className="border border-gray-200 p-5 rounded-lg hover:translate-x-1 hover:border-gray-400 duration-300 flex flex-col md:flex-row justify-around gap-5 md:gap-0 items-start md:items-center group">
      <FaUpwork className="text-5xl group-hover:text-green-500 duration-300" />
      <div className="">
        <h3 className="text-xl md:text-2xl font-bold">
          I'm available for freelance work.
        </h3>
        <p className="text-sm md:text-base opacity-70 font-light leading-relaxed">
          If you have an interesting project, I'm available on Upwork.
        </p>
      </div>
      <a href="" className="bg-gray-200/70 px-3 py-1 rounded-full font-bold">
        Hire me
      </a>
    </div>
  );
};
