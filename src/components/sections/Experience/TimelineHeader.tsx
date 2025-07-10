import Image from "next/image";

export const TimelineHeader = ({
  imgSrc,
  imgAlt,
  title,
  company,
  level,
  year,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  company: string;
  level: string;
  year: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between grow gap-2">
      {/* IMAGE & TITLE */}
      <div className="flex gap-2">
        <span className=" w-8 h-8 bg-gray-50 border border-zinc-200 rounded-full flex items-center justify-center shrink-0">
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="w-5 h-5 object-contain rounded-full"
            width={20}
            height={20}
          />
        </span>
        <h4 className="font-semibold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 flex flex-col gap-1">
          {title}{" "}
          <span className="text-sm font-medium text-gray-600 tracking-wide">
            at {company}
          </span>
        </h4>
      </div>
      {/* LEVEL & YEAR */}
      <div className="flex items-center gap-3">
        {level && (
          <span className="text-xs font-semibold bg-gray-100/60 border border-zinc-200 text-gray-700 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
            {level}
          </span>
        )}
        <span className="text-xs font-semibold bg-gray-100/60 border border-zinc-200 text-gray-700 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
          {year}
        </span>
      </div>
    </div>
  );
};
