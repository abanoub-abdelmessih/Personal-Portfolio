import { CgArrowTopRight } from "react-icons/cg";
import { SocialLinks } from "../../constants/SocialLinks";

export const HeroButtons = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 my-5">
      {/* Social Icons */}
      <div className="flex gap-1.5 p-2 border border-gray-200 rounded-full bg-gray-100">
        {SocialLinks.map(({ icon, href, label }, index) => (
          <a
            key={index}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* CV Button */}
      <a
        href="https://drive.google.com/file/d/1bUr2i3qNQ3U9kXX0YRz3ykKNzQDg1LA1/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-light px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
      >
        <span className="tracking-wide">Preview CV</span>
        <CgArrowTopRight
          size={20}
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
        />
      </a>
    </div>
  );
};
